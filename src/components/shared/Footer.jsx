"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const itemClasses = "text-lg cursor-pointer";

const Footer = ({ title, btnTxt, btnLink }) => {
  const router = useRouter();
  return (
    <div className="bg-secondary relative py-10 lg:py-20">
      <div className="main-container flex flex-col gap-20">
        <div className="flex w-full flex-col items-center justify-center gap-10">
          <span className="text-center text-[32px] font-medium capitalize lg:text-[40px]">
            {title}
          </span>
          <Button
            type="submit"
            className="!px-12 !py-3.5 text-xl capitalize lg:!px-18 lg:!py-4 lg:!text-2xl"
          >
            {btnTxt}
          </Button>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex justify-center gap-5">
            <img src="./footer/twitter.svg" alt="Twitter" />
            <img src="./footer/linkedin.svg" alt="LinkedIn" />
            <img src="./footer/fb.svg" alt="Facebook" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <span
              className={itemClasses}
              role="link"
              tabIndex={0}
              onClick={() => router.push("/")}
              onKeyDown={(e) => e.key === "Enter" && router.push("/")}
            >
              Bigchez Home
            </span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span
              className={itemClasses}
              role="link"
              tabIndex={0}
              onClick={() => router.push("/contact-us")}
              onKeyDown={(e) => e.key === "Enter" && router.push("/contact-us")}
            >
              Contact Us
            </span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span
              className={itemClasses}
              role="link"
              tabIndex={0}
              onClick={() => router.push("/blog")}
              onKeyDown={(e) => e.key === "Enter" && router.push("/blog")}
            >
              Our Blog
            </span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span
              className={itemClasses}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && router.push("#")}
            >
              Terms of Service
            </span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span
              className={itemClasses}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && router.push("#")}
            >
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
