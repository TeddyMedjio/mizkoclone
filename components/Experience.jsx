import Image from "next/image";

const Experience = () => {
  return (
    <div className="px-0 md:px-5">
      <div className="border-x border-[#222222] border-b w-full 2xl:w-[70%] 2xl:mx-auto">
        <div className=" space-y-10 lg:space-y-0 lg:mx-10 pt-14 lg:pb-14 flex flex-col lg:flex-row lg:gap-24 items-center justify-normal">
          <div className="border-[#222222] border-b px-5 pb-10 lg:px-0 lg:border-0 lg:max-w-[348px]">
            <div className="space-y-4">
              <Image src="arrow.svg" height={44} width={44} alt="arrow icon" />
              <div className="lg:space-y-4 flex flex-row lg:flex-col items-center lg:items-start justify-between">
                <h2 className="font-medium text-[24px] text-[#cccccc]">
                  UX Designer
                </h2>
                <p className="text-[13px] rounded-[4px] uppercase font-medium border border-[#222222] px-2 py-1 text-grey bg-[#111111]">
                  10 Years
                </p>
              </div>
              <p className="text-base text-grey">
                10 years of design experience, helping my clients make big money
                and reach over 300 million users; I merge great aesthetics,
                design thinking with strategic growth tactics.
              </p>
            </div>
          </div>

          <div className="border-[#222222] border-b px-5 pb-10 lg:px-0 lg:border-0 lg:max-w-[348px]">
            <div className="space-y-4">
              <Image src="arrow.svg" height={44} width={44} alt="arrow icon" />
              <div className="lg:space-y-4 flex flex-row lg:flex-col items-center lg:items-start justify-between">
                <h2 className="font-medium text-[24px] text-[#cccccc]">
                  Visual Designer
                </h2>
                <p className="text-[13px] rounded-[4px] uppercase font-medium border border-[#222222] px-2 py-1 text-grey bg-[#111111]">
                  10 Years
                </p>
              </div>
              <p className="text-base text-grey">
                With a solid track record in designing websites, I deliver
                strong and user-friendly digital designs. (Since 10 Years in
                combination with development)
              </p>
            </div>
          </div>

          <div className="border-[#222222] border-b px-5 pb-10 lg:px-0 lg:border-0 lg:max-w-[348px]">
            <div className="space-y-4">
              <Image src="arrow.svg" height={44} width={44} alt="arrow icon" />
              <div className="lg:space-y-4 flex flex-row lg:flex-col items-center lg:items-start justify-between">
                <h2 className="font-medium text-[24px] text-[#cccccc]">
                  Graphic Designer
                </h2>
                <p className="text-[13px] rounded-[4px] uppercase font-medium border border-[#222222] px-2 py-1 text-grey bg-[#111111]">
                  14 Years
                </p>
              </div>
              <p className="text-base text-grey">
                I spent most of the last years helping companies scale their
                business by getting products from 0 to 1 and shaping the brands
                behind them.
              </p>
            </div>
          </div>

          <div className="border-[#222222] border-b px-5 pb-10 lg:px-0 lg:border-0 lg:max-w-[348px]">
            <div className="space-y-4">
              <Image src="arrow.svg" height={44} width={44} alt="arrow icon" />
              <div className="lg:space-y-4 flex flex-row lg:flex-col items-center lg:items-start justify-between">
                <h2 className="font-medium text-[24px] text-[#cccccc]">
                  Development
                </h2>
                <p className="text-[13px] rounded-[4px] uppercase font-medium border border-[#222222] px-2 py-1 text-grey bg-[#111111]">
                  08 Years
                </p>
              </div>
              <p className="text-base text-grey">
                I build scalable websites from scratch that fit seamlessly with
                design. My focus is on micro animations, transitions and
                interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
