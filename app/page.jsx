import About from "../components/About";
import Citation from "../components/Citation";
import Experience from "../components/Experience";
import Slider from "../components/Slider";
import Wrapper from "../components/Wrapper";
import MyModal from "../components/modal";

export default function Home() {
  return (
    <>
      <MyModal />
      <Wrapper />
      <Slider />
      <Experience />
      <About />
      <Citation />
    </>
  );
}
