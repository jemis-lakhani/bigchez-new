import ChatWithUs from "@/components/shared/ChatWithUs";
import { Button } from "@/components/ui/Button";
import React from "react";

const itemClasses = "text-lg";

const Footer = ({ title, btnTxt, btnLink }) => {
  return (
    <div className="bg-secondary relative py-10 lg:py-20">
      <div className="main-container flex flex-col gap-20">
        <div className="flex w-full flex-col items-center justify-center gap-10">
          <span className="text-center text-[32px] font-medium capitalize lg:text-[40px]">
            {title}
          </span>
          <Button
            type="submit"
            className="!px-12 !py-3.5 text-base capitalize lg:!px-18 lg:!py-4 lg:!text-2xl"
          >
            {btnTxt}
          </Button>
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
      <ChatWithUs />
    </div>
  );
};

export default Footer;
