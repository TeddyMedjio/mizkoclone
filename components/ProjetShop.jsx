import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjetShop() {
  return (
    <div className="px-0 md:px-5">
      <div className="py-10 border-x border-[#222222] 2xl:w-[70%] 2xl:mx-auto">
        <div className="flex flex-col items-center justify-center px-5 lg:px-0">
          {/* TITRE */}
          <div className="text-center max-w-2xl">
            <h2 className="text-[34px] md:text-[82px] font-normal">
              Veronique Shop
            </h2>
            <p className="text-lg text-grey">
              Webdesign moderne et visuellement attrayant qui reflète la marque
              du client.
            </p>
          </div>

          {/* INDICATIFS */}
          <div className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-4 my-10">
            <div className="text-center bg-[#0d0d0d] border border-[#222222] py-3 space-y-2 rounded-sm">
              <p className="uppercase text-sm text-[#525252]">Client</p>
              <p className="uppercase text-sm font-medium text-grey">
                Veronique Shop
              </p>
            </div>
            <div className="text-center bg-[#0d0d0d] border border-[#222222] py-3 space-y-2 rounded-sm">
              <p className="uppercase text-sm text-[#525252]">Durée</p>
              <p className="uppercase text-sm font-medium text-grey">
                3 Semaines
              </p>
            </div>
            <div className="text-center bg-[#0d0d0d] border border-[#222222] py-3 space-y-2 rounded-sm">
              <p className="uppercase text-sm text-[#525252]">Services</p>
              <p className="uppercase text-sm font-medium text-grey">
                UX/UI Design & Conception
              </p>
            </div>
            <div className="text-center bg-[#0d0d0d] border border-[#222222] py-3 space-y-2 rounded-sm">
              <p className="uppercase text-sm text-[#525252]">Lien</p>
              <p className="uppercase text-sm font-medium text-grey">
                <Link
                  href="https://www.behance.net/gallery/191858137/Ecommerce"
                  target="_blank"
                  className="flex items-center justify-center group"
                >
                  behance
                  <ArrowRightIcon className="size-4 transition-transform duration-300 translate-x-1 group-hover:translate-x-2" />
                </Link>
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative w-full lg:w-[90%] h-[300px] md:h-[500px] lg:h-[707px] border border-[#222222] overflow-hidden rounded-sm ">
            <Image
              src="/veronique.jpg"
              quality={100}
              fill={true}
              className="absolute object-cover object-top"
            />
          </div>

          {/* DESCRIPTIFS */}
          <div className="w-full lg:w-[90%] flex flex-col lg:flex-row justify-between mt-20 lg:mt-32">
            <div className="text-center lg:text-left lg:max-w-[350px] space-y-4 mb-5 lg:mb-0">
              <p className="uppercase  text-grey">client</p>
              <p className="text-4xl font-light leading-tight">
                Conception & Design
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-4">
              <div className=" ">
                <div className="bg-[#0d0d0d] border border-[#222222] p-10 space-y-2 rounded-sm">
                  <p className="text-2xl ">Challenge</p>
                  <p className="text-grey leading-7 font-light ">
                    Notre client avait du mal à attirer et à fidéliser ses
                    clients en raison d'un site Web obsolète et non réactif qui
                    ne correspondait pas à son identité de marque.
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="bg-[#0d0d0d] border border-[#222222] p-10 space-y-2 rounded-sm">
                  <p className="text-2xl ">Objectifs</p>
                  <p className="text-grey leading-7 font-light ">
                    Mon objectif était de créer un Webdesign moderne et
                    visuellement attrayant qui reflète la marque du client et
                    offre une expérience utilisateur fluide pour que le site Web
                    soit réactif, facile à naviguer et optimisé pour les moteurs
                    de recherche afin d'améliorer leur visibilité en ligne.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="bg-[#0d0d0d] border border-[#222222] p-10 space-y-2 rounded-sm">
                  <p className="text-2xl ">Resultat</p>
                  <p className="text-grey leading-7 font-light">
                    J'ai développé une conception de site Web personnalisée qui
                    était non seulement visuellement époustouflante, mais
                    également conviviale et optimisée pour les moteurs de
                    recherche. Le site Web du client présente désormais ses
                    produits et services de manière professionnelle et
                    attrayante, et a connu une augmentation significative du
                    trafic organique et de l'engagement des clients. Le client
                    est ravi du résultat final et a reçu des retours positifs de
                    ses clients.
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
