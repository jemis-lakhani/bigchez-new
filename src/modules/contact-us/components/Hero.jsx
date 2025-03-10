import Header from "@/components/global/Header";
import Menu from "@/components/global/Menu";
import HRLine1 from "@/components/ui/HRLine1";
import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], display: "swap" });

const Hero = () => {
  const menuItems = [
    {
      title: "Vision",
      link: "your-vision",
    },
    { title: "Connect With Us", link: "connect-with-us" },
    { title: "Process", link: "process" },
    { title: "Partner With Us", link: "partner-with-us" },
    { title: "FAQ", link: "faq" },
  ];

  return (
    <div className="relative" id="your-vision">
      <Menu menuItems={menuItems} />
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: 'url("./contact-us/bg.png")' }}
      ></div>
      <div className="main-container relative z-30 flex flex-col pt-4">
        <Header />
        <div className="relative mx-auto flex w-full flex-col items-center gap-8 py-14 text-center lg:py-30 xl:w-[75%]">
          <div
            className={cn(
              "text-[28px] leading-none font-semibold capitalize lg:text-[50px]",
              syne.className,
            )}
          >
            Your vision deserves the best.
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
