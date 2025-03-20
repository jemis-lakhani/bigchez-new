import CitySlider from "./CitySlider";

export default function CountryCard({
  country,
  flag,
  locations,
  index,
  continent,
}) {
  return (
    <div className="relative ml-3 rounded-[1.25rem] border p-6 lg:w-[500px] 2xl:w-[600px]">
      <div
        className="absolute inset-0 rounded-[1.25rem] bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("./footer/bg.jpeg")' }}
      />
      <div className="absolute inset-0 rounded-[1.25rem] bg-[#080707]/50"></div>

      <div className="relative flex flex-col gap-4 text-white">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold md:text-2xl lg:text-4xl">
            {country}
          </span>
          <img src={flag} className="h-10 object-cover" alt={country} />
        </div>
        <div className="mx-2 w-full border-t-2 border-dotted border-white" />
        <div className="relative mx-auto flex w-full items-center">
          <CitySlider item={locations} index={index} continent={continent} />
        </div>
      </div>
    </div>
  );
}
