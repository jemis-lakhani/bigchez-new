"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";
import { useForm } from "react-hook-form";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

const inputClasses =
  "b-2 w-full rounded-lg bg-white p-3 text-base font-extralight focus:!border-1 focus:!border-black focus:outline-none lg:rounded-2xl lg:p-4 lg:text-xl";

const ConnectWithUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  const Card = ({ index, data }) => {
    return (
      <div
        className={cn(
          "relative flex aspect-square w-20 items-center justify-center gap-2.5 rounded-full p-4 backdrop-blur-[32px] lg:aspect-auto lg:w-full lg:p-4",
          index === 0 ? "bg-primary" : "bg-white/10",
        )}
      >
        <img src={data?.icon} />
        <span className="hidden text-lg font-semibold text-white capitalize lg:block">
          {data?.title}
        </span>
      </div>
    );
  };

  const data = [
    { title: "Chat on WhatsApp", icon: "./contact-us/whatsapp.svg" },
    { title: "Call Us Directly", icon: "./contact-us/phone.svg" },
    { title: "Send an Email", icon: "./contact-us/mail.svg" },
  ];

  return (
    <>
      <div className="relative" id="connect-with-us">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("./footer/bg.jpeg")' }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="main-container relative z-20">
          <div className="flex justify-around gap-6 pt-20 pb-72 lg:grid lg:grid-cols-3">
            {data?.map((item, index) => (
              <Card key={index} index={index} data={item} />
            ))}
          </div>
        </div>
      </div>

      {/*  Form */}
      <div className="relative z-30 -mt-56 mb-56 flex flex-col items-center gap-10">
        <span className="text-center text-[50px] font-bold text-white capitalize">
          Connect with us
        </span>
        <div className="relative mx-auto w-[90%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[35%]">
          <div className="absolute right-0 bottom-0 -z-10 aspect-square w-1/3 translate-x-1/8 translate-y-1/4 rounded-full bg-[#FFA64C] lg:-right-7 lg:-bottom-7 lg:w-1/2 lg:translate-x-1/6 lg:translate-y-1/8"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative w-full overflow-hidden rounded-2xl lg:rounded-[35px]"
            style={{ border: "2px solid rgba(250, 146, 19, 0.2)" }}
          >
            <div
              className="absolute inset-0 bg-cover"
              style={{ backgroundImage: 'url("./contact-us/form-bg.png")' }}
            ></div>
            <div className="absolute inset-0 bg-white/90"></div>

            <div className="relative flex flex-col gap-6 p-8 lg:p-10">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className={cn(inputClasses, outfit.className)}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}

              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className={cn(inputClasses, outfit.className)}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}

              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className={cn(inputClasses, outfit.className)}
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}

              <textarea
                placeholder="Message :"
                {...register("message", { required: "Message is required" })}
                className={cn("h-40", inputClasses, outfit.className)}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}

              <Button type="submit" className="btn-h-86 mt-2">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConnectWithUs;
