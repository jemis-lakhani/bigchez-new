import { Button } from "@/components/ui/Button";
import { BsArrowUpRightCircle } from "react-icons/bs";

const BuisnessCard = ({ data }) => {
  return (
    <div className="group border-secondary relative mx-2 overflow-hidden rounded-[30px] border bg-white hover:!border-[var(--primary)] lg:mx-0 lg:py-5 2xl:py-8">
      <div
        className="pointer-events-none absolute inset-0 rounded-[30px] bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundImage: "url('/buisness/hover.png')",
        }}
      ></div>
      <div
        className="absolute inset-0 rounded-[30px] opacity-0 transition-all duration-300 group-hover:opacity-90"
        style={{
          background: `linear-gradient(105.44deg, rgba(206, 147, 216, 0.8) -16.82%, rgba(106, 27, 154, 0.8) 34.24%)`,
        }}
      ></div>
      <img
        src="./arrow-up-purple.svg"
        className="text-secondary-1 absolute top-4 right-4 group-hover:hidden"
      />
      <div className="relative z-10 flex h-full flex-1 flex-col items-center justify-center gap-6">
        <div className="flex h-10 group-hover:hidden">
          <div className="invisible"></div>
        </div>
        <img src={data?.icon} className="object-contain group-hover:hidden" />
        <img
          src={data?.hoverIcon}
          className="hidden object-contain group-hover:block"
        />
        <span className="text-secondary-1 text-2xl font-bold group-hover:!text-white">
          {data?.title}
        </span>
        <div className="flex h-12 items-center justify-center">
          <Button className="invisible !font-medium opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
            Read More
            <BsArrowUpRightCircle className="h-5 w-5 font-bold text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuisnessCard;
