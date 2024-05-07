import Image from "next/image";

const About = () => {
  return (
    <div className="px-0 md:px-5">
      <div className=" pb-30 border-x border-[#222222] border-b 2xl:w-[70%] 2xl:mx-auto ">
        <div className="relative h-[300px] lg:h-[920px]">
          <Image
            fill={true}
            src="/background.jpg"
            alt="image of office"
            className=" object-cover absolute top-0"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-5 lg:px-0">
          <div className=" flex flex-col max-w-[934px] my-24 space-y-6">
            <h2 className="text-[34px] md:text-[42px] font-semibold">
              About me
            </h2>
            <p className=" text-[16px] md:text-[19px] text-grey">
              I help designers and founders win.
            </p>
            <p className="text-[16px] md:text-[19px] text-grey">
              I make sites and designs, and I do it well. Passionate about the
              Web and graphic design, I like to collaborate with people who
              attach importance to aesthetics, who understand{" "}
              <span className="text-white font-semibold">
                the power of simplicity and who know that a good customer
                experience is essential.
              </span>
            </p>
            <p className="text-[16px] md:text-[19px] text-grey">
              By keeping your identity at the heart of my approach, my goal is
              to ensure that I find the simplest solution to meet your needs. My
              clients use my services for my efficiency, my versatility and my
              ease in our discussions and also because I make incredible
              cookies, the secret is to use a lot of semi-salted butter.
            </p>
            <p className="text-[16px] md:text-[19px] text-grey">
              The majority of my free time is devoted to music and cooking, an
              exciting activity that allows me to develop my creativity..
            </p>
            <p className="text-[16px] md:text-[19px] text-grey">
              <span className="text-white font-semibold">
                I like the number 3,
              </span>{" "}
              I think it has something to do with the fact that I was born in
              the 3rd month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
