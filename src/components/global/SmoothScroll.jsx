"use client";

import React, {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import { useTransform, useSpring, motion, useScroll } from "framer-motion";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

const menuItems = {
  home: [
    {
      title: "Transform Business",
      link: "transform-business",
    },
    { title: "Impact Journals", link: "impact-journal" },
    { title: "Promises", link: "promises" },
    { title: "Vision", link: "vision" },
    { title: "Affordable", link: "affordable" },
    { title: "Careers", link: "carriers" },
    { title: "FAQ", link: "faq" },
  ],
  contactUs: [
    {
      title: "Vision",
      link: "your-vision",
    },
    { title: "Connect With Us", link: "connect-with-us" },
    { title: "Process", link: "process" },
    { title: "Partner With Us", link: "partner-with-us" },
    { title: "FAQ", link: "faq" },
  ],
  blog: [
    {
      title: "Impactful Stories",
      link: "impactful-stories",
    },
    { title: "Blogs", link: "blogs" },
  ],
};

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);
  const [menu, setMenu] = useState(menuItems.home);
  const pathName = usePathname();

  const usingKeyboardFocus = useRef(false);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useEffect(() => {
    if (pathName.includes("contact-us")) {
      setMenu(menuItems.contactUs);
    } else if (pathName.includes("blog")) {
      setMenu(menuItems.blog);
    } else {
      setMenu(menuItems.home);
    }
  }, [pathName]);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries),
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 75 };
  const spring = useSpring(transform, physics);

  const scrollToId = useCallback((id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const offset = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Tab") {
        usingKeyboardFocus.current = true;
      }
    }
    function handleMouseDown() {
      usingKeyboardFocus.current = false;
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    function handleFocusIn(event) {
      if (!scrollRef.current) return;
      if (!(event.target instanceof HTMLElement)) return;
      if (!usingKeyboardFocus.current) return;

      if (scrollRef.current.contains(event.target)) {
        const targetRect = event.target.getBoundingClientRect();
        const containerRect = scrollRef.current.getBoundingClientRect();
        const offset =
          targetRect.top - containerRect.top > 150
            ? targetRect.top - containerRect.top - 150
            : targetRect.top - containerRect.top;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }

    document.addEventListener("focusin", handleFocusIn);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [spring]);

  return (
    <>
      <Menu menuItems={menu} scrollToId={scrollToId} />
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="scroll-container"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
