import Copytight from "@/components/global/Copyright";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Footer from "@/components/shared/Footer";

const BlogPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Blogs />
      <Footer title="Ready to join hands with us" btnTxt="Let's Talk" />
      <Copytight />
    </div>
  );
};

export default BlogPage;
