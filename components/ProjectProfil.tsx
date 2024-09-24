import { ArrowUpRightIcon, PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProfilProps {
  link: string;
  title: string;
  service: string;
  url: string;
  alt: string;
}

export default function ProjectProfil({
  link,
  title,
  service,
  url,
  alt,
}: ProfilProps) {
  return (
    <div className="relative h-[300px] lg:h-[513px] rounded border border-[#222222] overflow-hidden group">
      {/* Hover */}
      <Link href={link} className="group w-full h-full ">
        <PlusCircleIcon className="z-[51] opacity-0 group-hover:opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 size-10 text-white transition-opacity duration-300" />
        <span className="z-50 bg-black absolute top-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-30 "></span>
      </Link>
      <div className="absolute lg:w-[90%] bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-between">
        <p className=" text-xl lg:text-xl flex md:flex items-center text-nowrap gap-3 md:gap-0">
          {title}
          <ArrowUpRightIcon className="size-5 lg:hidden" />
        </p>{" "}
        <p className="hidden lg:block text-sm text-grey">{service}</p>
      </div>
      <div className=" z-40 absolute w-[95%] bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-7 border  backdrop-blur-sm bg-black/40 border-[#222222] overflow-hidden rounded"></div>
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={url}
          fill={true}
          sizes="300px"
          alt={`image ${alt}`}
          className="absolute object-cover duration-300 md:group-hover:scale-110"
        />
      </div>
    </div>
  );
}
