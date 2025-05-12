import About from "../components/About";
import Citation from "../components/Citation";
import Experience from "../components/Experience";
import Slider from "../components/Slider";
import Wrapper from "../components/Wrapper";
import ShowPopup from "../components/show-popup";

export default function Home() {
  return (
    <>
      <ShowPopup />
      <Wrapper />
      <Slider />
      <Experience />
      <About />
      <Citation />
    </>
  );
}
