import { Button } from "@/components/ui/Button";
import HRLine1 from "@/components/ui/HRLine1";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

const Careers = () => {
  return (
    <div
      id="carriers"
      className="relative flex items-center justify-center py-40 md:py-32"
    >
      <div
        className="absolute inset-0 hidden bg-contain bg-center bg-no-repeat md:block 2xl:bg-cover"
        style={{
          backgroundImage: 'url("./careers/bg.png")',
        }}
      ></div>
      <div
        className="absolute inset-0 block bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: 'url("./careers/bg-mobile.png")',
        }}
      ></div>

      <div className="relative z-10 mx-2 flex h-full w-full flex-col items-center justify-center gap-6 rounded-4xl border border-white bg-[#182844] py-4 md:w-2/3 lg:rounded-[50px] lg:py-12 xl:w-1/2 xl:py-20">
        <div
          className={cn(
            "relative z-2 flex flex-wrap items-center justify-center gap-2 text-[3.25rem] text-white lg:text-6xl xl:text-7xl",
            outfit.className,
          )}
        >
          Become A&nbsp;
          <span className="chezzer-text">Chezzer!</span>
        </div>
        <HRLine1 />
        <div className="flex items-center text-3xl text-white lg:text-4xl xl:text-5xl">
          Join the&nbsp;
          <span className="bigchez-text">BigChez</span>
          &nbsp;Team
        </div>
        <span className="text-center text-lg font-normal text-white lg:text-2xl">
          We’re looking for innovators, creators, and problem
          <br /> solvers. Ready to build the future of tech with us?
        </span>
        <Button className={cn("btn-h-86")}>Explore careers</Button>
      </div>
    </div>
  );
};

export default Careers;
