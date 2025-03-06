"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItem, setExpandedItem] = useState(null);

  const menuItems = [
    { title: "Transform Business", subItems: ["jemis"] },
    { title: "Impact Journals", subItems: [] },
    { title: "Promises", subItems: [] },
    { title: "Vision", subItems: [] },
    { title: "Affordable", subItems: [] },
    { title: "Carriers", subItems: [] },
    { title: "FAQ", subItems: [] },
  ];

  return (
    <div className="fixed top-1/2 z-40 flex flex-col lg:top-1/4 lg:left-0">
      <button
        className="blue-gradient-bg absolute top-0 flex h-10 w-10 cursor-pointer items-center justify-center text-white shadow-md focus:outline-none lg:left-full lg:h-15 lg:w-15 lg:rounded-r-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoMdClose className="w:-12 h-8 w-8 lg:h-12" />
        ) : (
          <IoIosArrowForward className="w:-12 h-8 w-8 rotate-180 lg:h-12 lg:rotate-0" />
        )}
      </button>
      <div
        className={cn(
          "rounded-md bg-white py-2 shadow-lg transition-all duration-300",
          isOpen ? "w-56 opacity-100 lg:w-72" : "w-0 overflow-hidden opacity-0",
        )}
      >
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={cn(
                  "flex w-full cursor-pointer items-center justify-start gap-2 px-4 py-2 text-left text-xl font-medium",
                  expandedItem === index
                    ? "blue-gradient-text"
                    : "text-secondary",
                )}
                onClick={() =>
                  setExpandedItem(expandedItem === index ? null : index)
                }
              >
                <IoIosArrowForward size={20} />
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
