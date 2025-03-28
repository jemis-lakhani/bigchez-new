import clsx from "clsx";
import Link from "next/link";

const JournalCard = ({ data, index, activeIndex, isSlider = false }) => {
  return (
    <div
      className={clsx(
        "group relative z-10 flex flex-col gap-5 rounded-3xl border-[1px] border-[#E7E5EA] p-4 pb-12 lg:p-4 lg:!pb-8 2xl:p-5 2xl:pb-10",
        isSlider
          ? index === activeIndex
            ? "bg-[linear-gradient(96.26deg,#0993AB_0%,#09748D_50%)] transition-opacity duration-300 ease-in-out"
            : "bg-white"
          : "",
      )}
    >
      <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(96.26deg,#0993AB_0%,#09748D_50%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      <div className="relative rounded-2xl border-[2px] border-white">
        <div className="h-full overflow-hidden rounded-2xl">
          <img
            src={data?.image}
            alt={data?.badgeTitle}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2 rounded-full bg-white p-px font-semibold">
          {/* <div className="relative">
            <img
              src="./journals/left-corner.svg"
              className="absolute top-[49.5%] -left-2.5 z-0 h-auto w-auto -translate-y-1/2 transform"
              alt="Left Corner"
            />
            <img
              src="./journals/right-corner.svg"
              className="absolute top-[49.5%] -right-2.5 z-0 h-auto w-auto -translate-y-1/2 transform"
              alt="Right Corner"
            />
          </div> */}
          <div
            className={clsx(
              "relative z-10 rounded-full bg-[linear-gradient(96.26deg,#0993AB_0%,#09748D_50%)] px-4 py-2 text-xs text-white uppercase transition-all duration-300 ease-in-out group-hover:!bg-[linear-gradient(0deg,#fff_0%,#fff_100%)] group-hover:text-[var(--primary)] xl:px-3 xl:text-[9px] 2xl:px-4 2xl:text-xs",
              isSlider
                ? index === activeIndex
                  ? "!bg-[linear-gradient(0deg,#fff_0%,#fff_100%)] !text-[var(--primary)]"
                  : "bg-[linear-gradient(96.26deg,#0993AB_0%,#09748D_50%)] text-white"
                : "",
            )}
          >
            {data?.badgeTitle}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-3 flex justify-start gap-4 pl-[2px]">
        <div className="flex gap-2">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_190_298)">
              <path
                d="M4.75 2H9.25V0.75C9.29167 0.291667 9.54167 0.041667 10 0C10.4583 0.041667 10.7083 0.291667 10.75 0.75V2H12C12.5625 2.02083 13.0312 2.21875 13.4062 2.59375C13.7812 2.96875 13.9792 3.4375 14 4V14C13.9792 14.5625 13.7812 15.0312 13.4062 15.4062C13.0312 15.7812 12.5625 15.9792 12 16H2C1.4375 15.9792 0.96875 15.7812 0.59375 15.4062C0.21875 15.0312 0.0208333 14.5625 0 14V4C0.0208333 3.4375 0.21875 2.96875 0.59375 2.59375C0.96875 2.21875 1.4375 2.02083 2 2H3.25V0.75C3.29167 0.291667 3.54167 0.041667 4 0C4.45833 0.041667 4.70833 0.291667 4.75 0.75V2ZM1.5 14C1.52083 14.3125 1.6875 14.4792 2 14.5H12C12.3125 14.4792 12.4792 14.3125 12.5 14V6H1.5V14Z"
                className={clsx(
                  "transition-colors duration-300 group-hover:fill-[var(--primary)]",
                  isSlider
                    ? activeIndex === index
                      ? "fill-[var(--primary)]"
                      : "fill-[#09748d]"
                    : "",
                )}
                fill="url(#paint0_linear_190_298)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_190_298"
                x1="0.619264"
                y1="22.4492"
                x2="16.0137"
                y2="20.9709"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0993AB" />
                <stop offset="0.5" stopColor="#09748D" />
              </linearGradient>
              <clipPath id="clip0_190_298">
                <rect
                  width="14"
                  height="16"
                  fill="white"
                  transform="matrix(1 0 0 -1 0 16)"
                />
              </clipPath>
            </defs>
          </svg>

          <span
            className={clsx(
              "text-sm font-medium text-[#737887] group-hover:!text-white",
              isSlider
                ? activeIndex === index
                  ? "text-white"
                  : "text-[#737887]"
                : "",
            )}
          >
            {data?.date}
          </span>
        </div>
        <div className="flex gap-2">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_190_302)">
              <path
                d="M8.63965 9.5H5.63965C4.07715 9.54167 2.78548 10.0833 1.76465 11.125C0.722982 12.1458 0.181315 13.4375 0.139648 15C0.139648 15.2917 0.233398 15.5312 0.420898 15.7188C0.608398 15.9062 0.847982 16 1.13965 16H13.1396C13.4313 16 13.6709 15.9062 13.8584 15.7188C14.0459 15.5312 14.1396 15.2917 14.1396 15C14.098 13.4375 13.5563 12.1458 12.5146 11.125C11.4938 10.0833 10.2021 9.54167 8.63965 9.5ZM1.6709 14.5C1.81673 13.5 2.25423 12.6667 2.9834 12C3.71257 11.3542 4.59798 11.0208 5.63965 11H8.63965C9.68132 11.0208 10.5667 11.3542 11.2959 12C12.0251 12.6667 12.4626 13.5 12.6084 14.5H1.6709ZM7.13965 8C8.26465 7.97917 9.21257 7.59375 9.9834 6.84375C10.7334 6.07292 11.1188 5.125 11.1396 4C11.1188 2.875 10.7334 1.92708 9.9834 1.15625C9.21257 0.40625 8.26465 0.020833 7.13965 0C6.01465 0.020833 5.06673 0.40625 4.2959 1.15625C3.5459 1.92708 3.16048 2.875 3.13965 4C3.16048 5.125 3.5459 6.07292 4.2959 6.84375C5.06673 7.59375 6.01465 7.97917 7.13965 8ZM7.13965 1.5C7.84798 1.52083 8.44173 1.76042 8.9209 2.21875C9.37923 2.69792 9.61882 3.29167 9.63965 4C9.61882 4.70833 9.37923 5.30208 8.9209 5.78125C8.44173 6.23958 7.84798 6.47917 7.13965 6.5C6.43131 6.47917 5.83756 6.23958 5.3584 5.78125C4.90006 5.30208 4.66048 4.70833 4.63965 4C4.66048 3.29167 4.90006 2.69792 5.3584 2.21875C5.83756 1.76042 6.43131 1.52083 7.13965 1.5Z"
                className={clsx(
                  "transition-colors duration-300 group-hover:fill-[var(--primary)]",
                  isSlider
                    ? activeIndex === index
                      ? "fill-[var(--primary)]"
                      : "fill-[#09748d]"
                    : "",
                )}
                fill="url(#paint0_linear_190_302)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_190_302"
                x1="0.758913"
                y1="22.4492"
                x2="16.1533"
                y2="20.9709"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0993AB" />
                <stop offset="0.5" stopColor="#09748D" />
              </linearGradient>
              <clipPath id="clip0_190_302">
                <rect
                  width="14"
                  height="16"
                  fill="white"
                  transform="matrix(1 0 0 -1 0.139648 16)"
                />
              </clipPath>
            </defs>
          </svg>
          <span
            className={clsx(
              "text-sm font-medium text-[#737887] group-hover:!text-white",
              isSlider
                ? activeIndex === index
                  ? "text-white"
                  : "text-[#737887]"
                : "",
            )}
          >
            {data?.author}
          </span>
        </div>
      </div>

      <div
        className={clsx(
          "relative z-10 pl-[2px] text-2xl font-medium text-[#141D38] group-hover:!text-white",
          isSlider
            ? activeIndex === index
              ? "text-white"
              : "text-[#141D38]"
            : "",
        )}
        dangerouslySetInnerHTML={{ __html: data?.desc }}
      />

      <div className="relative z-10 pl-[2px]">
        <Link
          href={data?.link ?? "#"}
          className={clsx(
            "relative inline-flex items-center text-sm font-semibold text-[#141D38] group-hover:!text-white",
            isSlider
              ? activeIndex === index
                ? "text-white"
                : "text-[#141D38]"
              : "",
          )}
        >
          Learn More
          <svg
            width="25"
            height="8"
            viewBox="0 0 25 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={clsx(
              "mt-1 ml-1 fill-[#141D38] group-hover:fill-white",
              isSlider && activeIndex === index
                ? "fill-white"
                : "fill-[#141D38]",
            )}
          >
            <g clipPath="url(#clip0_190_311)">
              <path d="M20.254 4.14444L1.15527 4.12828C1.05582 4.12828 0.960434 4.08675 0.890108 4.01282C0.819782 3.93889 0.780273 3.83861 0.780273 3.73406C0.780273 3.62951 0.819782 3.52924 0.890108 3.45531C0.960434 3.38138 1.05582 3.33984 1.15527 3.33984L20.2544 3.35601C20.3539 3.35601 20.4493 3.39754 20.5196 3.47147C20.5899 3.5454 20.6294 3.64567 20.6294 3.75022C20.6294 3.85478 20.5899 3.95505 20.5196 4.02898C20.4493 4.10291 20.3535 4.14444 20.254 4.14444Z" />
              <path d="M24.7807 3.75493C22.6503 4.58279 20.0066 5.99882 18.3682 7.5L19.6604 3.7502L18.3731 0C20.0099 1.50315 22.6514 2.92234 24.7807 3.75493Z" />
            </g>
            <defs>
              <clipPath id="clip0_190_311">
                <rect
                  width="24"
                  height="8"
                  fill="white"
                  transform="translate(0.780273)"
                />
              </clipPath>
            </defs>
          </svg>
          <span
            className={clsx(
              "bg-primary absolute bottom-[-3px] left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full",
              isSlider ? (activeIndex === index ? "w-full" : "w-0") : "",
            )}
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default JournalCard;
