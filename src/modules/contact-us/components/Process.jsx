import { Button } from "@/components/ui/Button";

const Process = () => {
  const data = [
    {
      icon: "./contact-us/process/icon-1.svg",
      title: "Start a New Project",
      desc: "Ready to turn your ideas into reality? Let’s discuss how we can create innovative solutions tailored to your needs.",
      buttonTitle: "Discuss with us",
    },
    {
      icon: "./contact-us/process/icon-2.svg",
      title: "Manage an Existing Service",
      desc: "Have a project that needs updates or management? We specialize in taking over and optimizing existing systems for seamless performance.",
      buttonTitle: "Request Support",
    },
    {
      icon: "./contact-us/process/icon-3.svg",
      title: "Other Inquiries",
      desc: "need something else? Share your requirements, and we’ll ensure you get the right support",
      buttonTitle: "raise a ticket",
    },
  ];

  return (
    <div className="bg-secondary relative py-40">
      <div className="main-container grid grid-cols-1 gap-30 lg:grid-cols-3 lg:gap-10">
        {data?.map((item, index) => (
          <div
            key={index}
            className="group relative mx-5 flex h-full flex-col items-center justify-center rounded-[20px] bg-white px-5 pt-24 pb-10 shadow-[0px_10px_35px_0px_rgba(93,72,223,0.08)] lg:mx-0"
          >
            <div className="absolute top-0 left-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-5 shadow-[0px_4px_4px_0px_rgba(236,234,234,0.25)]">
              <img src={item.icon} />
            </div>
            <div
              className="absolute inset-0 rounded-[20px] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(105.44deg, rgba(206, 147, 216, 0.9) -16.82%, rgba(106, 27, 154, 0.9) 34.24%)",
              }}
            ></div>
            <div className="z-10 flex flex-1 flex-col items-center justify-between gap-4">
              <span className="text-secondary-2 text-center text-2xl font-bold capitalize group-hover:!text-white">
                {item.title}
              </span>
              <span className="text-secondary text-center text-lg group-hover:!text-white">
                {item.desc}
              </span>
              <Button className="font-bold capitalize">
                {item.buttonTitle}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0">
        <img src="./contact-us/process/bottom-vector.png" className="w-full" />
      </div>
    </div>
  );
};

export default Process;
