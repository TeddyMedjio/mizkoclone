import ProjectProfil from "../../components/ProjectProfil";
import { work } from "../../constants";

export const metadata = {
  title: "Mes Realisations",
};

const page = () => {
  return (
    <div className="px-0 md:px-5">
      <div className="py-10 border-x border-[#222222] 2xl:w-[70%] 2xl:mx-auto">
        <div className="flex flex-col items-center justify-center px-5 lg:px-0">
          <div className="text-center max-w-2xl">
            <h2 className="text-[34px] md:text-[82px] font-normal">
              Mes Projets
            </h2>
            <p className="text-lg text-grey">
              Mes derniers projets de conception de sites Web et découvrez
              comment je peux vous aider à donner vie à vos idées.
            </p>
          </div>
          <div className=" w-[95%] grid grid-cols-1 md:grid-cols-2 mt-20 gap-5 lg:gap-10">
            {work.map((item) => (
              <ProjectProfil
                key={item.id}
                link={`/projets/${item.slug}`}
                title={item.title}
                service={item.service}
                url={item.image}
                alt={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
