import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold cursor-pointer px-12 py-4 focus:ring-0 focus:outline-none capitalize",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#FFA726] via-[#F57C00] to-[#F57C00] text-white rounded-full hover:opacity-90 ring-primary ring-[4px]",
        secondary:
          "before relative rounded-xl border-[2px] bg-gradient-to-r from-[#FFA726] via-[#F57C00] to-[#F57C00] px-10 py-5 font-semibold text-white transition-all duration-200 before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:translate-x-2 before:translate-y-2.5 before:rounded-xl before:bg-gradient-to-r before:from-[#0993AB] before:via-[#09748D] before:to-[#09748D] before:content-[''] hover:from-[#FFB74D] hover:via-[#FB8C00] hover:to-[#FB8C00] hover:shadow-[0px_1px_2px_rgba(0,0,0,0.16),0px_0px_0px_1px_#09748D]",
        "secondary-1":
          // "relative rounded-xl bg-gradient-to-r from-[#FFA726] via-[#F57C00] to-[#F57C00] px-10 py-5 font-semibold text-white transition-all duration-200 hover:from-[#FFB74D] hover:via-[#FB8C00] hover:to-[#FB8C00] hover:shadow-[0px_1px_4px_rgba(0,0,0,0.16),0px_0px_0px_2px_#09748D]",
          "relative rounded-xl bg-[#ff9930] px-10 py-5 font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0px_1px_4px_rgba(0,0,0,0.16),0px_0px_0px_2px_#d96e00]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Button = React.forwardRef(({ className, variant, ...props }, ref) => {
  const Comp = "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
