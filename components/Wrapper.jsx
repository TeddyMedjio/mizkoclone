import Image from "next/image";
import Link from "next/link";

const Wrapper = () => {
  return (
    <div className="px-0 md:px-5">
      <div className=" border-x border-[#222222] border-b lg:h-screen lg:flex items-center justify-center w-full 2xl:h-[766px] 2xl:w-[70%] 2xl:mx-auto">
        {/* text left */}
        <div className="px-5 md:px-9 md:py-20 lg:py-0 w-full lg:w-1/2 space-y-5 lg:space-y-10">
          <h1 className="pt-16 lg:pt-0 text-[32px] md:text-[76px] font-bold leading-[40px] md:leading-[80px] ">
            Designer & Frontend dev
          </h1>
          <p className=" font-normal text-base md:text-2xl text-grey leading-[26px] md:line-clamp-none md:w-[600px]">
            Un site web complet du concept à la réalisation, c&apos;est ce qui
            me distingue. Mon grand sens du design et mes compétences en
            développement me permettent de créer des projets passionnants.
          </p>
          <div className="flex flex-col items-center space-y-5 md:space-y-0 md:justify-start justify-center md:flex-row md:space-x-5 ">
            <Link
              href="mailto:hello@medjio.me"
              className="text-sm font-medium py-[10px] text-center w-full md:w-auto md:px-4 bg-white text-black rounded-lg hover:bg-slate-100"
            >
              Me contacter
            </Link>
            <div className="flex items-center gap-2 pb-9 md:pb-0">
              <span className=" animate-pulse h-[15px] w-[15px] bg-green-600 border-2 border-green-950 rounded-full"></span>
              <p className=" text-sm text-grey ">
                Disponible pour des opportunités et contrats.
              </p>
            </div>
          </div>
        </div>

        <div className=" hidden lg:block my-20 lg:my-0 relative h-[300px] lg:h-full lg:w-1/2">
          {/* <div className=" absolute z-[2] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src="logo.svg" height={220} width={220} alt="logo" />
          </div> */}
          <span className=" absolute bg-black opacity-30 h-full w-full "></span>
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="pattern.svg"
              fill={true}
              alt="logo pattern"
              draggable={false}
              className="object-cover h-full w-full animate-[pulse_4s_ease-in-out_infinite]"
            />
          </div>
          {/* <video
            className=" object-cover h-full w-full overflow-hidden "
            autoPlay
            loop
            muted
            playsInline
            poster="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1715846818/ypdpqn4sxlybqy7ebmcy.webp"
          >
            <source
              src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1715850371/wax6kithybb8csmonqze.mp4"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1715850372/uwiyceydmijerhgtrxjw.webm"
              type="video/webm"
            />
          </video> */}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
