import { Button } from "@/components/ui/Button";
import HRLine from "@/components/ui/HRLine";
import { cn } from "@/lib/utils";
import React from "react";

const Vision = () => {
  return (
    <div
      id="vision"
      className="relative flex items-center justify-center py-20 lg:py-28 2xl:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("./vision/bg.png")' }}
      ></div>

      <div className="main-container z-1 flex flex-col items-center gap-8 text-white">
        <span className="flex flex-wrap items-center justify-center gap-2 text-center text-5xl leading-none font-bold">
          Empowering
          <span className="relative px-1 font-bold text-white">
            <span
              className="blue-gradient-bg absolute inset-0 -z-10 rounded-[10px]"
              style={{
                transform: "rotate(-0.5deg)",
              }}
            ></span>
            Your Vision
          </span>
        </span>

        <div className="mt-2 flex justify-center">
          <HRLine />
        </div>
        <span className="text-center text-lg font-medium italic lg:text-3xl">
          At <span className="font-bold">Bigchez</span>, we turn your ideas into
          impact—
          <br />
          where innovation, quality, and dedication come
          <br /> together to bring your
          <span className="font-semibold">vision to life.</span>
        </span>
        <Button className={cn("btn-h-86")}>Learn More</Button>
      </div>
    </div>
  );
};

export default Vision;
