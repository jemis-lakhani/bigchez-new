"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
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
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary relative py-10 lg:py-20">
      <div className="main-container flex flex-col gap-20">
        {/* Laptop screen */}
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

        {/* Mobile Screen */}
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
                  <MdOutlineKeyboardArrowUp size={30} className="text-white" />
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
                    ? "max-h-screen scale-y-100 opacity-100 duration-500"
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
            <img src="./footer/twitter.svg" />
            <img src="./footer/linkedin.svg" />
            <img src="./footer/fb.svg" />
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

      {/* Chat */}
      <div className="absolute right-4 -bottom-8 z-50 flex flex-col items-end lg:bottom-4">
        {isOpen && (
          <div className="relative mb-4 max-w-xs rounded-lg bg-white px-3 py-4 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img src="./footer/user.png" className="h-full w-full" />
              </div>
              <div className="flex-1">
                <p className="text-[#344054]">
                  Hey! Save hours on
                  <br /> research: Your solution is a<br /> click away.
                  Let&apos;s Talk!
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <IoMdClose className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute right-6 -bottom-1 h-5 w-5 rotate-45 rounded-[4px] bg-white"></div>
          </div>
        )}
        <div className="flex gap-3">
          <Link
            href="#"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-md transition-transform hover:scale-105"
          >
            <img src="./footer/whatsapp.svg" />
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#09748D] shadow-md transition-transform hover:scale-105"
            aria-label="Chat"
          >
            <img src="./footer/chat-with-us.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
