import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="px-0 md:px-5">
      <div className="pb-10 border-x border-[#222222] 2xl:w-[70%] 2xl:mx-auto">
        <div className="relative h-[300px] lg:h-[520px]">
          <Image
            quality={100}
            fill={true}
            src="/background.webp"
            alt="image of office"
            className=" object-cover absolute"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-5 lg:px-0">
          <div className=" flex flex-col max-w-[934px] my-10 space-y-6">
            <h2 className="text-[34px] md:text-[82px] font-normal">Hey!</h2>
            <p className=" text-[16px] md:text-[19px] text-grey">
              Je m&apos;appelle{" "}
              <span className="text-white">Nganmedjio Jean Claude</span> et je
              suis passionné par le Web et le graphisme, j&apos;aime collaborer
              avec des personnes qui attachent de l&apos;importance à
              l&apos;esthétique, qui comprennent{" "}
              <span className="text-white font-semibold">
                le pouvoir de la simplicité et qui savent qu&apos;une bonne
                expérience client est essentielle.
              </span>
            </p>

            <p className="text-[16px] md:text-[19px] text-grey">
              J&apos;aime passer mon temps libre à écouter des podcasts sur le
              développement personnel, jouer au football, prendre des photos,
              regarder les mauvaises interfaces pour les améliorer, une activité
              passionnante qui me permet de développer ma créativité.
            </p>
            <p className="text-[16px] md:text-[19px] text-grey">
              En gardant votre identité au cœur de ma démarche, mon objectif est
              de m&apos;assurer de trouver la solution la plus simple pour
              répondre à vos besoins. Les clients font appels à mes services
              pour mon efficacité, ma polyvalence et la facilité dans nos
              discussions et aussi parce que je fais des incroyables cookies, le
              secret est d&apos;utiliser beaucoup de beurre demi-sel.
            </p>
            <p className="text-[16px] md:text-[19px] text-grey">
              <span className="text-white font-semibold">
                J&apos;aime le chiffre 3,
              </span>{" "}
              Je pense que cela a quelque chose à voir avec le fait que je suis
              né en le 3ème mois.
            </p>
            <p className="text-[16px] md:text-[19px] text-grey">
              PS. N&apos;oubliez pas que mon courrier E-mail est généralement
              assez rempli de demandes, donc parfois je peux prendre un peu plus
              de temps pour vous repondre.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
