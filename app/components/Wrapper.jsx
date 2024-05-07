import Link from "next/link";

const Wrapper = () => {
  return (
    <div className="px-5">
      <div className=" border-x border-[#222222] border-b h-screen flex items-center justify-center w-full 2xl:h-[766px] 2xl:w-[70%] 2xl:mx-auto ">
        {/* text left */}
        <div className="mx-10 w-1/2 space-y-10">
          <h1 className="text-[76px] font-bold leading-[80px]">
            UX/UI designer & Frontend dev in Cameroon
          </h1>
          <p className=" font-normal text-lg text-grey leading-[26px]">
            Passionate about the Web and graphic design, <br />I like to
            collaborate with people who attach importance to <br /> aesthetics,
            who understand the power of simplicity and who <br /> know that a
            good customer experience is essential.
          </p>
          <div className="flex space-x-5">
            <Link
              href="mailto:hello.medjio.me"
              className="text-sm font-semibold py-[10px] px-4 bg-white text-black rounded-lg hover:bg-slate-100"
            >
              Get in touch
            </Link>
            <div className="flex items-center gap-2">
              <span className=" h-[10px] w-[10px] bg-green-600 border-2 border-green-950 rounded-full"></span>
              <p className=" text-sm text-grey">
                Available until the end of {new Date().getFullYear()}.
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
