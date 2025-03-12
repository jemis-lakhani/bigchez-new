"use client";
import Header from "@/components/global/Header";
import Menu from "../../../components/global/Menu";

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
          <button
            // className="relative inline-block cursor-pointer rounded-md bg-[var(--primary)] px-8 py-4 text-center text-2xl font-bold text-white uppercase no-underline transition-all duration-200 hover:bg-[#ff8c16] hover:shadow-[0px_1px_4px_rgba(0,0,0,0.16),0px_0px_0px_2px_#e97600]">
            className="relative inline-block cursor-pointer rounded-md bg-[#2cbc63] px-8 py-4 text-center text-2xl font-bold text-white uppercase no-underline transition-all duration-200 hover:bg-[#30d46f] hover:shadow-[0px_1px_4px_rgba(0,0,0,0.16),0px_0px_0px_2px_#1a9047]"
          >
            step into success
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
