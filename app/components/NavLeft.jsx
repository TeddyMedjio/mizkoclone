import Image from "next/image";
import Link from "next/link";

const NavLeft = () => {
  return (
    <div className="sticky py-2 top-0 h-screen w-[67px] border-r border-[#222222] z-[1]">
      <div className="h-full w-full flex flex-col items-center justify-between  ">
        <div className=" grid gap-2">
          <Link
            href="/"
            className="p-[11px] rounded border border-[#222222] bg-Lightgrey"
          >
            <Image src="/logo.svg" height={24} width={24} alt="logo" />
          </Link>
          <Link
            href="/"
            className="px-[11px] py-[13px] rounded border border-[#222222] hover:bg-Lightgrey transition-all duration-300"
          >
            <Image src="/logocolor.svg" height={24} width={24} alt="logo" />
          </Link>
        </div>
        <p className="rotation text-xs whitespace-nowrap tracking-[4px] text-grey">
          LETS GO — {new Date().getFullYear()} <span></span>
        </p>

        <div className="grid gap-2">
          <Link
            href="/"
            className="p-3 rounded border border-[#222222] hover:bg-Lightgrey"
          >
            <Image src="/instagram.svg" height={24} width={24} alt="logo" />
          </Link>
          <Link
            href="/"
            className="p-3 rounded border border-[#222222] hover:bg-Lightgrey"
          >
            <Image src="/youtube.svg" height={24} width={24} alt="logo" />
          </Link>
          <Link
            href="/"
            className="p-3 rounded border border-[#222222] hover:bg-Lightgrey"
          >
            <Image src="/linkeding.svg" height={24} width={24} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavLeft;
