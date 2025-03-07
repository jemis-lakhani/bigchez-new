import Header from "@/components/global/Header";
import HRLine1 from "@/components/ui/HRLine1";
import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], display: "swap" });

const Hero = () => {
  return (
    <div className="relative">
      <div className="main-container relative z-30 flex flex-col pt-4">
        <Header />
        <div className="relative mx-auto flex w-full flex-col items-center gap-8 py-14 text-center lg:py-30 xl:w-[75%]">
          <div
            className={cn(
              "text-[28px] leading-none capitalize lg:text-[50px]",
              syne.className,
            )}
          >
            <span className="font-semibold">
              Your vision deserves the best.
            </span>
            <br />
            <span className="text-secondary-1 relative font-bold">
              Let’s bring it to life
            </span>
          </div>
          <HRLine1 />
        </div>
      </div>
    </div>
  );
};

export default Hero;
