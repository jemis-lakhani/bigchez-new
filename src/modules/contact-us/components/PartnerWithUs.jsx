"use client";
import { Button } from "@/components/ui/Button";
import HRLine1 from "@/components/ui/HRLine1";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";
import { useForm } from "react-hook-form";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

const inputClasses =
  "w-full rounded-xl lg:rounded-2xl b-2 p-3 lg:p-4 text-lg lg:text-[30px] font-light text-[#BDB9B9] z-10 bg-[#182844] focus:!border-2 focus:!border-white focus:outline-none";

const PartnerWithUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <div className="relative -mt-0.5" id="partner-with-us">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("./contact-us/partner-with-us/bg.png")',
        }}
      ></div>
      <div className="main-container relative z-10 grid grid-cols-1 items-center gap-5 py-24 lg:grid-cols-2 lg:py-50">
        <div className="mx-5 flex flex-col items-center gap-8 text-white lg:mx-0 lg:items-start">
          <span className="text-center text-[38px] font-bold capitalize lg:text-left lg:text-[50px]">
            Looking for
            <br /> partner with us ?
          </span>
          <HRLine1 />
          <span className="text-center text-xl font-bold lg:text-left lg:text-2xl">
            Collaboration drives success.
          </span>
          <span className="text-center text-base leading-9 lg:text-left lg:text-lg">
            Whether you’re a business aiming to enhance your digital presence or
            an individual with a groundbreaking idea, we’re here to help you
            achieve your goals.
            <br />
            <br /> By combining your vision with our expertise in software
            development and technology solutions, we can create impactful
            results that matter. Let’s work together to transform ideas into
            meaningful outcomes
          </span>
        </div>
        <div className="relative mx-3 overflow-hidden rounded-[20px] border-1 border-white lg:mx-0">
          <div className="absolute inset-0 bg-[#0F1F3BE5]"></div>
          <div className="relative z-10 flex flex-col gap-6 px-5 py-10 lg:gap-8 lg:px-10 lg:py-16">
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
              placeholder="how can we help you"
              {...register("subject", { required: "Subject is required" })}
              className={cn(inputClasses, outfit.className)}
            />
            {errors.subject && (
              <p className="text-sm text-red-500">{errors.subject.message}</p>
            )}

            <Button type="submit" className="btn-h-86 mt-2">
              Submit
            </Button>

            <span className="text-center text-xs text-white lg:text-base">
              I consent to processing of my personal data entered above for
              bigchez to contact me.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
