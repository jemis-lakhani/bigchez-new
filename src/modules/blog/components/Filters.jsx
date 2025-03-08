import React from "react";

const Filters = () => {
  const categories = [
    "Bussiness",
    "News",
    "Cloud Solution",
    "Artificial Inteligence",
  ];
  return (
    <div className="flex flex-[0_0_33%] flex-col gap-8">
      <div className="filter-container relative hidden bg-white px-6 pt-10 pb-20 lg:block">
        <div className="mb-4 text-[25px] font-semibold uppercase">SEARCH</div>
        <div className="border-primary flex items-center gap-2 rounded-full border px-5 py-6">
          <img src="/search.svg" alt="search-icon" />
          <input className="outline-none" placeholder="search anything..." />
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
        <div className="flex items-center gap-3 lg:hidden">
          <img src="/search.svg" alt="search-icon" />
          <select
            id=""
            name="categories"
            className="border-primary grow rounded-md border p-1.5 outline-none"
          >
            {categories.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
