"use client";
import Header from "@/components/global/Header";
import Menu from "../../../components/global/Menu";
import { Button } from "@/components/ui/Button";

const Hero = () => {
  const menuItems = [
    {
      title: "Transform Business",
      link: "transform-business",
    },
    { title: "Impact Journals", link: "impact-journal" },
    { title: "Promises", link: "promises" },
    { title: "Vision", link: "vision" },
    { title: "Affordable", link: "affordable" },
    { title: "Careers", link: "carriers" },
    { title: "FAQ", link: "faq" },
  ];

  return (
    <div className="relative">
      <Menu menuItems={menuItems} />
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
        <div className="relative mx-auto flex flex-col items-center gap-20 py-24 text-center 2xl:w-[75%]">
          <div className="mx-2 text-[65px] leading-none capitalize lg:mx-0 lg:text-[7.5rem]">
            <span
              className="flex flex-wrap justify-center font-extrabold text-[#16072F]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              <span className="relative">
                Your&nbsp;
                <span className="absolute -top-6 -left-10 lg:-top-4">
                  <img src="/lines.png" />
                </span>
              </span>
              needs
            </span>

            <span
              className="flex flex-wrap justify-center font-extrabold text-[#16072F] uppercase"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              our&nbsp;
              <span
                className="text-purple-gradient relative"
                style={{
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Design
                <span className="absolute right-0 -bottom-2 -z-1">
                  <img src="/lines-2.png" />
                </span>
              </span>
            </span>
          </div>
          <Button
            variant="secondary"
            className="relative box-border flex h-20 max-w-full cursor-pointer touch-manipulation items-center justify-center rounded-[1.25rem] border-2 border-[#09748D] bg-gradient-to-r from-[#FFA726] via-[#F57C00] to-[#F57C00] px-10 text-center text-2xl font-semibold text-white uppercase no-underline select-none after:absolute after:top-[-2px] after:left-0 after:-z-1 after:block after:h-20 after:w-full after:translate-x-2 after:translate-y-2 after:transform after:rounded-[1.25rem] after:bg-[linear-gradient(96.26deg,#0993AB_0%,#09748D_50%)] after:transition-transform after:duration-200 after:ease-out after:content-[''] hover:after:translate-x-0 hover:after:translate-y-0"
          >
            step into success
          </Button>
          <Button
            variant="secondary"
            className="border-primary relative box-border flex h-20 max-w-full cursor-pointer touch-manipulation items-center justify-center rounded-[1.25rem] border-2 bg-[linear-gradient(96.26deg,#0993AB_0%,#09748D_50%)] px-10 text-center text-2xl font-semibold text-white uppercase no-underline select-none after:absolute after:top-[-2px] after:left-0 after:-z-1 after:block after:h-20 after:w-full after:translate-x-2 after:translate-y-2 after:transform after:rounded-[1.25rem] after:bg-gradient-to-r after:from-[#FFA726] after:via-[#F57C00] after:to-[#F57C00] after:transition-transform after:duration-200 after:ease-out after:content-[''] hover:after:translate-x-0 hover:after:translate-y-0"
          >
            step into success
          </Button>
          <Button
            variant="secondary"
            className="text-primary relative box-border flex h-20 max-w-full cursor-pointer touch-manipulation items-center justify-center rounded-[1.25rem] border-2 border-black bg-white px-10 text-center text-2xl font-semibold uppercase no-underline select-none after:absolute after:top-[-2px] after:left-0 after:-z-1 after:block after:h-20 after:w-full after:translate-x-2 after:translate-y-2 after:transform after:rounded-[1.25rem] after:bg-black after:transition-transform after:duration-200 after:ease-out after:content-[''] hover:after:translate-x-0 hover:after:translate-y-0"
          >
            step into success
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
