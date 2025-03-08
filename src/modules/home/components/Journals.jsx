import HRLine from "@/components/ui/HRLine";
import Card from "./Card";

const Journals = () => {
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

  return (
    <div className="main-container flex flex-col gap-20 py-16 lg:py-32">
      <div className="flex items-center">
        <div className="flex flex-1 flex-col gap-5">
          <span className="flex items-center text-[40px] leading-[60px] lg:text-[50px]">
            <span className="flex-1 font-bold">
              Our
              <span className="text-secondary-1">&nbsp;Impact Journals</span>
            </span>
            <div className="flex flex-1 items-start justify-end lg:hidden">
              <img src="arrow-up-orange.svg" />
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
          <img src="arrow-up-orange.svg" />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Journals;
