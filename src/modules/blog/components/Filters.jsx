import React, { useState } from "react";

const Filters = () => {
  const categories = [
    "Bussiness",
    "News",
    "Cloud Solution",
    "Artificial Inteligence",
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex flex-[0_0_33%] flex-col gap-8">
      <div className="filter-container relative hidden bg-white px-6 pt-10 pb-20 lg:block">
        <div className="mb-4 text-[25px] font-semibold uppercase">SEARCH</div>
        <div className="border-primary flex items-center gap-2 rounded-full border px-5 py-6">
          <img src="/search1.svg" alt="search-icon" />
          <input
            className="px-2 text-xl font-normal text-black outline-none"
            placeholder="Search anything..."
          />
        </div>
      </div>
      <div className="filter-container relative bg-white px-6 py-10">
        <div className="mb-4 text-[25px] font-semibold uppercase">
          CATEGORIES
        </div>
        <div className="hidden lg:block">
          {categories.map((item, index) => {
            return (
              <div className="mb-3 cursor-pointer" key={index}>
                <div className="mb-3 px-2 text-xl text-black/57">{item}</div>
                <hr className="text-[#D9D9D9]" />
              </div>
            );
          })}
        </div>
        <div className={`relative flex w-full items-center gap-5 lg:hidden`}>
          <div
            className={`mr-auto text-2xl font-semibold uppercase transition-all duration-300 ${
              isExpanded
                ? "hidden translate-x-[-50px] opacity-0"
                : "translate-x-[0px] opacity-100"
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Search
          </div>

          <img
            src="/search.svg"
            alt="search-icon"
            className={`cursor-pointer transition-all duration-300 ${
              isExpanded ? "" : "hidden"
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
          />

          <select
            name="categories"
            className={`custom-select border-primary grow transform rounded-2xl border p-4 text-xl text-[#00000091] transition-all duration-200 outline-none ${
              isExpanded
                ? "w-full scale-100 opacity-100"
                : "w-0 translate-x-[10px] scale-90 opacity-0"
            }`}
          >
            {categories.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <img
            src="/search.svg"
            alt="search-icon"
            className={`cursor-pointer transition-all duration-300 ${
              isExpanded ? "hidden" : "opacity-100"
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
