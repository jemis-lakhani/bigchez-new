"use client";
import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";

const syne = Syne({ subsets: ["latin"], display: "swap" });

const Header = () => {
  const pathname = usePathname();
  const pathSegment = pathname.split("/").filter(Boolean).pop();

  return (
    <header className="flex flex-row items-center justify-center md:justify-between">
      <div className="flex justify-center object-contain">
        <Link
          href="/"
          className="flex items-center justify-center md:justify-start"
        >
          <img
            src="/logo.png"
            alt="Company Logo"
            className="w-[65%] 2xl:w-auto"
          />
        </Link>
      </div>

      <nav
        className="b-1 hidden items-center gap-3 rounded-[50px] px-4 py-2 shadow-[0px_0px_5px_0px_#00000014] md:flex lg:gap-4 xl:gap-3 xl:px-8 xl:py-1.5"
        aria-label="Main Navigation"
      >
        <ul
          className={cn(
            "flex h-full gap-3 text-sm font-bold uppercase",
            syne.className,
          )}
        >
          <li>
            <Link
              href="/"
              className={cn(
                "leading-none",
                pathSegment === undefined && "text-primary-gradient font-bold",
              )}
              aria-current={pathSegment === undefined ? "page" : undefined}
            >
              Home
            </Link>
          </li>
          <div className="h-auto w-[1px] bg-black font-semibold"></div>
          <li aria-hidden="true">
            <div className="h-auto w-[1px] bg-black font-semibold"></div>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={cn(
                "leading-none",
                pathSegment === "contact-us" &&
                  "text-primary-gradient font-bold",
              )}
              aria-current={pathSegment === "contact-us" ? "page" : undefined}
            >
              Contact Us
            </Link>
          </li>
          <div className="h-auto w-[1px] bg-black font-semibold"></div>
          <li aria-hidden="true">
            <div className="h-auto w-[1px] bg-black font-semibold"></div>
          </li>
          <li>
            <Link
              href="/blog"
              className={cn(
                "leading-none",
                pathSegment === "blog" && "text-primary-gradient font-bold",
              )}
              aria-current={pathSegment === "blog" ? "page" : undefined}
            >
              Blog
            </Link>
          </li>
        </ul>

        <Button className="!px-7 !py-3">
          <img
            src="/login.png"
            alt="login"
            aria-hidden="true"
            className="object-contain"
          />
          <span>Login</span>
        </Button>

        <button
          type="button"
          className="border-primary flex aspect-square w-12 items-center justify-center overflow-hidden rounded-full border p-2"
          aria-label="Announcements"
        >
          <img
            src="/announcements.png"
            alt="login"
            className="h-full w-full object-contain"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
