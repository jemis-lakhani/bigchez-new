import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="relative flex flex-col gap-4 rounded-2xl border-[1px] border-[#E7E5EA] bg-white p-4 lg:gap-5 lg:rounded-3xl lg:p-10 lg:pb-12">
      <div className="relative h-[140px] lg:h-[257px]">
        <img
          src="/blog/blog-img.png"
          className="h-full w-full rounded-lg bg-cover bg-center lg:rounded-[15px]"
        />
        <div className="absolute bottom-3 left-3 flex items-center rounded-3xl border border-[#f57c00] bg-white p-1 lg:bottom-5 lg:left-5 lg:p-1.5">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#FFA726] via-[#F57C00] to-[#F57C00] lg:h-5 lg:w-5"></div>
          <span className="text-primary-gradient ml-2 text-[8px] lg:text-sm">
            Artificial Intelligence
          </span>
        </div>
      </div>
      <div className="mt-2 flex justify-start gap-4">
        <div className="flex items-center gap-2">
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
                className="transition-colors duration-300 group-hover:fill-[#F57C00]"
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
          <span className="text-xs font-medium text-[#737887] group-hover:!text-white lg:text-lg">
            {data?.date}
          </span>
        </div>
        <div className="flex items-center gap-2">
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
                className="transition-colors duration-300 group-hover:fill-[#F57C00]"
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
          <span className="text-xs font-medium text-[#737887] group-hover:!text-white lg:text-lg">
            {data?.author}
          </span>
        </div>
      </div>
      <div className="text-base font-medium lg:text-[28px]">{data.title}</div>
      <div
        className="text-xs leading-4 text-[#141D38] group-hover:!text-white lg:text-xl lg:leading-9"
        dangerouslySetInnerHTML={{ __html: data?.desc }}
      />
      <Link
        href={data?.link ?? "#"}
        className="flex items-center text-xs font-semibold text-[#141D38] group-hover:!text-white lg:text-xl"
      >
        Learn More
        <svg
          width="25"
          height="8"
          viewBox="0 0 25 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-1 ml-1 fill-[#141D38] group-hover:fill-white"
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
      </Link>
    </div>
  );
};

export default Card;
