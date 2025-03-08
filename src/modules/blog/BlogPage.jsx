import Copytight from "@/components/global/Copyright";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Footer from "@/components/shared/Footer";

const BlogPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Blogs />
      <Footer />
      <Copytight />
    </div>
  );
};

export default BlogPage;
