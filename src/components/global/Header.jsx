"use client";
import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";

const syne = Syne({ subsets: ["latin"], display: "swap" });

const activeClass = "text-primary-gradient font-bold";

const Header = () => {
  const pathname = usePathname();
  const pathSegment = pathname.split("/").filter(Boolean).pop();

  return (
    <div className="flex flex-row items-center justify-center md:justify-between">
      <div className="flex justify-center object-contain">
        <Link
          href="/"
          className="flex items-center justify-center md:justify-start"
        >
          <img src="/logo.png" className="w-[65%] 2xl:w-auto" />
        </Link>
      </div>
      <div className="b-1 hidden items-center gap-3 rounded-[50px] px-4 py-2 shadow-[0px_0px_5px_0px_#00000014] md:flex lg:gap-4 xl:gap-3 xl:px-8 xl:py-1.5">
        <div
          className={cn(
            "flex h-full gap-3 text-sm font-bold uppercase",
            syne.className,
          )}
        >
          <Link
            href="/"
            className={cn(
              "leading-none",
              pathSegment === undefined && activeClass,
              "",
            )}
          >
            Home
          </Link>
          <div className="h-auto w-[1px] bg-black font-semibold"></div>
          <Link
            href="/contact-us"
            className={cn(
              "leading-none",
              pathSegment === "contact-us" && activeClass,
            )}
          >
            Contact Us
          </Link>
          <div className="h-auto w-[1px] bg-black font-semibold"></div>
          <Link
            href="/blog"
            className={cn(
              "leading-none",
              pathSegment === "blog" && activeClass,
            )}
          >
            Blog
          </Link>
        </div>
        <Button className="!px-7 !py-3">
          <img src="/login.png" className="object-contain" />
          <span>Login</span>
        </Button>
        <div className="border-primary flex aspect-square w-12 items-center justify-center overflow-hidden rounded-full border p-2">
          <img
            src="/announcements.png"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
