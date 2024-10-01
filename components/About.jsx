import Image from "next/image";
import ProjetsAcceuil from "./ProjetsAcceuil";

const About = () => {
  return (
    <div className="px-0 md:px-5">
      <div className="pb-10 border-x border-[#222222] border-b 2xl:w-[70%] 2xl:mx-auto">
        <ProjetsAcceuil />
      </div>
    </div>
  );
};

export default About;
