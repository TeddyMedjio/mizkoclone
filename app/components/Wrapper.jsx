import Image from "next/image";
import Link from "next/link";

const Wrapper = () => {
  return (
    <div className="px-0 md:px-5">
      <div className=" border-x border-[#222222] border-b lg:h-screen lg:flex items-center justify-center w-full 2xl:h-[766px] 2xl:w-[70%] 2xl:mx-auto ">
        {/* text left */}
        <div className="px-5 md:px-9 md:py-20 lg:py-0 w-full lg:w-1/2 space-y-5 lg:space-y-10">
          <h1 className="pt-16 lg:pt-0 text-[32px] md:text-[76px] font-bold leading-[40px] md:leading-[80px]">
            Freelance Designer & Frontend dev
          </h1>
          <p className=" font-normal text-base md:text-lg text-grey leading-[26px] line-clamp-3 md:line-clamp-none">
            A complete website from concept to implementation, that's what makes
            me stand out. My great sense for design and my development skills
            enable me to create kick-ass projects.
          </p>
          <div className="flex flex-col items-center space-y-5 md:space-y-0 md:justify-start justify-center md:flex-row md:space-x-5 ">
            <Link
              href="mailto:hello.medjio.me"
              className="text-sm font-semibold py-[10px] text-center w-full md:w-auto md:px-4 bg-white text-black rounded-lg hover:bg-slate-100"
            >
              Get in touch
            </Link>
            <div className="flex items-center gap-2">
              <span className=" h-[10px] w-[10px] bg-green-600 border-2 border-green-950 rounded-full"></span>
              <p className=" text-sm text-grey">
                Available for freelance and contract opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className=" my-20 lg:my-0 relative h-[300px] lg:h-full lg:w-1/2">
          <div className=" absolute z-[2] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src="logo.svg" height={220} width={220} alt="logo" />
          </div>
          <span className=" absolute bg-black opacity-50 h-full w-full "></span>
          <video
            className=" object-cover h-full w-full overflow-hidden "
            autoPlay
            loop
            muted
            playsInline
            poster="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1715074951/slw8hnlb0tidpevi8tra.jpg"
          >
            <source
              src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1704540192/yd6i93dbyzr7epgi3yeo.mp4"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1704540811/qepa3oowzkjhx2rfpurh.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
