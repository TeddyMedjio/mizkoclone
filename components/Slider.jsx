import Image from "next/image";

const Slider = () => {
  return (
    <div className="px-0 md:px-5">
      <div className="lg:pb-10 border-x border-[#222222] border-b w-full  2xl:w-[70%] 2xl:mx-auto">
        <h1 className="text-base text-center text-grey py-10">
          Proud to have worked with:
        </h1>
        <div className="scroller mb-14 lg:my-0">
          <div className="scroller__inner flex flex-nowrap gap-10">
            <Image
              src="/challenge.svg"
              height={150}
              width={150}
              alt="logo challenge"
            />
            <Image
              src="/marketing.svg"
              height={58}
              width={99}
              alt="logo marketing"
            />
            <Image
              src="/laravelshopper.svg"
              height={240}
              width={150}
              alt="logo laravelshopper"
            />
            <Image src="/zuhe.svg" height={150} width={150} alt="logo zuhe" />
            <Image
              src="/laravelCameroon.svg"
              height={50}
              width={50}
              alt="logo laravelcameroon"
            />
            <Image
              src="/challenge.svg"
              height={150}
              width={150}
              alt="logo challenge"
            />
            <Image
              src="/marketing.svg"
              height={58}
              width={99}
              alt="logo marketing"
            />
            <Image
              src="/laravelshopper.svg"
              height={150}
              width={150}
              alt="logo laravelshopper"
            />
            <Image src="/zuhe.svg" height={150} width={150} alt="logo zuhe" />
            <Image
              src="/laravelCameroon.svg"
              height={50}
              width={50}
              alt="logo laravelcameroon"
            />
            <Image
              src="/challenge.svg"
              height={150}
              width={150}
              alt="logo challenge"
            />
            <Image
              src="/marketing.svg"
              height={58}
              width={99}
              alt="logo marketing"
            />
            <Image
              src="/finsura.svg"
              height={150}
              width={150}
              alt="logo finsura"
            />
            <Image src="/zuhe.svg" height={150} width={150} alt="logo zuhe" />
            <Image
              src="/laravelCameroon.svg"
              height={50}
              width={50}
              alt="logo laravelcameroon"
            />
            <Image
              src="/challenge.svg"
              height={150}
              width={150}
              alt="logo challenge"
            />
            <Image
              src="/marketing.svg"
              height={58}
              width={99}
              alt="logo marketing"
            />
            <Image
              src="/laravelshopper.svg"
              height={150}
              width={150}
              alt="logo laravelshopper"
            />
            <Image src="/zuhe.svg" height={150} width={150} alt="logo zuhe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
