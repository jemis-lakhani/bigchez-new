import Copytight from "@/components/global/Copyright";
import FAQs from "@/components/shared/FAQs";
import Footer from "@/components/shared/Footer";
import ConnectWithUs from "./components/ConnectWithUs";
import Hero from "./components/Hero";
import PartnerWithUs from "./components/PartnerWithUs";
import Process from "./components/Process";
import GlobalPresence from "./components/GlobalPresence";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ConnectWithUs />
      <Process />
      <PartnerWithUs />
      <GlobalPresence />
      <FAQs />
      <Footer title="Ready to join hands with us" btnTxt="step into success" />
      <Copytight />
    </div>
  );
};

export default ContactUsPage;
