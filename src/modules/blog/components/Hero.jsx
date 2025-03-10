import Header from "@/components/global/Header";
import Menu from "@/components/global/Menu";
import HRLine1 from "@/components/ui/HRLine1";
import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], display: "swap" });

const Hero = () => {
  const menuItems = [
    {
      title: "Impactful Stories",
      link: "impactful-stories",
    },
    { title: "Blogs", link: "blogs" },
  ];

  return (
    <div className="relative" id="impactful-stories">
      <Menu menuItems={menuItems} />
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: 'url("./contact-us/bg.png")' }}
      ></div>
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
            <span className="relative ml-1 rounded-[10px] px-2 font-bold text-white">
              <span
                className="blue-gradient-bg absolute inset-0 -z-10 rounded-[10px]"
                style={{
                  transform: "rotate(-0.5deg)",
                }}
              ></span>
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
