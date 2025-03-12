"use client";

import HRLine from "@/components/ui/HRLine";
import { cn } from "@/lib/utils";
import { useState } from "react";

const items = [
  {
    title: "What services does Bigchez Solutions offer?",
    content:
      "We specialize in custom software development tailored to your business needs, with a focus on educational institutions and other enterprises.",
  },
  {
    title: "Do you offer support after the software is delivered?",
    content:
      "We specialize in custom software development tailored to your business needs, with a focus on educational institutions and other enterprises.",
  },
  {
    title: "Will I have access to the source code of my software?",
    content:
      "We specialize in custom software development tailored to your business needs, with a focus on educational institutions and other enterprises.",
  },
  {
    title: "How long does it take to develop custom software?",
    content:
      "We specialize in custom software development tailored to your business needs, with a focus on educational institutions and other enterprises.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div
      id="faq"
      className="main-container flex flex-col items-center gap-8 py-20 lg:py-32"
    >
      <span className="text-center text-5xl font-bold">
        Frequently Asked Questions
      </span>

      <HRLine />

      <div className="mx-auto flex w-full flex-col xl:max-w-[75%]">
        {items.map((item, index) => (
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
                  "text-left text-sm lg:text-xl",
                  openIndex === index
                    ? "font-bold text-white"
                    : "text-secondary",
                )}
              >
                {item.title}
              </span>
              <img src={openIndex === index ? "./minus.svg" : "./plus.svg"} />
            </button>

            <div
              className={cn(
                "origin-top transform overflow-hidden transition-all ease-in-out",
                openIndex === index
                  ? "max-h-screen scale-y-100 opacity-100 duration-500"
                  : "max-h-0 scale-y-95 opacity-0 duration-300",
              )}
            >
              <div className="p-2 pb-4 text-left text-[15px] text-white lg:px-5 lg:pb-5 lg:text-lg">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
