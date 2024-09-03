import Image from "next/image";
import Link from "next/link";

const NavLeft = () => {
  return (
    <div className=" hidden lg:block sticky py-2 top-0 h-screen w-[67px] border-r border-[#222222] z-[1]">
      <div className="h-full w-full flex flex-col items-center justify-between  ">
        <ul className=" grid gap-2">
          <li className="p-[11px] rounded border border-[#222222] bg-Lightgrey">
            <Link href="/">
              <Image src="/logo.svg" height={24} width={24} alt="logo" />
            </Link>
          </li>
          <li className="px-[11px] py-[13px] rounded border border-[#222222] hover:bg-Lightgrey transition-all duration-300">
            <Link
              href="https://scarfacedigitalagency.vercel.app/"
              target="blank"
            >
              <Image src="/logocolor.svg" height={24} width={24} alt="logo" />
            </Link>
          </li>
        </ul>
        <p className="rotation text-xs whitespace-nowrap tracking-[4px] text-grey">
          LETS GO — {new Date().getFullYear()}
        </p>

        <ul className="grid gap-2">
          <li className="p-3 rounded border border-[#222222] hover:bg-Lightgrey">
            <Link href="https://www.instagram.com/nganme_jean/" target="blank">
              <Image src="/instagram.svg" height={24} width={24} alt="logo" />
            </Link>
          </li>
          <li className="p-3 rounded border border-[#222222] hover:bg-Lightgrey">
            <Link href="https://www.behance.net/njean" target="blank">
              <Image src="/behance.svg" height={24} width={24} alt="logo" />
            </Link>
          </li>
          <li className="p-3 rounded border border-[#222222] hover:bg-Lightgrey">
            <Link
              href="https://www.linkedin.com/in/jean-claude-nganmedjio-603995a1/"
              target="blank"
            >
              <Image src="/linkedin.svg" height={24} width={24} alt="logo" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavLeft;
