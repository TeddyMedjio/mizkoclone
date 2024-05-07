import About from "./About";
import Experience from "./Experience";
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
    </div>
  );
};

export default ContenrWrapper;
