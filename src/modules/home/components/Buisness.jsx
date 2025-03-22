"use client";
import { Button } from "@/components/ui/Button";
import HRLine from "@/components/ui/HRLine";
import { useRef, useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import BuisnessCard from "./BuisnessCard";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { cn } from "@/lib/utils";
const NavButton = ({ disabled, onClick, icon }) => (
  <button
    className={cn(
      "cursor-pointer rounded-full border border-[#CBBEBE] bg-white p-2 transition-all",
      {
        "cursor-not-allowed bg-white": disabled,
        "bg-primary opacity-100": !disabled,
      },
    )}
    style={{ boxShadow: "0px 14.01px 67.27px -16.82px #00000014" }}
    onClick={onClick}
    disabled={disabled}
  >
    {icon}
  </button>
);

const Buisness = () => {
  const [showMore, setShowMore] = useState(false);
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    {
      title: "Data Analytics",
      icon: "/buisness/data.svg",
      hoverIcon: "/buisness/data-hover.svg",
      link: "#",
    },
  ];

  const handleToggle = () => {
    setShowMore(!showMore);

    if (showMore) {
      const target = document.getElementById("transform-business");
      if (!target) return;

      const offset = target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: offset,
      });
    }
  };

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "20px",
    autoplay: false,
    autoplaySpeed: 3200,
    cssEase: "linear",
    focusOnSelect: false,
    pauseOnDotsHover: false,
    pauseOnHover: false,
    touchMove: false,
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <div className="relative">
      <div
        id="transform-business"
        className="bg-secondary flex flex-col items-center gap-20 py-16 lg:py-32"
      >
        <div className="main-container flex grid-cols-1 flex-col gap-7 md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3 2xl:gap-12">
          <div className="flex flex-col justify-center gap-5">
            <div className="text-5xl xl:text-4xl 2xl:text-5xl 2xl:leading-[60px]">
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
          <div className="relative block md:hidden">
            <Slider ref={sliderRef} {...settings}>
              {data?.map((item, index) => (
                <BuisnessCard
                  key={index}
                  data={item}
                  active={activeIndex === index}
                  isSlider
                />
              ))}
            </Slider>
            <div className="absolute top-[40%] left-0">
              <NavButton
                disabled={activeIndex === 0}
                onClick={() => sliderRef.current?.slickPrev()}
                icon={
                  <BsArrowLeftShort
                    size={32}
                    color={activeIndex !== 0 ? "white" : "black"}
                  />
                }
              />
            </div>
            <div className="absolute top-[40%] right-0">
              <NavButton
                disabled={activeIndex >= data.length - 1}
                onClick={() => sliderRef.current?.slickNext()}
                icon={
                  <BsArrowRightShort
                    size={32}
                    color={activeIndex < data.length - 1 ? "white" : "black"}
                  />
                }
              />
            </div>
          </div>
          {data?.slice(0, showMore ? data.length : 5)?.map((item, index) => (
            <BuisnessCard key={index} data={item} className="hidden md:block" />
          ))}
        </div>
        <Button
          className="btn-h-86 invisible md:visible"
          onClick={handleToggle}
        >
          {showMore ? "Show Less" : "Show More"}
          <IoArrowDownCircleOutline
            size={32}
            className={showMore ? "rotate-180 transition-transform" : ""}
          />
        </Button>
      </div>

      <div className="absolute bottom-0">
        <img src="./journals/top-curve.png" className="w-full" />
      </div>
    </div>
  );
};

export default Buisness;
