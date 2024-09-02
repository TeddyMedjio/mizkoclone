import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";
import Image from "next/image";

const logos = [
  {
    name: "Figma",
    icon: "/figma.svg",
  },
  {
    name: "Nextjs",
    icon: "/nextjs.svg",
  },
  {
    name: "Reactjs",
    icon: "/react.svg",
  },
  {
    name: "Javascript",
    icon: "/javascript.svg",
  },
  {
    name: "Tailwindcss",
    icon: "/tailwind.svg",
  },
  {
    name: "Html",
    icon: "/html.svg",
  },
  {
    name: "CSS",
    icon: "/css.svg",
  },
  {
    name: "Vscode",
    icon: "/vscode.svg",
  },
  {
    name: "Git",
    icon: "/git.svg",
  },
  {
    name: "Adobe Photoshop",
    icon: "/photoshop.svg",
  },
  {
    name: "Adobe Illustrator",
    icon: "/illustrator.svg",
  },
  {
    name: "Adobe Xd",
    icon: "/xd.svg",
  },
];

export function Alert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Mes compétences</Button>
      </AlertDialogTrigger>
      <AlertDialogTrigger asChild>
        <Button className="hidden md:block" variant="outline">
          Mes compétences
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Un ensemble unique de compétences</AlertDialogTitle>

          <AlertDialogDescription>
            Un ensemble de compétences de bout en bout pour les développeurs
            ambitieux.
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-10">
              {logos.map((item) => (
                <div
                  key={item.name}
                  className=" relative group h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg"
                >
                  <p className="z-50 text-sm text-center text-white font-semibold absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.name}
                  </p>
                  <div className="absolute w-full h-full top-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <Image
                    src={item.icon}
                    height={92}
                    width={92}
                    alt="logo figma"
                  />
                </div>
              ))}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Fermer</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
