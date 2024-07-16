import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" overflow-hidden ">
      <div className="px-5 py-10 border-r border-[#222222] border-t 2xl:w-[100%] 2xl:mx-auto flex flex-col md:flex-row items-start md:justify-around">
        <div className=" max-w-[465px] lg:max-w-96 mb-10 md:mb-0">
          <Link href="/" className="flex items-start">
            <p className=" text-[21px] font-bold">N. Jean</p>
            <span className=" font-semibold ml-1 text-[9px] py-[1px] px-[4px] rounded border border-[#222222] bg-Lightgrey">
              claude
            </span>
          </Link>
          <p className="text-sm text-grey my-5">
            Je suis UX/UI designer & Frontend dev et je suis accessible partout
            dans le monde pour collaborer avec des personnes qui attachent de
            l&apos;importance à l&apos;esthétique.
          </p>
          <p className="text-sm text-grey">
            © 2024 - 2025 N. Jean, All rights reserved.
          </p>
        </div>

        {/* Logo */}
        <Image
          src="/logo.svg"
          className="hidden lg:block"
          height={94}
          width={94}
          alt="logo"
        />

        <div className=" flex space-x-10">
          <div>
            <p className="text-white text-base font-semibold mb-5">
              Navigation
            </p>
            <ul className="flex flex-col text-grey space-y-2 ">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-all duration-300"
                >
                  Acceuil
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-all duration-300"
                >
                  A propos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://scarfacedigitalagency.vercel.app/work"
                  className="hover:text-white transition-all duration-300"
                >
                  Projets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white text-base font-semibold mb-5">
              Social Media
            </p>
            <ul className="flex flex-col text-grey space-y-2 ">
              <li>
                <Link
                  href="https://www.instagram.com/nganme_jean/"
                  target="blank"
                  className="hover:text-white transition-all duration-300"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.behance.net/njean"
                  target="blank"
                  className="hover:text-white transition-all duration-300"
                >
                  Behance
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/jean-claude-nganmedjio-603995a1/"
                  target="blank"
                  className="hover:text-white transition-all duration-300"
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
