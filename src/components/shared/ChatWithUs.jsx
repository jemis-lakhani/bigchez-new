"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ChatWithUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
                <br /> research: Your solution is a<br /> click away. Let&apos;s
                Talk!
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
  );
};

export default ChatWithUs;
