"use client";
import Header from "@/components/global/Header";
import { Button } from "@/components/ui/Button";
import Menu from "./Menu";

const Hero = () => {
  return (
    <div className="relative">
      <Menu />
      <div
        className="absolute inset-0 object-cover"
        style={{ backgroundImage: 'url("./bg.png")' }}
      ></div>
      <div
        className="absolute inset-0 object-cover"
        style={{ backgroundImage: 'url("./bg-2.png")' }}
      ></div>
      <div className="main-container relative z-30 flex flex-col pt-4">
        <Header />
        <div className="relative mx-auto flex flex-col items-center gap-20 py-24 text-center xl:w-[75%]">
          <div className="text-[65px] leading-none capitalize lg:text-[140px]">
            <span className="flex flex-wrap justify-center font-semibold">
              <span className="relative">
                Your&nbsp;
                <span className="absolute -top-6 -left-10 lg:-top-4">
                  <img src="/lines.png" />
                </span>
              </span>
              needs
            </span>
            <span className="flex flex-wrap justify-center font-bold uppercase">
              our&nbsp;
              <span className="text-secondary-1 relative">
                Design
                <span className="absolute right-0 bottom-0 -z-1">
                  <img src="/lines-2.png" />
                </span>
              </span>
            </span>
          </div>
          <Button
            variant="secondary"
            className="!px-12 !py-5 text-base uppercase lg:!px-18 lg:!py-6 lg:!text-2xl"
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
