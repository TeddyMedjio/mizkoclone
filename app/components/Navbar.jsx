"use client";

import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className=" sticky top-0 w-full border-b border-[#222222] bg-black z-50">
      <div className="px-5 py-[11px] flex items-center justify-between ">
        <Link href="/" className="flex items-start">
          <p className=" text-[21px] font-bold">Mizko</p>
          <span className=" font-semibold ml-1 text-[9px] py-[1px] px-[4px] rounded border border-[#222222] bg-Lightgrey">
            v.14
          </span>
        </Link>
        <ul className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="text-sm text-grey cursor-pointer transition-all duration-300 hover:text-white"
            >
              <Link
                href={link.href}
                key={link.key}
                className={`link ${
                  pathname === `${link.href}` ? "font-medium text-white " : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" space-x-3 flex items-center">
          <div className="border border-[#222222] py-[10px] px-4 rounded-lg flex space-x-2 hover:bg-Lightgrey">
            <Link href="/" className=" font-medium text-sm">
              Newsletter
            </Link>
            <Image src="/link.svg" height={16} width={16} alt="icon" />
          </div>
          <Link
            href="/"
            className="text-sm font-medium py-[10px] px-4 bg-white text-black rounded-lg"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
