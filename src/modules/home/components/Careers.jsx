import { Button } from "@/components/ui/Button";
import HRLine1 from "@/components/ui/HRLine1";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

const Careers = () => {
  return (
    <div
      id="carriers"
      className="relative flex items-center justify-center py-32"
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("./careers/bg.png")' }}
      ></div>
      <div className="relative z-10 mx-2 flex h-full w-full flex-col items-center justify-center gap-8 rounded-4xl border border-white bg-[#182844] py-8 lg:w-[930px] lg:rounded-[50px] lg:py-30">
        <div
          className={cn(
            "relative z-2 flex flex-wrap items-center justify-center gap-2 text-[46px] text-white lg:text-[80px] lg:leading-[60px]",
            outfit.className,
          )}
        >
          Become A&nbsp;
          <span className="chezzer-text">Chezzer!</span>
        </div>
        <HRLine1 />
        <div className="flex items-center text-2xl leading-[40px] text-white lg:text-[40px]">
          Join the&nbsp;
          <span className="bigchez-text">BigChez</span>
          &nbsp;Team
        </div>
        <span className="text-center text-sm font-normal text-white lg:text-2xl">
          We’re looking for innovators, creators, and problem
          <br /> solvers. Ready to build the future of tech with us?
        </span>
        <Button className={cn("btn-h-86")}>Explore careers</Button>
      </div>
    </div>
  );
};

export default Careers;
