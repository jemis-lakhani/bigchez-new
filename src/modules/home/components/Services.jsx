import { Button } from "@/components/ui/Button";
import HRLine from "@/components/ui/HRLine";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <div className="bg-secondary relative py-16 lg:py-32">
      <div
        id="affordable"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: 'url("./services/bg.png")' }}
      ></div>
      <div className="main-container relative z-1 flex flex-col items-center gap-8">
        <div className="text-center text-5xl">
          <span className="font-bold">Can Quality Be </span>
          <span className="text-secondary-1 font-bold">&nbsp;Affordable?</span>
        </div>
        <HRLine />
        <span className="text-secondary px-5 text-center text-lg font-medium lg:px-10 lg:text-2xl">
          <span className="font-bold">Absolutely!</span> At our core, we believe
          exceptional software solutions should be accessible to
          everyone—whether you&apos;re a local business, a mid-sized enterprise,
          or a large corporation.
          <br />
          <br />
          <span className="px-5">
            Affordability shouldn&apos;t mean compromise, and we ensure
            businesses of all sizes receive innovative, high-quality solutions
            tailored to their needs and budget.
          </span>
        </span>
        <span className="text-secondary-1 mt-2 text-center text-lg font-bold lg:text-2xl">
          ❝ Because innovation should empower, not exclude.❞
        </span>
        <Button className={cn("btn-h-86")}>Explore Our Services</Button>
      </div>
    </div>
  );
};

export default Services;
