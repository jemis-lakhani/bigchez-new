import { Button } from "@/components/ui/Button";
import clsx from "clsx";
import { BsArrowUpRightCircle } from "react-icons/bs";

const BuisnessCard = ({
  data,
  className,
  active = false,
  isSlider = false,
}) => {
  return (
    <div
      className={clsx(
        "border-secondary relative mx-2 rounded-[30px] border bg-white hover:!border-[var(--primary)] lg:mx-0 lg:py-5 2xl:py-8",
        {
          "mx-4 h-[310px]": isSlider,
          "group h-[310px] 2xl:h-[370px]": !isSlider,
          "!border-[var(--primary)]": active,
        },
        className,
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 rounded-[30px] bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          { "opacity-100": active },
        )}
        style={{
          backgroundImage: "url('/buisness/hover.png')",
        }}
      ></div>
      <div
        className={clsx(
          "absolute inset-0 rounded-[30px] opacity-0 transition-all duration-300 group-hover:opacity-90",
          { "opacity-90": active },
        )}
        style={{
          background: `linear-gradient(105.44deg, rgba(206, 147, 216, 0.8) -16.82%, rgba(106, 27, 154, 0.8) 34.24%)`,
        }}
      ></div>
      <img
        src="./arrow-up-purple.svg"
        className={clsx(
          "text-secondary-1 absolute top-4 right-4 group-hover:hidden",
          active ? "hidden" : "",
        )}
        style={
          isSlider
            ? {
                display: active ? "none" : "block",
              }
            : {}
        }
      />
      <div className="relative z-10 flex h-full flex-1 flex-col items-center justify-center gap-6">
        <div
          className={clsx(
            "flex h-10 group-hover:hidden",
            active ? "hidden" : "",
          )}
          style={
            isSlider
              ? {
                  display: active ? "none" : "block",
                }
              : {}
          }
        >
          <div className="invisible"></div>
        </div>
        <img
          src={data?.icon}
          className={clsx(
            "object-contain group-hover:hidden",
            active ? "hidden" : "",
          )}
          style={
            isSlider
              ? {
                  display: active ? "none" : "block",
                }
              : {}
          }
        />
        <img
          src={data?.hoverIcon}
          className={clsx(
            "object-contain group-hover:block",
            active ? "block" : "hidden",
          )}
          style={
            isSlider
              ? {
                  display: active ? "block" : "none",
                }
              : {}
          }
        />
        <span
          className={clsx(
            "text-secondary-1 text-2xl font-bold group-hover:!text-white",
            { "!text-white": active },
          )}
        >
          {data?.title}
        </span>
        <div className="flex h-12 items-center justify-center">
          <Button
            className={clsx(
              "invisible !font-medium opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100",
              { "visible opacity-100": active },
            )}
          >
            Read More
            <BsArrowUpRightCircle className="h-5 w-5 font-bold text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuisnessCard;
