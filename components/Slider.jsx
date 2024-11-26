import Image from "next/image";
import InfiniteSlider from "./InfiniteSlider";

const Slider = () => {
  return (
    <div className="px-0 md:px-5">
      <div className="lg:pb-10 border-x border-[#222222] border-b w-full  2xl:w-[70%] 2xl:mx-auto">
        <h1 className="text-base text-center text-grey py-9">
          Fier d&apos;avoir travaillé avec:
        </h1>
        <div className="mb-14 lg:my-0">
          <InfiniteSlider />
        </div>
      </div>
    </div>
  );
};

export default Slider;
