import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Alert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">My Skills</Button>
      </AlertDialogTrigger>
      <AlertDialogTrigger asChild>
        <Button className="hidden md:block" variant="outline">
          My Skills
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>A unique set of skills</AlertDialogTitle>

          <AlertDialogDescription>
            An end-to-end set of skills for the ambitious dev.
            <span className="grid grid-cols-4 grid-rows-2 gap-4 mt-10">
              <span className=" h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/figma.svg"
                  height={92}
                  width={92}
                  alt="logo figma"
                />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/nextjs.svg"
                  height={92}
                  width={92}
                  alt="logo nextjs"
                />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/react.svg"
                  height={92}
                  width={92}
                  alt="logo react"
                />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/javascript.svg"
                  height={92}
                  width={92}
                  alt="logo xd"
                />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/tailwind.svg"
                  height={92}
                  width={92}
                  alt="logo tailwind"
                />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image src="/html.svg" height={92} width={92} alt="logo html" />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image src="/css.svg" height={92} width={92} alt="logo css" />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/vscode.svg"
                  height={92}
                  width={92}
                  alt="logo vscode"
                />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image src="/git.svg" height={92} width={92} alt="logo git" />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/photoshop.svg"
                  height={92}
                  width={92}
                  alt="logo photoshop"
                />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/illustrator.svg"
                  height={92}
                  width={92}
                  alt="logo illustrator"
                />
              </span>
              <span className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image src="/xd.svg" height={92} width={92} alt="logo xd" />
              </span>
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
