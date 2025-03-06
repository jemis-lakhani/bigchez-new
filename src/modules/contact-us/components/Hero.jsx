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
        <div className="relative mx-auto flex flex-col items-center gap-8 py-24 text-center xl:w-[75%]">
          <div
            className={cn(
              "text-[65px] leading-none capitalize lg:text-[50px]",
              syne.className,
            )}
          >
            <span className="flex flex-wrap justify-center font-semibold">
              Your vision deserves the best.
            </span>
            <span className="flex flex-wrap justify-center font-bold">
              our&nbsp;
              <span className="text-secondary-1 relative">
                Let’s bring it to life
              </span>
            </span>
          </div>
          <HRLine1 />
        </div>
      </div>
    </div>
  );
};

export default Hero;
