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
        <Link href="/">
          <img src="/logo.png" className="w-[65%] 2xl:w-auto" />
        </Link>
      </div>
      <div className="b-1 hidden items-center gap-3 rounded-[50px] px-3 py-3 md:flex lg:gap-7 2xl:px-9 2xl:py-4">
        <div
          className={cn(
            "flex h-full gap-3 text-sm font-bold uppercase",
            syne.className,
          )}
        >
          <Link
            href="/"
            className={cn(pathSegment === undefined && activeClass, "")}
          >
            Home
          </Link>
          <div className="h-auto w-[1px] bg-black font-semibold"></div>
          <Link
            href="/contact-us"
            className={cn(pathSegment === "contact-us" && activeClass)}
          >
            Contact Us
          </Link>
          <div className="h-auto w-[1px] bg-black font-semibold"></div>
          <Link
            href="/blog"
            className={cn(pathSegment === "blog" && activeClass)}
          >
            Blog
          </Link>
        </div>
        <Button>
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
