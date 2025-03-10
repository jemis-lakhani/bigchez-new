const Benefits = () => {
  return (
    <div className="relative">
      <div className="absolute top-0">
        <img src="./journals/bottom-curve.png" className="w-full" />
      </div>
      <div id="promises" className="bg-secondary py-16 lg:py-32">
        {/* Laptop Screen */}
        <div className="main-container hidden lg:block">
          <div className="mb-6 grid grid-cols-7">
            <div></div>
            <div className="col-span-2 flex flex-col justify-center gap-2 text-2xl">
              <span className="text-primary text-center font-extrabold">
                Full Access:
              </span>
              <span className="text-secondary text-center font-medium">
                You&apos;ll have complete control over your software.
              </span>
            </div>
            <div></div>
            <div className="col-span-2 flex flex-col justify-center gap-2 text-2xl">
              <span className="text-primary text-center font-extrabold">
                Transparent Communication:
              </span>
              <span className="text-secondary text-center font-medium">
                Stay informed at every step.
              </span>
            </div>
            <div></div>
          </div>
          <div className="mx-3 grid grid-cols-5">
            <img className="scale-105" src="./benefits/availability.png" />
            <img className="mt-6 scale-105" src="./benefits/access.png" />
            <img className="scale-105" src="./benefits/reliability.png" />
            <img
              className="mt-6 scale-105"
              src="./benefits/communication.png"
            />
            <img className="scale-105" src="./benefits/tech.png" />
          </div>
          <div className="mt-6 grid grid-cols-14">
            <div className="col-span-3 flex flex-col justify-start gap-2 text-2xl">
              <span className="text-blue-gradient text-center font-extrabold text-transparent">
                24/7 Availability:
              </span>
              <span className="text-secondary text-center font-medium">
                We&apos;re always here for you, even at midnight.
              </span>
            </div>
            <div></div>
            <div></div>
            <div className="col-span-4 flex flex-col justify-start gap-2 text-2xl">
              <span className="text-center font-extrabold text-[#36BBE4]">
                Longevity and Reliability:
              </span>
              <span className="text-secondary text-center font-medium">
                Count on us for the long haul.
              </span>
            </div>
            <div></div>
            <div></div>
            <div className="col-span-3 flex flex-col justify-start gap-2 text-2xl">
              <span className="text-blue-gradient text-center font-extrabold">
                Latest Technology:
              </span>
              <span className="text-secondary text-center font-medium">
                We use cutting-edge tools for unmatched security and
                performance.
              </span>
            </div>
          </div>
        </div>
        {/* Mobile Screen */}
        <div className="main-container flex flex-col gap-8 lg:hidden">
          <div className="flex gap-3">
            <div className="max-w-[158px] rotate-270">
              <img className="scale-105" src="./benefits/availability.png" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2">
              <span className="text-blue-gradient text-left text-xl font-extrabold text-transparent">
                24/7 Availability:
              </span>
              <span className="text-secondary text-left font-medium">
                We&apos;re always here for you, even at midnight.
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-1 flex-col justify-center gap-2">
              <span className="text-primary text-right text-xl font-extrabold">
                Full Access:
              </span>
              <span className="text-secondary text-right font-medium">
                You&apos;ll have complete control over your software.
              </span>
            </div>
            <div className="max-w-[158px] rotate-270">
              <img className="" src="./benefits/access.png" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="max-w-[158px] rotate-270">
              <img className="scale-105" src="./benefits/reliability.png" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2">
              <span className="text-left text-xl font-extrabold text-[#36BBE4]">
                Longevity and Reliability:
              </span>
              <span className="text-secondary text-left font-medium">
                Count on us for the long haul.
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-1 flex-col justify-center gap-2">
              <span className="text-primary text-right text-xl font-extrabold">
                Transparent Communication:
              </span>
              <span className="text-secondary text-right font-medium">
                Stay informed at every step.
              </span>
            </div>
            <div className="max-w-[158px] rotate-270">
              <img className="" src="./benefits/communication.png" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="max-w-[158px] rotate-270">
              <img className="scale-105" src="./benefits/tech.png" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2">
              <span className="text-blue-gradient text-left text-xl font-extrabold text-transparent">
                Latest Technology:
              </span>
              <span className="text-secondary text-left font-medium">
                We use cutting-edge tools for unmatched security and
                performance.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
