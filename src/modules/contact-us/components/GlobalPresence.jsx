"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import {
  BsArrowDownShort,
  BsArrowLeftShort,
  BsArrowRightShort,
  BsArrowUpShort,
} from "react-icons/bs";
import CitySlider from "./CitySlider";
import { Syne } from "next/font/google";
import HRLine1 from "@/components/ui/HRLine1";
import Slider from "react-slick";
import CountryCard from "./CountryCard";
import clsx from "clsx";

const regions = ["ASIA-PACIFIC", "EUROPE", "AFRICA", "NORTH AMERICA"];

const data = [
  // --- ASIA-PACIFIC (6) ---
  {
    country: "India",
    continent: "ASIA-PACIFIC",
    flag: "./contact-us/presence/india.png",
    locations: [
      {
        city: "Chennai",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu - 603 202, Chennai, India
          </span>
        ),
        contactNo: "+91 44-12345678",
      },
      {
        city: "Delhi (NCR)",
        address: (
          <span className="text-lg font-normal">
            DLF Cyber City, Phase II,
            <br />
            Gurgaon, Haryana - 122002,
            <br />
            Delhi (NCR), India
          </span>
        ),
        contactNo: "+91 11-98765432",
      },
      {
        city: "Mumbai",
        address: (
          <span className="text-lg font-normal">
            Bandra Kurla Complex,
            <br />
            Bandra East, Mumbai,
            <br />
            Maharashtra - 400051, India
          </span>
        ),
        contactNo: "+91 22-87654321",
      },
      {
        city: "Kolkata",
        address: (
          <span className="text-lg font-normal">
            Salt Lake City, Sector V,
            <br />
            Kolkata, West Bengal - 700091,
            <br />
            India
          </span>
        ),
        contactNo: "+91 33-67890123",
      },
      {
        city: "Bangalore",
        address: (
          <span className="text-lg font-normal">
            Electronic City, Phase I,
            <br />
            Bangalore, Karnataka - 560100,
            <br />
            India
          </span>
        ),
        contactNo: "+91 80-76543210",
      },
      {
        city: "Hyderabad",
        address: (
          <span className="text-lg font-normal">
            HITEC City, Madhapur,
            <br />
            Hyderabad, Telangana - 500081,
            <br />
            India
          </span>
        ),
        contactNo: "+91 40-12345678",
      },
    ],
  },
  {
    country: "China",
    continent: "ASIA-PACIFIC",
    flag: "./contact-us/presence/china.png",
    address: "Chaoyang District, Beijing, 100020, China",
    contactNo: "+86 10-12345678",
    locations: [
      {
        city: "Beijing",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+86 10-12345678",
      },
      {
        city: "Shanghai",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+86 21-12345678",
      },

      {
        city: "Hong Kong",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+86 852-12345678",
      },
    ],
  },
  {
    country: "Japan",
    continent: "ASIA-PACIFIC",
    flag: "./contact-us/presence/japan.png",
    address: "Shibuya, Tokyo, 150-0002, Japan",
    contactNo: "+81 3-12345678",
    locations: [
      {
        city: "Tokyo",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+81 3-12345678",
      },
      {
        city: "Osaka",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+81 46-12345678",
      },
      {
        city: "Kyoto",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+81 75-12345678",
      },
      {
        city: "Busan",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+81 54-12345678",
      },
    ],
  },
  {
    country: "South Korea",
    continent: "ASIA-PACIFIC",
    flag: "./contact-us/presence/india.png",
    address: "Gangnam District, Seoul, 06022, South Korea",
    contactNo: "+82 2-12345678",
    locations: [
      {
        city: "Seoul",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+82 2-12345678",
      },
      {
        city: "Depok",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+82 30-12345678",
      },
      {
        city: "Surabaya",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+82 31-12345678",
      },
      {
        city: "Jogja",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+82 27-12345678",
      },
    ],
  },
  {
    country: "Indonesia",
    continent: "ASIA-PACIFIC",
    flag: "./contact-us/presence/india.png",
    address: "Central Jakarta, 10110, Indonesia",
    contactNo: "+62 21-12345678",
    locations: [
      {
        city: "Jakarta",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+62 21-12345678",
      },
      {
        city: "Bandung",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+62 22-12345678",
      },
      {
        city: "Surabaya",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+62 31-12345678",
      },
    ],
  },
  {
    country: "Thailand",
    continent: "ASIA-PACIFIC",
    flag: "./contact-us/presence/india.png",
    address: "Sukhumvit, Bangkok, 10110, Thailand",
    contactNo: "+66 2-12345678",
    locations: [
      {
        city: "Bangkok",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+66 2-12345678",
      },
      {
        city: "Phuket",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+66 9-12345678",
      },
      {
        city: "Damascus",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+66 9-12345678",
      },
      {
        city: "Beirut",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+66 9-12345678",
      },
    ],
  },

  // --- NORTH AFRICA (6) ---
  {
    country: "Egypt",
    continent: "AFRICA",
    flag: "./contact-us/presence/india.png",
    address: "Maadi, Cairo, 11728, Egypt",
    contactNo: "+20 2-12345678",
    locations: [
      {
        city: "Cairo",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+20 2-12345678",
      },
      {
        city: "Alexandria",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+20 2-12345678",
      },
      {
        city: "Aswan",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+20 2-12345678",
      },
      {
        city: "Asyut",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+20 2-12345678",
      },
    ],
  },
  {
    country: "Algeria",
    continent: "AFRICA",
    flag: "./contact-us/presence/india.png",
    address: "Hydra, Algiers, 16035, Algeria",
    contactNo: "+213 21-987654",
    locations: [
      {
        city: "Algiers",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+213 21-987654",
      },
    ],
  },
  {
    country: "Morocco",
    continent: "AFRICA",
    flag: "./contact-us/presence/india.png",
    address: "Gueliz, Marrakech, 40000, Morocco",
    contactNo: "+212 5-12345678",
    locations: [
      {
        city: "Marrakech",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+212 5-12345678",
      },
    ],
  },
  {
    country: "Tunisia",
    continent: "AFRICA",
    flag: "./contact-us/presence/india.png",
    address: "Lac II, Tunis, 1053, Tunisia",
    contactNo: "+216 71-987654",
    locations: [
      {
        city: "Tunis",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+216 71-987654",
      },
    ],
  },
  {
    country: "Libya",
    continent: "AFRICA",
    flag: "./contact-us/presence/india.png",
    address: "Gargaresh, Tripoli, 11223, Libya",
    contactNo: "+218 21-123456",
    locations: [
      {
        city: "Tripoli",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+218 21-123456",
      },
    ],
  },
  {
    country: "Sudan",
    continent: "AFRICA",
    flag: "./contact-us/presence/india.png",
    address: "Central Khartoum, Sudan, 11111",
    contactNo: "+249 9-98765432",
    locations: [
      {
        city: "Khartoum",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+249 9-98765432",
      },
    ],
  },

  // --- EUROPE (6) ---
  {
    country: "United Kingdom",
    continent: "EUROPE",
    flag: "./contact-us/presence/india.png",
    address: "Canary Wharf, London, E14 5AB, UK",
    contactNo: "+44 20-12345678",
    locations: [
      {
        city: "London",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+44 20-12345678",
      },
      {
        city: "Berlin",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+44 20-12345678",
      },
      {
        city: "Munich",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+44 20-12345678",
      },
      {
        city: "Düsseldorf",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+44 20-12345678",
      },
      {
        city: "Cologne",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+49 30-98765432",
      },
    ],
  },
  {
    country: "Germany",
    continent: "EUROPE",
    flag: "./contact-us/presence/india.png",
    address: "Alexanderplatz, Berlin, 10178, Germany",
    contactNo: "+49 30-98765432",
    locations: [
      {
        city: "Berlin",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+49 30-98765432",
      },
    ],
  },
  {
    country: "France",
    continent: "EUROPE",
    flag: "./contact-us/presence/india.png",
    address: "Champs-Élysées, Paris, 75008, France",
    contactNo: "+33 1-12345678",
    locations: [
      {
        city: "Paris",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+33 1-12345678",
      },
    ],
  },
  {
    country: "Italy",
    continent: "EUROPE",
    flag: "./contact-us/presence/india.png",
    address: "Piazza Navona, Rome, 00186, Italy",
    contactNo: "+39 06-98765432",
    locations: [
      {
        city: "Rome",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+39 06-98765432",
      },
    ],
  },
  {
    country: "Spain",
    continent: "EUROPE",
    flag: "./contact-us/presence/india.png",
    address: "Gran Via, Madrid, 28013, Spain",
    contactNo: "+34 91-12345678",
    locations: [
      {
        city: "Madrid",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+34 91-12345678",
      },
    ],
  },
  {
    country: "Netherlands",
    continent: "EUROPE",
    flag: "./contact-us/presence/india.png",
    address: "Dam Square, Amsterdam, 1012 NP, Netherlands",
    contactNo: "+31 20-98765432",
    locations: [
      {
        city: "Amsterdam",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+31 20-98765432",
      },
    ],
  },

  {
    country: "United States",
    continent: "NORTH AMERICA",
    flag: "./contact-us/presence/india.png",

    locations: [
      {
        city: "New York",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+1 212-1234567",
      },
    ],
  },
  {
    country: "Canada",
    continent: "NORTH AMERICA",
    flag: "./contact-us/presence/india.png",
    address: "Toronto, Canada",
    contactNo: "+1 416-9876543",
    locations: [
      {
        city: "Toronto",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+1 416-9876543",
      },
    ],
  },
  {
    country: "Mexico",
    continent: "NORTH AMERICA",
    flag: "./contact-us/presence/india.png",
    address: "Mexico City, Mexico",
    contactNo: "+52 55-12345678",
    locations: [
      {
        city: "Mexico City",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+52 55-12345678",
      },
    ],
  },
  {
    country: "Costa Rica",
    continent: "NORTH AMERICA",
    flag: "./contact-us/presence/india.png",
    address: "San José, Costa Rica",
    contactNo: "+506 2-9876543",
    locations: [
      {
        city: "San José",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+506 2-9876543",
      },
    ],
  },
  {
    country: "Panama",
    continent: "NORTH AMERICA",
    flag: "./contact-us/presence/india.png",
    address: "Panama City, Panama",
    contactNo: "+507 3-6543210",
    locations: [
      {
        city: "Panama City",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+507 3-6543210",
      },
    ],
  },
  {
    country: "Jamaica",
    continent: "NORTH AMERICA",
    flag: "./contact-us/presence/india.png",
    address: "Kingston, Jamaica",
    contactNo: "+1 876-5432109",
    locations: [
      {
        city: "Kingston",
        address: (
          <span className="text-lg font-normal">
            Estancia IT Park, Plot no. 140, 151,
            <br />
            GST Road, Vallancheri,
            <br />
            Chengalpattu District - 603 202, India
          </span>
        ),
        contactNo: "+1 876-5432109",
      },
    ],
  },
];

