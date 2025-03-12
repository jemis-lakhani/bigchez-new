"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";

const Menu = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-[40%] right-0 left-auto z-40 flex flex-col">
      <button
        className="blue-gradient-bg absolute top-0 right-full flex h-10 w-10 cursor-pointer items-center justify-center rounded-l-lg rounded-r-none text-white shadow-md focus:outline-none lg:h-15 lg:w-15"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoMdClose className="h-8 w-8 lg:h-12 lg:w-12" />
        ) : (
          <IoIosArrowForward className="h-8 w-8 rotate-180 lg:h-12 lg:w-12" />
        )}
      </button>
      <div
        className={cn(
          "bg-white py-2 shadow-lg transition-all duration-300",
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
                    ? "text-blue-gradient"
                    : "text-secondary",
                )}
                onClick={() => {
                  handleScroll(item.link);
                  setExpandedItem(expandedItem === index ? null : index);
                }}
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
