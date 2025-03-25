"use client";
import HRLine from "@/components/ui/HRLine";
import JournalCard from "./JournalCard";
import Slider from "react-slick";
import { useRef, useState } from "react";
import clsx from "clsx";

const Journals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const data = [
    {
      image: "./journals/one.jpeg",
      badgeTitle: "CLOUD SOLUTION",
      date: "13 Feb,2023",
      author: "By webteck",
      desc: "Latin derived from Cicero&apos;s 1st-century BC",
      link: "#",
    },
    {
      image: "./journals/one.jpeg",
      badgeTitle: "CLOUD SOLUTION",
      date: "13 Feb,2023",
      author: "By webteck",
      desc: "Latin derived from Cicero&apos;s 1st-century BC",
      link: "#",
    },
    {
      image: "./journals/one.jpeg",
      badgeTitle: "CLOUD SOLUTION",
      date: "13 Feb,2023",
      author: "By webteck",
      desc: "Latin derived from Cicero&apos;s 1st-century BC",
      link: "#",
    },
  ];

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 973,
        settings: { centerPadding: "220px" },
      },
      {
        breakpoint: 853,
        settings: { centerPadding: "180px" },
      },
      {
        breakpoint: 849,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 687,
        settings: {
          centerPadding: "140px",
        },
      },
      {
        breakpoint: 666,
        settings: {
          centerPadding: "130px",
        },
      },
      {
        breakpoint: 645,
        settings: {
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 534,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 386,
        settings: {
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 344,
        settings: {
          centerPadding: "5px",
        },
      },
    ],
    afterChange: (current) => setActiveIndex(current),
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div
      id="impact-journal"
      className="main-container flex flex-col gap-14 py-16 lg:py-32 2xl:gap-20"
    >
      <div className="flex items-center">
        <div className="flex flex-1 flex-col gap-5">
          <span className="flex items-center text-5xl">
            <span className="flex-1 font-bold">
              Our
              <span className="text-secondary-1">&nbsp;Impact Journals</span>
            </span>
            <div className="flex flex-1 items-start justify-end lg:hidden">
              <img src="arrow-up-orange.svg" alt="arrow-up-orange" />
            </div>
          </span>
          <HRLine className="w-[88px] lg:w-[162px]" />
          <span className="text-secondary text-lg font-medium">
            Where our passion meets purpose. Explore stories of innovative
            solutions crafted with dedication, solving real-world challenges,
            boosting productivity, and making a lasting impact.
          </span>
        </div>
        <div className="hidden flex-1 items-start justify-end lg:flex">
          <img src="arrow-up-orange.svg" alt="arrow-up-orange" />
        </div>
      </div>
      <div className="journal-grid gap-4 md:grid md:grid-cols-3 lg:grid-cols-3 lg:gap-5 2xl:gap-5">
        {data?.map((item, index) => (
          <JournalCard key={index} data={item} />
        ))}
      </div>
      <div className="journal-slider h-full overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex px-4 py-5 transition-transform duration-300 ease-in-out md:px-5"
            >
              <JournalCard
                key={index}
                isSlider={true}
                activeIndex={activeIndex}
                index={index}
                data={item}
              />
            </div>
          ))}
        </Slider>
        <div className="flex justify-center">
          <div className="flex items-center justify-center rounded-full bg-gray-300 px-3 py-4">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={clsx(
                  "mx-1 h-3 w-3 rounded-xl border border-[#CBD5E0]",
                  index === activeIndex
                    ? "h-3 w-3 bg-[var(--primary)]"
                    : "h-3 w-3 bg-[#000000] opacity-30",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journals;
