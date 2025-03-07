import FAQs from "@/components/shared/FAQs";
import ConnectWithUs from "./components/ConnectWithUs";
import Hero from "./components/Hero";
import PartnerWithUs from "./components/PartnerWithUs";
import Process from "./components/Process";
import Footer from "./components/Footer";
import Copytight from "@/components/global/Copyright";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ConnectWithUs />
      <Process />
      <PartnerWithUs />
      <FAQs />
      <Footer />
      <Copytight />
    </div>
  );
};

export default ContactUsPage;
