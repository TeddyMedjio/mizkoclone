import About from "./About";
import Citation from "./Citation";
import Experience from "./Experience";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Wrapper from "./Wrapper";

const ContenrWrapper = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Wrapper />
      <Slider />
      <Experience />
      <About />
      <Citation />
      <Footer />
    </div>
  );
};

export default ContenrWrapper;
