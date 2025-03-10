import { Button } from "@/components/ui/Button";
import Card from "./Card";
import Filters from "./Filters";
import { IoArrowDownCircleOutline } from "react-icons/io5";

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
];

const Blogs = () => {
  return (
    <div
      className="relative bg-gradient-to-b from-[#F8F9FD] via-[#F8F9FD] to-[#FFFFFF] pt-20 pb-32"
      id="blogs"
    >
      <div className="main-container relative z-30 flex flex-col-reverse justify-between gap-12 lg:flex-row lg:gap-0">
        <div className="flex flex-[0_0_60%] flex-col items-center gap-14 lg:gap-20">
          {data?.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
          <Button type="submit" className="btn-h-86 mt-2">
            View All
            <IoArrowDownCircleOutline size={32} />
          </Button>
        </div>
        <Filters />
      </div>
    </div>
  );
};

export default Blogs;
