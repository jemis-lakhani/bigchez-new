"use client";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import BlogCard from "./BlogCard";
import Filters from "./Filters";

const data = [
  {
    image: "./journals/one.jpeg",
    badgeTitle: "Artificial Intelligence",
    date: "13 Feb,2023",
    author: "By webteck",
    title:
      "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
    desc: "Whether you’re a business aiming to enhance your digital presence or an individual with a groundbreaking idea, we’re here to help you achieve your goals.",
    link: "#",
  },
  {
    image: "./journals/one.jpeg",
    badgeTitle: "Artificial Intelligence",
    date: "13 Feb,2023",
    author: "By webteck",
    title:
      "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
    desc: "Whether you’re a business aiming to enhance your digital presence or an individual with a groundbreaking idea, we’re here to help you achieve your goals.",
    link: "#",
  },
  {
    image: "./journals/one.jpeg",
    badgeTitle: "Artificial Intelligence",
    date: "13 Feb,2023",
    author: "By webteck",
    title:
      "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
    desc: "Whether you’re a business aiming to enhance your digital presence or an individual with a groundbreaking idea, we’re here to help you achieve your goals.",
    link: "#",
  },
  {
    image: "./journals/one.jpeg",
    badgeTitle: "Artificial Intelligence",
    date: "13 Feb,2023",
    author: "By webteck",
    title:
      "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
    desc: "Whether you’re a business aiming to enhance your digital presence or an individual with a groundbreaking idea, we’re here to help you achieve your goals.",
    link: "#",
  },
  {
    image: "./journals/one.jpeg",
    badgeTitle: "Artificial Intelligence",
    date: "13 Feb,2023",
    author: "By webteck",
    title:
      "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
    desc: "Whether you’re a business aiming to enhance your digital presence or an individual with a groundbreaking idea, we’re here to help you achieve your goals.",
    link: "#",
  },
  {
    image: "./journals/one.jpeg",
    badgeTitle: "Artificial Intelligence",
    date: "13 Feb,2023",
    author: "By webteck",
    title:
      "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
    desc: "Whether you’re a business aiming to enhance your digital presence or an individual with a groundbreaking idea, we’re here to help you achieve your goals.",
    link: "#",
  },
];

const Blogs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="relative bg-gradient-to-b from-[#F8F9FD] via-[#F8F9FD] to-[#FFFFFF] pt-20 pb-32"
      id="blogs"
    >
      <div className="main-container relative z-30 flex flex-col-reverse justify-between gap-12 lg:flex-row lg:gap-0">
        <div className="flex flex-[0_0_60%] flex-col items-center gap-14 lg:gap-20">
          {data?.slice(0, showMore ? data.length : 3)?.map((item, index) => {
            return <BlogCard key={index} data={item} />;
          })}
          <Button className="btn-h-86" onClick={() => setShowMore(!showMore)}>
            {showMore ? "View Less" : "View All"}
            <IoArrowDownCircleOutline
              size={32}
              className={showMore ? "rotate-180 transition-transform" : ""}
            />
          </Button>
        </div>
        <Filters />
      </div>
    </div>
  );
};

export default Blogs;
