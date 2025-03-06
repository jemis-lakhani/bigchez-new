const Copytight = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'url("./footer/bg.jpeg' }}
      ></div>
      <div className="relative flex flex-col items-center gap-5 py-6">
        <img src="./logo-without-text.png" />
        <span className="text-center text-white">
          © 2025, Bigchez private limited. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Copytight;
