const Branding = () => {
  return (
    <div className="bg-primary-gradient flex items-center justify-between px-2 py-4">
      <div className="text-2xl text-white capitalize lg:text-3xl 2xl:text-4xl">
        solutions
      </div>
      <img src="./star.svg" />
      <div className="text-2xl text-white capitalize lg:text-3xl 2xl:text-4xl">
        Bigchez solutions
      </div>
      <img src="./star.svg" />
      <div className="text-2xl text-white capitalize lg:text-3xl 2xl:text-4xl">
        Bigchez solutions
      </div>
      <img src="./star.svg" className="hidden xl:block" />
      <div className="hidden text-2xl text-white capitalize lg:text-3xl xl:block 2xl:text-4xl">
        Bigchez solutions
      </div>
    </div>
  );
};

export default Branding;
