import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/Button";

const syne = Syne({ subsets: ["latin"], display: "swap" });

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center lg:justify-between">
      <div className="flex justify-center object-contain">
        <img src="/logo.png" className="w-[65%] lg:w-auto" />
      </div>
      <div className="hidden items-center gap-7 rounded-[50px] border-1 px-9 py-4 lg:flex">
        <div
          className={cn(
            "flex gap-3 text-sm font-bold uppercase",
            syne.className,
          )}
        >
          <Link href="/">Home</Link>
          <div className="h-auto w-[1px] bg-black font-semibold"></div>
          <Link href="/contact-us">Contact Us</Link>
          <div className="h-auto w-[1px] bg-black font-semibold"></div>
          <Link href="/about">Blog</Link>
        </div>
        <Button>
          <img src="/login.png" className="object-contain" />
          <span>Login</span>
        </Button>
        <div className="border-primary flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border">
          <img src="/announcements.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
