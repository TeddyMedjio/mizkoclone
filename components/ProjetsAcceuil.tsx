import { ArrowUpRightIcon, PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { work } from "../constants";

export default function ProjetsAcceuil() {
  return (
    <div className="px-0 md:px-5">
      <div className="py-10">
        <div className="flex flex-col items-center justify-center px-5 lg:px-0">
          <div className="text-center max-w-2xl">
            <h2 className="text-[34px] md:text-[42px] font-normal">
              Mes Projets
            </h2>
            <p className="text-base text-grey">
              Mes derniers projets de conception de sites Web et découvrez
              comment je pourrai vous aider à donner vie à vos idées. suivez le
              lien ci-dessous pour voir plus.
            </p>
            <Link
              href="/projets"
              className="inline-block mt-5 text-sm rounded-[4px] uppercase font-medium border border-[#222222] px-8 py-3 text-grey bg-[#111111] hover:bg-white/20 duration-200"
            >
              Voir plus
            </Link>
          </div>
          <div className=" w-[95%] grid grid-cols-1 md:grid-cols-2 mt-20 gap-5 lg:gap-10">
            {work.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="relative h-[300px] lg:h-[513px] rounded border border-[#222222] overflow-hidden group"
              >
                {/* Hover */}
                <Link
                  href={`projets/${item.slug}`}
                  className="group w-full h-full "
                >
                  <PlusCircleIcon className="z-[51] opacity-0 group-hover:opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 size-10 text-white transition-opacity duration-300" />
                  <span className="z-50 bg-black absolute top-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-30 "></span>
                </Link>
                <div className="absolute lg:w-[90%] bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-between">
                  <p className=" text-xl lg:text-xl flex md:flex items-center text-nowrap gap-3 md:gap-0">
                    {item.title}
                    <ArrowUpRightIcon className="size-5 lg:hidden" />
                  </p>{" "}
                  <p className="hidden lg:block text-sm text-grey">
                    {item.service}
                  </p>
                </div>
                <div className=" z-40 absolute w-[95%] bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-7 border  backdrop-blur-sm bg-black/40 border-[#222222] overflow-hidden rounded"></div>
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    fill={true}
                    sizes="300px"
                    alt={`image ${item.slug}`}
                    className="absolute object-cover duration-300 md:group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
