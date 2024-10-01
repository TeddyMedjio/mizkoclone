import { SKILL } from "../constants";

const Experience = () => {
  return (
    <div className="px-0 md:px-5">
      <div className="border-x border-[#222222] border-b w-full 2xl:w-[70%] 2xl:mx-auto">
        <h2 className="text-[34px] md:text-[42px] font-normal text-center py-14">
          Mes Compétences
        </h2>
        <div className=" space-y-10 lg:space-y-0 lg:mx-10  lg:pb-14 flex flex-col lg:flex-row lg:gap-10 items-center lg:items-start justify-center">
          {SKILL.map((skill) => (
            <div
              key={skill.key}
              className="border-[#222222] border-b px-5 pb-10 lg:px-0 lg:border-0 lg:max-w-[348px] flex-1"
            >
              <div className="space-y-4">
                <div className="lg:space-y-4 flex flex-row lg:flex-col items-center lg:items-start justify-between">
                  <h2 className="font-medium text-[22px] text-[#cccccc]">
                    {skill.title}
                  </h2>
                  <p className="text-[13px] rounded-[4px] uppercase font-medium border border-[#222222] px-2 py-1 text-grey bg-[#111111]">
                    {skill.year}
                  </p>
                </div>
                <p className="text-base text-grey">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
