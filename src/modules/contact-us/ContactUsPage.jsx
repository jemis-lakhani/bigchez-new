import Copytight from "@/components/global/Copyright";
import FAQs from "@/components/shared/FAQs";
import Footer from "@/components/shared/Footer";
import ConnectWithUs from "./components/ConnectWithUs";
import Hero from "./components/Hero";
import PartnerWithUs from "./components/PartnerWithUs";
import Process from "./components/Process";

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
