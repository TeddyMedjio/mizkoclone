import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <div className="px-0 md:px-5">
      <div
        // style={{ backgroundImage: "/background.webp" }}
        className="relative flex items-center justify-center lg:items-start lg:justify-between  border-x border-[#222222] 2xl:w-[70%] h-screen 2xl:mx-auto overflow-scroll scrollbar-hide  "
      >
        <div className="fixed -z-50 h-full w-full">
          <Image
            quality={100}
            fill={true}
            src="/background.webp"
            alt="image of office"
            className="absolute object-cover opacity-50 "
          />
        </div>

        <div className="hidden lg:block h-20 w-20"></div>
        <div>
          <div className=" px-5 lg:px-0 bg-[#0a0a0ae1] border border-[#222222] max-w-[750px] mt-10 mr-0 lg:mr-5 backdrop-blur-sm ">
            <div className=" flex flex-col max-w-[934px] my-10 space-y-6 md:px-10">
              <h2 className="text-[34px] md:text-[82px] font-normal">Hey!</h2>
              <p className=" text-[16px] md:text-[19px] text-grey">
                Je m&apos;appelle{" "}
                <span className="text-white">Nganmedjio Jean Claude</span>, je
                suis un webdesigner et frontend dev, j&apos;aime collaborer avec
                des personnes qui attachent de l&apos;importance à
                l&apos;esthétique, qui comprennent{" "}
                <span className="text-white font-semibold">
                  le pouvoir de la simplicité et qui savent qu&apos;une bonne
                  expérience client est essentielle.
                </span>
              </p>

              <p className="text-[16px] md:text-[19px] text-grey">
                J&apos;aime passer mon temps libre à écouter des podcasts sur le
                développement personnel, jouer au football, prendre des photos,
                regarder les mauvaises interfaces pour les améliorer, une
                activité passionnante qui me permet de développer ma créativité.
              </p>
              <p className="text-[16px] md:text-[19px] text-grey">
                En gardant votre identité au cœur de ma démarche, mon objectif
                est de m&apos;assurer de trouver la solution la plus simple pour
                répondre à vos besoins. Les clients font appels à mes services
                pour mon efficacité, ma polyvalence et la facilité dans nos
                discussions et aussi parce que je fais des incroyables cookies,
                le secret est d&apos;utiliser beaucoup de beurre demi-sel.
              </p>
              <p className="text-[16px] md:text-[19px] text-grey">
                <span className="text-white font-semibold">
                  J&apos;aime le chiffre 3,
                </span>{" "}
                Je pense que cela a quelque chose à voir avec le fait que je
                suis né en le 3ème mois.
              </p>
            </div>
          </div>
          <ul className="hidden md:flex my-10  items-center justify-between flex-wrap gap-4 max-w-[750px]">
            <li className="flex items-center justify-between p-5 border bg-[#0a0a0ae1] backdrop-blur-sm border-[#222222] w-[30%]">
              <Link
                href="https://www.instagram.com/nganme_jean/"
                target="blank"
                className="flex items-center gap-2 uppercase text-grey"
              >
                <Image src="/instagram.svg" height={20} width={20} alt="logo" />
                instagram
              </Link>
              <ArrowRight size={20} className="text-grey" />
            </li>
            <li className="flex items-center justify-between p-5 border bg-[#0a0a0ae1] backdrop-blur-sm border-[#222222] w-[30%]">
              <Link
                href="https://www.instagram.com/nganme_jean/"
                target="blank"
                className="flex items-center gap-2 uppercase text-grey"
              >
                <Image src="/behance.svg" height={20} width={20} alt="logo" />
                behance
              </Link>
              <ArrowRight size={20} className="text-grey" />
            </li>
            <li className="flex items-center justify-between p-5 border bg-[#0a0a0ae1] backdrop-blur-sm border-[#222222] w-[30%]">
              <Link
                href="https://www.instagram.com/nganme_jean/"
                target="blank"
                className="flex items-center gap-2 uppercase text-grey"
              >
                <Image src="/linkedin.svg" height={20} width={20} alt="logo" />
                linkedin
              </Link>
              <ArrowRight size={20} className="text-grey" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
