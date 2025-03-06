"use client";

import { Button } from "@/components/ui/Button";
import HRLine from "@/components/ui/HRLine";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Buisness = () => {
  const data = [
    {
      title: "Artificial Intelligence",
      icon: "/buisness/AI.svg",
      hoverIcon: "/buisness/AI-hover.svg",
      link: "#",
    },
    {
      title: "Cloud",
      icon: "/buisness/cloud.svg",
      hoverIcon: "/buisness/cloud-hover.svg",
      link: "#",
    },
    {
      title: "Enterprise Solutions",
      icon: "/buisness/enterprise.svg",
      hoverIcon: "/buisness/enterprise-hover.svg",
      link: "#",
    },
    {
      title: "Custom Software",
      icon: "/buisness/software.svg",
      hoverIcon: "/buisness/software-hover.svg",
      link: "#",
    },
    {
      title: "Data Analytics",
      icon: "/buisness/data.svg",
      hoverIcon: "/buisness/data-hover.svg",
      link: "#",
    },
  ];

  return (
    <div className="bg-secondary py-16 lg:py-32">
      <div className="main-container flex grid-cols-1 flex-col gap-7 md:grid md:grid-cols-2 lg:gap-14 xl:grid-cols-3">
        <div className="flex flex-col gap-5">
          <div className="text-[44px] leading-[60px] lg:text-[50px]">
            <span className="font-bold">Transform Your</span>
            <br />
            <span className="text-secondary-1 font-extrabold">Business</span>
          </div>
          <HRLine className="w-[88px] lg:w-[162px]" />
          <div className="text-secondary text-xl lg:text-lg">
            <span className="font-semibold">Empower your business with</span>
            <br />
            <span className="font-bold">tailored solutions.</span>
          </div>
        </div>
        {data?.map((item, index) => (
          <div
            key={index}
            className="group border-secondary hover:!border-primary relative mx-2 overflow-hidden rounded-[30px] border bg-white py-24"
          >
            <div
              className="absolute inset-0 rounded-[30px] bg-cover bg-center opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
              style={{ backgroundImage: "url('/buisness/hover.png')" }}
            ></div>
            <div
              className="absolute inset-0 rounded-[30px] opacity-0 transition-all duration-300 group-hover:opacity-90"
              style={{
                background: `
                linear-gradient(105.44deg, rgba(206, 147, 216, 0.8) -16.82%, rgba(106, 27, 154, 0.8) 34.24%)`,
              }}
            ></div>
            <img
              src="./arrow-up-purple.svg"
              className="text-secondary-1 absolute top-4 right-4 hover:hidden"
            />

            <div className="relative z-10 flex h-full flex-1 flex-col items-center justify-center gap-6 transition-all duration-100">
              <img
                src={item.icon}
                className="object-contain group-hover:hidden"
              />
              <img
                src={item.hoverIcon}
                className="hidden object-contain group-hover:block"
              />

              <span className="text-secondary-1 text-2xl font-bold group-hover:!text-white">
                {item.title}
              </span>

              <Button className="mt-4 hidden !font-medium group-hover:flex">
                Read More
                <BsArrowUpRightCircle className="h-4 w-4 font-bold text-white" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buisness;
