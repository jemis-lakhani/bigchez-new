const Branding = () => {
  return (
    <div className="bg-primary-gradient flex items-center justify-between px-2 py-3 md:py-4">
      <div className="text-lg text-white capitalize sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
        solutions
      </div>
      <img
        src="./star.svg"
        className="w-h-7 h-7 md:h-auto md:w-auto"
        alt="star"
      />
      <div className="text-lg text-white capitalize sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
        Bigchez solutions
      </div>
      <img
        src="./star.svg"
        className="w-h-7 h-7 md:h-auto md:w-auto"
        alt="star"
      />
      <div className="text-lg text-white capitalize sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
        Bigchez solutions
      </div>
      <img src="./star.svg" className="hidden xl:block" alt="star" />
      <div className="hidden text-white capitalize xl:block xl:text-4xl">
        Bigchez solutions
      </div>
    </div>
  );
};

export default Branding;
