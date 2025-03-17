"use client";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import {
  BsArrowDownShort,
  BsArrowLeftShort,
  BsArrowRightShort,
  BsArrowUpShort,
} from "react-icons/bs";
import Slider from "react-slick";

const locations = [
  "CHENNAI",
  "DELHI (NCR)",
  "KOLKATA",
  "KOLKATA",
  "KOLKATA",
  "KOLKATA",
];

const data = [
  {
    country: "India",
    flag: "./contact-us/presence/india.png",
    address:
      "Estancia IT Park, Plot no. 140, 151,GST Road, Vallancheri,Chengalpattu District - 603 202, India",
    cities: [
      "CHENNAI",
      "DELHI (NCR)",
      "KOLKATA",
      "KOLKATA",
      "KOLKATA",
      "KOLKATA",
    ],
    contactNo: "000-0000000",
  },
  {
    country: "China",
    flag: "./contact-us/presence/china.png",
    address:
      "Estancia IT Park, Plot no. 140, 151,GST Road, Vallancheri,Chengalpattu District - 603 202, India",
    cities: ["Beijing"],
    contactNo: "000-0000000",
  },
  {
    country: "Japan",
    flag: "./contact-us/presence/japan.png",
    address:
      "Estancia IT Park, Plot no. 140, 151,GST Road, Vallancheri,Chengalpattu District - 603 202, India",
    cities: ["Yokohama"],
    contactNo: "000-0000000",
  },
  {
    country: "India",
    flag: "./contact-us/presence/india.png",
    address:
      "Estancia IT Park, Plot no. 140, 151,GST Road, Vallancheri,Chengalpattu District - 603 202, India",
    cities: [
      "CHENNAI",
      "DELHI (NCR)",
      "KOLKATA",
      "KOLKATA",
      "KOLKATA",
      "KOLKATA",
    ],
    contactNo: "000-0000000",
  },
  {
    country: "China",
    flag: "./contact-us/presence/china.png",
    address:
      "Estancia IT Park, Plot no. 140, 151,GST Road, Vallancheri,Chengalpattu District - 603 202, India",
    cities: ["Beijing"],
    contactNo: "000-0000000",
  },
  {
    country: "Japan",
    flag: "./contact-us/presence/japan.png",
    address:
      "Estancia IT Park, Plot no. 140, 151,GST Road, Vallancheri,Chengalpattu District - 603 202, India",
    cities: ["Yokohama"],
    contactNo: "000-0000000",
  },
];

const GlobalPresence = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [1, 2, 3, 4, 5, 6];
  const totalSlides = slides.length;

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    afterChange: (current) => setActiveIndex(current),
  };

  const ssettings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className="main-container grid grid-cols-2 gap-5 py-32">
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <button
            className={cn(
              "cursor-pointer rounded-full border border-[#CBBEBE] bg-white p-2 transition-all",
              {
                "cursor-not-allowed opacity-50": activeIndex === 0,
                "hover:bg-gray-200": activeIndex !== 0,
              },
            )}
            style={{ boxShadow: "0px 14.01px 67.27px -16.82px #00000014" }}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <BsArrowUpShort size={32} />
          </button>
          <button
            className={cn(
              "cursor-pointer rounded-full border border-[#CBBEBE] bg-white p-2 transition-all",
              {
                "cursor-not-allowed opacity-50": activeIndex >= totalSlides - 3,
                "hover:bg-gray-200": activeIndex < totalSlides - 3,
              },
            )}
            style={{ boxShadow: "0px 14.01px 67.27px -16.82px #00000014" }}
            onClick={() => sliderRef.current?.slickNext()}
          >
            <BsArrowDownShort size={32} />
          </button>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {[1, 2, 3, 4, 5, 6].map((index) => {
            const innerSliderRef = useRef(null);
            const [innerActiveIndex, setInnerActiveIndex] = useState(0);

            return (
              <div
                key={index}
                className="relative my-6 rounded-[1.25rem] border p-6"
              >
                <div
                  className="absolute inset-0 rounded-[1.25rem] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: 'url("./footer/bg.jpeg")',
                  }}
                />
                <div className="absolute inset-0 rounded-[1.25rem] bg-[#080707]/50"></div>
                <div className="relative flex flex-col gap-5 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold">India</span>
                    <img src="./contact-us/presence/india.png" />
                  </div>

                  <div class="mx-2 my-3 w-full border-t-2 border-dotted border-white" />

                  <div
                    key={index}
                    className="relative mx-auto flex w-full items-center gap-2"
                  >
                    <button
                      className={cn("cursor-pointer rounded-full p-2", {
                        "bg-white text-black": innerActiveIndex === 0,
                        "bg-primary text-white": innerActiveIndex !== 0,
                      })}
                      onClick={() => innerSliderRef.current?.slickPrev()}
                      disabled={innerActiveIndex === 0}
                    >
                      <BsArrowLeftShort size={24} />
                    </button>
                    <div className="w-full overflow-hidden">
                      <Slider
                        ref={innerSliderRef}
                        {...ssettings}
                        afterChange={(current) => setInnerActiveIndex(current)}
                      >
                        {locations?.map((city, index) => (
                          <div key={index} className="px-1">
                            <span
                              className={cn(
                                "rounded-lg border-[0.5px] border-white bg-[#182844] px-4 py-1 text-xl font-bold text-white transition-all",
                                {
                                  "bg-primary border-transparent text-white":
                                    index === innerActiveIndex,
                                  "bg-[#0F1A2E] text-gray-200":
                                    index !== innerActiveIndex,
                                },
                              )}
                            >
                              {city}
                            </span>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <button
                      className={cn("cursor-pointer rounded-full p-2", {
                        "bg-white text-black":
                          innerActiveIndex === locations.length - 1,
                        "bg-primary text-white":
                          innerActiveIndex !== locations.length - 1,
                      })}
                      disabled={innerActiveIndex === locations.length - 1}
                      onClick={() => innerSliderRef.current?.slickNext()}
                    >
                      <BsArrowRightShort size={24} />
                    </button>
                  </div>

                  <span className="bg-primary inline-flex w-1/4 justify-center rounded-lg px-2 py-1 text-xl font-bold uppercase">
                    Beijing
                  </span>
                  <div className="flex items-start justify-start gap-4">
                    <img src="./contact-us/presence/map.svg" />
                    <div className="flex flex-col items-start gap-5">
                      <span className="text-lg font-normal">
                        Estancia IT Park, Plot no. 140, 151,
                        <br />
                        GST Road, Vallancheri,
                        <br />
                        Chengalpattu District - 603 202, India
                      </span>
                      <span className="relative inline-flex w-fit items-center justify-between gap-2.5 rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-[32px] lg:py-2.5 lg:pr-5 lg:pl-16">
                        <img
                          src="./contact-us/presence/phone.svg"
                          className="absolute top-1/2 left-2 -translate-y-1/2"
                        />
                        <span className="text-lg text-white capitalize">
                          000-0000000
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default GlobalPresence;
