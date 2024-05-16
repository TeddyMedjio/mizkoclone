import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="px-0 md:px-5">
      <div className="pb-10 border-x border-[#222222] border-b 2xl:w-[70%] 2xl:mx-auto">
        <div className="relative h-[300px] lg:h-[520px]">
          <Image
            quality={100}
            fill={true}
            src="/background.jpg"
            alt="image of office"
            className=" object-cover absolute"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-5 lg:px-0">
          <div className=" flex flex-col max-w-[934px] my-10 space-y-6">
            <h2 className="text-[34px] md:text-[82px] font-semibold">Hey!</h2>
            <p className=" text-[16px] md:text-[19px] text-grey">
              I am <span className="text-white">Nganmedjio Jean Claude</span>{" "}
              and i am passionate about the Web and graphic design, I like to
              collaborate with people who attach importance to aesthetics, who
              understand{" "}
              <span className="text-white font-semibold">
                the power of simplicity and who know that a good customer
                experience is essential.
              </span>
            </p>

            <p className="text-[16px] md:text-[19px] text-grey">
              I like to spend my free time listening to podcasts about personal
              development, playing football, taking photos, looking at bad
              interfaces to improve them an exciting activity that allows me to
              develop my creativity.
            </p>
            <p className="text-[16px] md:text-[19px] text-grey">
              By keeping your identity at the heart of my approach, my goal is
              to ensure that I find the simplest solution to meet your needs. My
              clients use my services for my efficiency, my versatility and my
              ease in our discussions and also because I make incredible
              cookies, the secret is to use a lot of semi-salted butter.
            </p>
            <p className="text-[16px] md:text-[19px] text-grey">
              <span className="text-white font-semibold">
                I like the number 3,
              </span>{" "}
              I think it has something to do with the fact that I was born in
              the 3rd month.
            </p>
            <p className="text-[16px] md:text-[19px] text-grey">
              PS. Please keep in mind, my email is generally quite full with
              requests so sometimes I might take a little longer to get back to
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
