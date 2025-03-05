import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"], display: "swap" });

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 object-cover"
        style={{ backgroundImage: 'url("./bg.png")' }}
      ></div>
      <div
        className="absolute inset-0 object-cover"
        style={{ backgroundImage: 'url("./bg-2.png")' }}
      ></div>
      <div className="main-container relative z-30 flex flex-col pt-4">
        <div className="flex flex-row items-center justify-center lg:justify-between">
          <img src="/logo.png" className="w-[260px] object-contain lg:w-auto" />
          <div className="hidden items-center gap-7 rounded-[50px] border-1 px-9 py-4 lg:flex">
            <div
              className={cn(
                "flex gap-3 text-sm font-bold uppercase",
                syne.className,
              )}
            >
              <Link href="/about">Home</Link>
              <div className="h-auto w-[1px] bg-black font-semibold"></div>
              <Link href="/about">Contact Us</Link>
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
        <div className="relative flex flex-col items-center gap-20 py-24 text-center">
          <div className="text-[65px] leading-none lg:text-[140px]">
            <span className="font-semibold">
              <span className="relative">
                Your&nbsp;
                <span className="absolute -top-4 -left-10 lg:top-0">
                  <img src="/lines.png" />
                </span>
              </span>
              needs
            </span>
            <br />
            <div className="font-bold uppercase">
              our
              <span className="text-secondary-1 relative">
                Design
                <span className="absolute right-0 bottom-0 -z-1">
                  <img src="/lines-2.png" />
                </span>
              </span>
            </div>
          </div>
          <Button
            variant="secondary"
            className="!text-2xl tracking-wide uppercase"
            style={{
              borderColor: "#09748D",
            }}
          >
            step into success
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
