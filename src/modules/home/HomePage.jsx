import Copytight from "@/components/global/Copyright";
import Benefits from "./components/Benefits";
import Buisness from "./components/Buisness";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journals from "./components/Journals";
import Services from "./components/Services";
import Vision from "./components/Vision";
import FAQs from "@/components/shared/FAQs";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Buisness />
      <Journals />
      <Benefits />
      <Vision />
      <Services />
      <Careers />
      <FAQs />
      <Footer />
      <Copytight />
    </div>
  );
};

export default HomePage;
