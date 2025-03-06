"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const titleClass = "text-[22px] font-medium";
const itemClasses = "text-lg";

const data = {
  apps: {
    title: "Apps and Extensions",
    items: [
      { title: "Mobile Apps", link: "#" },
      { title: "Desktop Apps", link: "#" },
      { title: "Developer Center", link: "#" },
      { title: "Google Workspace Integration", link: "#" },
      { title: "Microsoft 365 Integration", link: "#" },
      { title: "Apps for Apple Watch", link: "#" },
      { title: "Product Integrations", link: "#" },
      { title: "Browser Extensions", link: "#" },
    ],
  },
  learn: {
    title: "Learn",
    items: [
      { title: "Training & Certification", link: "#" },
      { title: "Academy", link: "#" },
      { title: "Blogs", link: "#" },
      { title: "Knowledge Base", link: "#" },
      { title: "Zia", link: "#" },
      { title: "The Long Game", link: "#" },
      { title: "Newsletter", link: "#" },
    ],
  },
  community: {
    title: "Community",
    items: [
      { title: "User Community", link: "#" },
      { title: "Customer Stories", link: "#" },
      { title: "Influence", link: "#" },
      { title: "Find a Partner", link: "#" },
      { title: "Bigchez for Startups", link: "#" },
      { title: "Affiliate Program", link: "#" },
      { title: "Humans of Zoho", link: "#" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { title: "About Us", link: "#" },
      { title: "Press", link: "#" },
      { title: "Events", link: "#" },
      { title: "Newsroom", link: "#" },
      { title: "Branding Assets", link: "#" },
      { title: "Bigchez Schools", link: "#" },
      { title: "Service Status", link: "#" },
      { title: "Careers", link: "#" },
    ],
  },
  sales: {
    title: "Contact Sales",
    items: [],
  },
};

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary py-10 lg:py-20">
      <div className="main-container flex flex-col gap-20">
        <div className="hidden w-full flex-wrap justify-center gap-5 lg:flex lg:justify-between">
          {Object.entries(data).map(([key, obj], index) => {
            return obj?.items?.length ? (
              <div key={index} className="text-secondary flex flex-col gap-6">
                <span className={titleClass}>{obj.title}</span>
                <div className="flex flex-col gap-3">
                  {obj?.items?.map((item) => (
                    <Link
                      href={item.link}
                      className={itemClasses}
                      key={item.title}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              ""
            );
          })}
          <div className="text-secondary flex flex-col gap-6">
            <span className={titleClass}>Contact Sales</span>
            <div className="flex flex-col gap-3">
              <span className={itemClasses}>Phone</span>
              <span className="border-b font-normal">000000000000</span>
              <span className="border-b font-normal">000000000000</span>
              <span className={itemClasses}>Email</span>
              <span className="border-b font-normal">info@bigchez.com</span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Link href="#" className="text-[#3AACF8]">
                Support
              </Link>
              <Link href="#" className="text-[#3AACF8]">
                Talk to Concierge
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:hidden">
          {Object.entries(data).map(([key, obj], index) => (
            <div
              key={index}
              className={cn(
                "border-b border-[#E7E5EA]",
                openIndex === index
                  ? "rounded bg-[linear-gradient(96.26deg,#0993AB_0%,#09748D_50%)]"
                  : "",
              )}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full cursor-pointer items-center justify-between gap-2 p-2 focus:outline-none lg:p-5"
              >
                <span
                  className={cn(
                    "text-left text-[22px]",
                    openIndex === index
                      ? "font-bold text-white"
                      : "text-secondary",
                  )}
                >
                  {obj.title}
                </span>
                {openIndex === index ? (
                  <MdOutlineKeyboardArrowUp
                    size={30}
                    className="text-[#413E3E]"
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown
                    size={30}
                    className="text-[#413E3E]"
                  />
                )}
              </button>
              <div
                className={cn(
                  "origin-top transform overflow-hidden transition-all ease-in-out",
                  openIndex === index
                    ? "max-h-[500px] scale-y-100 opacity-100 duration-500"
                    : "max-h-0 scale-y-95 opacity-0 duration-300",
                )}
              >
                <div className="flex flex-col gap-3 p-2 pb-4 text-center text-lg text-white">
                  {obj?.items?.length ? (
                    obj?.items?.map((navlink, index) => (
                      <Link href={navlink?.link ?? "#"} key={index}>
                        {navlink?.title}
                      </Link>
                    ))
                  ) : (
                    <div className="flex flex-col gap-3">
                      <span className={itemClasses}>Phone</span>
                      <span className="font-normal">000000000000</span>
                      <span className="font-normal">000000000000</span>
                      <span className={itemClasses}>Email</span>
                      <span className="font-normal">info@bigchez.com</span>
                      <Link href="#" className="text-[#3AACF8]">
                        Support
                      </Link>
                      <Link href="#" className="text-[#3AACF8]">
                        Talk to Concierge
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex justify-center gap-5">
            <img src="./footer/twitter.png" />
            <img src="./footer/linkedin.png" />
            <img src="./footer/fb.png" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <span className={itemClasses}>Bigchez Home</span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span className={itemClasses}>Contact Us</span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span className={itemClasses}>Our Blog</span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span className={itemClasses}> Terms of Service</span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span className={itemClasses}>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