const syne = Syne({ subsets: ["latin"], display: "swap" });

const NavButton = ({ disabled, onClick, icon }) => (
  <button
    className={cn(
      "cursor-pointer rounded-full border border-[#CBBEBE] bg-white p-2 transition-all",
      {
        "cursor-not-allowed opacity-50": disabled,
        "bg-primary opacity-100": !disabled,
      },
    )}
    style={{ boxShadow: "0px 14.01px 67.27px -16.82px #00000014" }}
    onClick={onClick}
    disabled={disabled}
  >
    {icon}
  </button>
);

const RegionSelector = ({
  regions,
  continent,
  setContinent,
  isAlign = false,
}) => (
  <div className={clsx("flex", isAlign ? "justify-center" : "justify-start")}>
    <div className="flex w-[320px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow">
      {regions.map((region, index) => (
        <React.Fragment key={region}>
          <button
            className={cn(
              "w-full cursor-pointer overflow-hidden px-4 py-2.5 text-left text-[22px] font-bold transition-colors",
              region === continent
                ? "bg-primary text-white"
                : "bg-white text-gray-800",
            )}
            onClick={() => setContinent(region)}
          >
            {region}
          </button>
          {index < regions.length - 1 && <hr className="border-gray-200" />}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const SectionHeader = ({ title, description, align = "start" }) => {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className={`flex flex-col items-${align} justify-start gap-5`}>
        <div
          className={clsx(
            "text-[35px] leading-none font-semibold capitalize lg:text-[50px] lg:text-wrap",
            syne.className,
          )}
        >
          {title}
        </div>
        <HRLine1 />
      </div>
      <div className={`text-${align}`}>
        <span className="text-secondary relative text-lg font-normal">
          {description}
        </span>
      </div>
    </div>
  );
};

const GlobalPresence = () => {
  const sliderRef = useRef(null);
  const [activeIndexMobile, setActiveIndexMobile] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [continent, setContinent] = useState("ASIA-PACIFIC");
  const continentWiseCount = data.reduce((acc, item) => {
    acc[item.continent] = (acc[item.continent] || 0) + 1;
    return acc;
  }, {});

  const totalSlides = continentWiseCount[continent] || 0;

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveIndexMobile(current),
  };

  const handleNext = () => {
    if (activeIndex < totalSlides - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <div className="relative py-32">
      {/* desktop screen */}
      <div className="main-container hidden gap-10 lg:flex xl:gap-10">
        <div>
          <div className="relative block w-full overflow-hidden lg:h-[950px] xl:h-[950px] 2xl:h-[1080px]">
            <div
              className="flex w-full flex-row flex-nowrap gap-5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(-${(activeIndex / (totalSlides - 3)) * 50}%)`,
              }}
            >
              <div className="flex flex-col gap-5">
                {data
                  .filter(({ continent: c }) => !continent || c === continent)
                  .map(({ country, flag, locations }, index) => {
                    return (
                      <CountryCard
                        key={index}
                        country={country}
                        flag={flag}
                        locations={locations}
                        index={index}
                        continent={continent}
                      />
                    );
                  })}
              </div>
              <div className="h-full min-w-[30%] translate-y-16">
                <img
                  src="/group-line.svg"
                  className="min-h-full md:w-[50px] lg:w-[40px] xl:w-[40px] 2xl:w-[45px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex w-[30%] flex-col gap-6 2xl:flex-1">
          <SectionHeader
            title="Our Global Presence"
            description={
              <>
                Connect with one of our global offices...
                <br />
                or feel free to just send us a nifty postcard. We won&apos;t
                mind!
              </>
            }
            align="start"
          />
          <RegionSelector
            regions={regions}
            continent={continent}
            setContinent={setContinent}
          />
        </div>
      </div>
      <div className="absolute z-50 hidden h-full flex-col items-center justify-center gap-2 lg:top-10 lg:left-1 lg:flex xl:top-10 xl:left-36 2xl:top-0 2xl:left-36">
        <NavButton
          disabled={activeIndex === 0}
          onClick={handlePrev}
          icon={
            <BsArrowUpShort
              size={32}
              color={activeIndex !== 0 ? "white" : "black"}
            />
          }
        />
        <NavButton
          disabled={activeIndex >= totalSlides - 3}
          onClick={handleNext}
          icon={
            <BsArrowDownShort
              size={32}
              color={activeIndex < totalSlides - 3 ? "white" : "black"}
            />
          }
        />
      </div>

      {/* mobile and Tablet screen */}
      <div className="flex flex-col gap-10 lg:hidden">
        <div className="mt-14 flex flex-col gap-6">
          <SectionHeader
            title="Our Global Presence"
            description={
              <>
                Connect with one of our global offices...
                <br />
                or feel free to just send us a nifty postcard. We won&apos;t
                mind!
              </>
            }
            align="center"
          />
          <RegionSelector
            regions={regions}
            continent={continent}
            setContinent={setContinent}
            isAlign
          />
        </div>
        <div className="relative flex justify-center">
          <Slider
            ref={sliderRef}
            {...settings}
            className="h-full w-[400px] sm:w-[500px]"
          >
            {data
              .filter(({ continent: c }) => !continent || c === continent)
              .map(({ country, flag, locations }, index) => {
                return (
                  <div
                    key={index}
                    className="relative min-h-[270px] rounded-[1.25rem] border p-6"
                  >
                    <div
                      className="absolute inset-0 rounded-[1.25rem] bg-cover bg-no-repeat"
                      style={{ backgroundImage: 'url("./footer/bg.jpeg")' }}
                    />
                    <div className="absolute inset-0 rounded-[1.25rem] bg-[#080707]/50"></div>

                    <div className="relative flex flex-col gap-4 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold md:text-2xl">
                          {country}
                        </span>
                        <img
                          src={flag}
                          className="h-10 object-cover"
                          alt={country}
                        />
                      </div>

                      <div className="mx-2 w-full border-t-2 border-dotted border-white" />

                      <div className="relative mx-auto flex w-full items-center gap-2">
                        <CitySlider
                          item={locations}
                          index={index}
                          continent={continent}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
          <div className="absolute -bottom-[75px] text-black">
            <div className="flex items-center gap-x-9">
              <NavButton
                disabled={activeIndexMobile === 0}
                onClick={() => sliderRef.current?.slickPrev()}
                icon={
                  <BsArrowLeftShort
                    size={32}
                    color={activeIndexMobile !== 0 ? "white" : "black"}
                  />
                }
              />
              <NavButton
                disabled={activeIndexMobile >= totalSlides - 1}
                onClick={() => sliderRef.current?.slickNext()}
                icon={
                  <BsArrowRightShort
                    size={32}
                    color={
                      activeIndexMobile < totalSlides - 1 ? "white" : "black"
                    }
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
