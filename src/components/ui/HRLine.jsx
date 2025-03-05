import { cn } from "@/lib/utils";

const HRLine = ({ className = "w-[162px]" }) => {
  return <span className={cn("block h-[3px] bg-[#F7941D]", className)} />;
};

export default HRLine;
