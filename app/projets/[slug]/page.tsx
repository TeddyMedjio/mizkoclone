import Image from "next/image";
import { work } from "../../../constants";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default async function page({ params }: { params: { slug: string } }) {
  const data = work;
  const projects = data.find((x) => x.slug === params.slug);
  if (!projects) {
    return <p>Projet Not Found</p>;
  }
  return (
    <div className="px-0 md:px-5">
      <div className="py-10 border-x border-[#222222] 2xl:w-[70%] 2xl:mx-auto">
        <div className="flex flex-col items-center justify-center px-5 lg:px-0">
          {/* TITRE */}
          <div className="text-center max-w-2xl">
            <h2 className="text-[34px] md:text-[82px] font-normal">
              {projects.title}
            </h2>
            <p className="text-lg text-grey">{projects.description}</p>
          </div>

          {/* INDICATIFS */}
          <div className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-4 my-10">
            <div className="text-center bg-[#0d0d0d] border border-[#222222] py-3 space-y-2 rounded-sm">
              <p className="uppercase text-sm text-[#525252]">Client</p>
              <p className="uppercase text-sm font-medium text-grey">
                {projects.title}
              </p>
            </div>
            <div className="text-center bg-[#0d0d0d] border border-[#222222] py-3 space-y-2 rounded-sm">
              <p className="uppercase text-sm text-[#525252]">Durée</p>
              <p className="uppercase text-sm font-medium text-grey">
                {projects.duree}
              </p>
            </div>
            <div className="text-center bg-[#0d0d0d] border border-[#222222] py-3 space-y-2 rounded-sm">
              <p className="uppercase text-sm text-[#525252]">Tools</p>
              <p className="uppercase text-sm font-medium text-grey">
                {projects.tools}
              </p>
            </div>
            <div className="text-center bg-[#0d0d0d] border border-[#222222] py-3 space-y-2 rounded-sm">
              <p className="uppercase text-sm text-[#525252]">Lien</p>
              <p className="uppercase text-sm font-medium text-grey">
                <Link
                  href={projects.lienExterne}
                  target="_blank"
                  className="flex items-center justify-center group"
                >
                  lien vers le site
                  <ArrowRightIcon className="size-4 transition-transform duration-300 translate-x-1 group-hover:translate-x-2" />
                </Link>
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative w-full lg:w-[90%] h-[300px] md:h-[500px] lg:h-[707px] border border-[#222222] overflow-hidden rounded-sm ">
            <Image
              src={projects.image}
              quality={100}
              fill={true}
              alt="capture image website"
              className="absolute object-cover object-top"
            />
          </div>

          {/* DESCRIPTIFS */}
          <div className="w-full lg:w-[90%] flex flex-col lg:flex-row justify-between mt-20 lg:mt-32">
            <div className="text-center lg:text-left lg:max-w-[350px] space-y-4 mb-5 lg:mb-0">
              <p className="uppercase  text-grey">client</p>
              <p className="text-4xl font-light leading-tight">
                {projects.service}
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-4">
              <div className=" ">
                <div className="bg-[#0d0d0d] border border-[#222222] p-10 space-y-2 rounded-sm">
                  <p className="text-2xl ">Challenge</p>
                  <p className="text-grey leading-7 font-light ">
                    {projects.Challenge}
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="bg-[#0d0d0d] border border-[#222222] p-10 space-y-2 rounded-sm">
                  <p className="text-2xl ">Objectifs</p>
                  <p className="text-grey leading-7 font-light ">
                    {projects.Objectif}
                  </p>
                </div>
              </div>
              <div className="">
                <div className="bg-[#0d0d0d] border border-[#222222] p-10 space-y-2 rounded-sm">
                  <p className="text-2xl ">Resultat</p>
                  <p className="text-grey leading-7 font-light">
                    {projects.Resultat}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
