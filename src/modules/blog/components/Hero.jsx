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
        <div className="relative mx-auto flex flex-col items-center gap-8 py-14 text-center lg:py-30 xl:w-[75%]">
          <div
            className={cn(
              "flex flex-wrap items-center justify-center gap-2 text-center text-4xl leading-none font-semibold lg:text-[58px]",
              syne.className,
            )}
          >
            Our
            <span className="blue-gradient-bg ml-1 rounded-[10px] px-2 font-bold text-white">
              Impactful Stories
            </span>
          </div>
          <HRLine1 />
        </div>
      </div>
    </div>
  );
};

export default Hero;
