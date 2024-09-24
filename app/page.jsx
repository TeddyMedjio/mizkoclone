import About from "../components/About";
import Citation from "../components/Citation";
import Experience from "../components/Experience";
import Slider from "../components/Slider";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <main>
      <Wrapper />
      <Slider />
      <Experience />
      <About />
      <Citation />
    </main>
  );
}
