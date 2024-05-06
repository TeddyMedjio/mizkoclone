import Link from "next/link";

const Wrapper = () => {
  return (
    <div className="px-5">
      <div className=" border-x border-[#222222] border-b h-screen flex items-center justify-center w-full 2xl:h-[766px] 2xl:w-[70%] 2xl:mx-auto ">
        {/* text left */}
        <div className="mx-10 w-1/2 space-y-10">
          <h1 className="text-[76px] font-bold leading-[80px]">
            UX/UI designer & Educator in Sydney
          </h1>
          <p className=" font-medium text-lg text-grey leading-[26px]">
            I&apos;m a freelance UX Designer, Founder, Educator & Investor with
            a 14 <br />
            year track record in the high-growth startup space. I&apos;ve led
            strategy <br />
            and design for 50+ high-growth startups; with a total $350M raised{" "}
            <br />
            across them all.
          </p>
          <div className="flex space-x-5">
            <Link
              href="/"
              className="text-sm font-semibold py-[10px] px-4 bg-white text-black rounded-lg hover:bg-slate-100"
            >
              Get in touch
            </Link>
            <div className="flex items-center gap-2">
              <span className=" h-[10px] w-[10px] bg-red-600 border-2 border-red-950 rounded-full"></span>
              <p className=" text-sm text-grey">
                Fully booked until end of {new Date().getFullYear()}.
              </p>
            </div>
          </div>
        </div>

        <div className=" relative h-full w-1/2">
          <span className=" absolute bg-black opacity-50 h-full w-full"></span>
          <video
            className=" object-cover h-full w-full overflow-hidden "
            autoPlay
            loop
            muted
            playsInline
            poster="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704543131/kw5fgucy2z2bm2l3kbxw.jpg"
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
