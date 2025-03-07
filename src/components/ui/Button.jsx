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
          "relative px-10 py-5 text-white font-semibold rounded-xl bg-gradient-to-r from-[#FFA726] via-[#F57C00] to-[#F57C00] border-[2px] before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-r before:from-[#0993AB] before:via-[#09748D] before:to-[#09748D] before:translate-x-2 before:translate-y-2.5 before:w-full before:h-full",
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
