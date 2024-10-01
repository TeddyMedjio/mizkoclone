import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effetct";

const paragraph =
  "Quand je suis entrain de travailler j'ecoute de la musique pour plus de concentration; Oui😊 j'aime la bonne musique camerounaise.";

const AboutMe = () => {
  return (
    <div className="px-0 md:px-5">
      <div
        // style={{ backgroundImage: "/background.webp" }}
        className="relative flex flex-col-reverse items-center justify-center gap-5 lg:flex-row lg:items-start lg:justify-between  lg:border-x border-[#222222] 2xl:w-[70%] h-screen 2xl:mx-auto overflow-scroll scrollbar-hide pb-44  "
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

        {/* playlists */}
        <div className="hidden md:block lg:sticky lg:top-10 lg:ml-5 p-5 border bg-[#0a0a0ae1] backdrop-blur-sm border-[#222222] w-full lg:w-[40%]">
          <h2 className="text-base font-bold text-center mb-3">Ma Playlist.</h2>
          <TextGenerateEffect words={paragraph} />
          {/* <p className="  text-sm text-center px-14 text-grey pt-2 py-4">
            Quand je suis entrain de travailler j&apos;ecoute de la musique pour
            plus de concentration; Oui😊 j&lsquo;aime la bonne{" "}
            <span className="text-white">musique camerounaise</span>.
          </p> */}
          <iframe
            className=" rounded-[12px] w-[100%] md:h-[352px] mt-5"
            src="https://open.spotify.com/embed/playlist/0NrauiChQBnhR3j8VsOSFO?utm_source=generator&theme=0"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <div className=" px-5 lg:px-0 bg-[#0a0a0ae1] border border-[#222222] max-w-[750px]  md:mt-10 mr-0 lg:mr-5 backdrop-blur-sm ">
            <div className=" flex flex-col max-w-[934px] my-10 space-y-6 md:px-10">
              <h2 className="text-[34px] md:text-[82px] font-normal">Hey!</h2>
              <p className=" text-[16px] md:text-[19px] text-grey">
                Je m&apos;appelle
                <span className="text-white"> Nganmedjio Jean Claude</span>, je
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
          {/* Experiences */}
          <div className=" flex flex-col items-center gap-5 lg:px-0 bg-[#0a0a0ae1] border border-[#222222] max-w-[750px] p-5 mr-0 lg:mr-5 backdrop-blur-sm mt-5 ">
            <h2 className="text-[16px] md:text-3xl font-medium text-center mt-8">
              Experiences
            </h2>
            <div className="px-10 w-full">
              <div className="flex items-center justify-between w-full">
                <p className=" text-base md:text-[19px]">
                  Konrad Technologies{" "}
                  <span className="text-grey text-sm md:block">
                    Graphic Designer
                  </span>
                </p>
                <p className="text-grey text-sm">Mar.2016 - Oct.2018</p>
              </div>
              <div className="bg-[#222222] w-full h-[1px] my-5" />
              <div className="flex items-center justify-between w-full">
                <p className=" text-base md:text-[19px]">
                  InterSystems{" "}
                  <span className="text-grey text-sm md:block">
                    Visual Designer
                  </span>
                </p>
                <p className="text-grey text-sm">Jui.2018 - Sep.2019</p>
              </div>
              <div className="bg-[#222222] w-full h-[1px] my-5" />
              <div className="flex items-center justify-between w-full">
                <p className=" text-base md:text-[19px]">
                  Wise Computers
                  <span className="text-grey text-sm md:block">
                    Graphic & UX/UI Designer
                  </span>
                </p>
                <p className="text-grey text-sm">Jui.2019 - Nov.2022</p>
              </div>
              <div className="bg-[#222222] w-full h-[1px] my-5" />
              <div className="flex items-center justify-between w-full">
                <p className=" text-base md:text-[19px]">
                  Freelancer
                  <span className="text-grey text-sm md:block">
                    Disponible pour contrats
                  </span>
                </p>
                <p className="text-grey text-sm">Nov.2022 - Aujourd&apos;hui</p>
              </div>
            </div>
          </div>
          <ul className="hidden md:flex my-5  items-center justify-between flex-wrap gap-4 max-w-[750px]">
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
