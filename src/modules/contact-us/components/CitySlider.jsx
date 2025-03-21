"use client";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Slider from "react-slick";

const NavButton = ({ direction, onClick, disabled }) => {
  const Icon = direction === "left" ? BsArrowLeftShort : BsArrowRightShort;

  return (
    <button
      className={cn("cursor-pointer rounded-full p-2 transition-all", {
        "bg-white text-black": disabled,
        "bg-primary text-white": !disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon size={24} />
    </button>
  );
};

export default function CitySlider({ item, index, continent }) {
  const innerSliderRef = useRef({});
  const showSlider = item.length > 3;
  const [innerActiveIndex, setInnerActiveIndex] = useState(0);
  const [activeCity, setActiveCity] = useState(0);

  const ssettings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (index) => setInnerActiveIndex(index),
  };
  useEffect(() => {
    setActiveCity(0);
  }, [continent]);

  const isFirstCity = innerActiveIndex === 0;
  const isLastCity = innerActiveIndex === item.length - 2;

  return (
    <div className="flex flex-col gap-5 overflow-hidden">
      <div className="flex h-auto w-full flex-row items-center overflow-hidden">
        {showSlider && (
          <NavButton
            direction="left"
            onClick={() => innerSliderRef.current?.slickPrev()}
            disabled={isFirstCity}
          />
        )}
        <div className="w-full overflow-hidden">
          {showSlider ? (
            <Slider
              ref={innerSliderRef}
              {...ssettings}
              className="flex w-[500px] cursor-pointer flex-nowrap gap-5 overflow-hidden"
            >
              {item?.map((city, i) => {
                const isActive = i === activeCity;

                return (
                  <div
                    key={i}
                    className="mx-2 my-1"
                    onClick={() => setActiveCity(i)}
                  >
                    <span
                      className={clsx(
                        "rounded-lg border px-4 py-1 text-lg font-bold uppercase transition-all",
                        {
                          "bg-primary border-transparent text-white": isActive,
                          "bg-[#0F1A2E] text-gray-200": !isActive,
                        },
                        {},
                      )}
                    >
                      {city?.city}
                    </span>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <div className="flex flex-wrap">
              {item.map((city, i) => (
                <div
                  key={i}
                  className="mx-2 my-2 cursor-pointer"
                  onClick={() => setActiveCity(i)}
                >
                  <span
                    className={cn(
                      "rounded-lg border border-white px-4 py-1.5 text-lg font-bold text-white uppercase transition-all",
                      {
                        "bg-primary border-transparent text-white":
                          i === activeCity,
                        "bg-gray-800 text-gray-200": i !== activeCity,
                      },
                    )}
                  >
                    {city.city}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        {showSlider && (
          // <div>
          //   <button
          //     className={cn("cursor-pointer rounded-full p-2", {
          //       "bg-white text-black":
          //         innerActiveIndex === item[index]?.cities?.length - 1,
          //       "bg-primary text-white":
          //         innerActiveIndex !== item[index]?.cities?.length - 1,
          //     })}
          //     onClick={() => innerSliderRef.current?.slickNext()}
          //     disabled={innerActiveIndex === item[index]?.cities?.length - 1}
          //   >
          //     <BsArrowRightShort size={24} />
          //   </button>
          // </div>
          <NavButton
            direction="right"
            onClick={() => innerSliderRef.current?.slickNext()}
            disabled={isLastCity}
          />
        )}
      </div>
      <div className="flex flex-row items-start justify-start gap-4">
        <img src="./contact-us/presence/map.svg" alt="Map" />
        <div className="flex flex-col items-start gap-5">
          <span className="text-mdfont-normal md:text-lg">
            {item[activeCity]?.address}
          </span>

          <div className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2">
            <img src="./contact-us/presence/phone.svg" className="h-9 w-9" />
            <span className="text-lg text-white capitalize">
              {item[activeCity]?.contactNo}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
