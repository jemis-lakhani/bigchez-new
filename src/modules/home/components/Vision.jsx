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
        className="absolute inset-0 h-full bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("./vision/bg.png")',
          backgroundSize: "cover",
        }}
      ></div>

      <div className="main-container z-1">
        <div className="mx-auto flex w-[80%] flex-col items-center gap-8 text-white">
          <span className="flex flex-wrap items-center justify-center gap-2 text-center text-5xl leading-none font-bold">
            Empowering
            <span className="relative px-1 font-bold text-white">
              <span
                className="bg-blue-gradient absolute inset-0 -z-10 rounded-lg"
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
          <span className="text-center text-lg font-light italic lg:text-3xl">
            At <span className="font-medium">Bigchez</span>, we turn your ideas
            into impact—
            <br />
            where innovation, quality, and dedication come
            <br /> together to bring your&nbsp; vision to life.
          </span>
          <Button className={cn("btn-h-86")}>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Vision;
