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
        <div className="">
          <Button variant="secondary">My Skills</Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogTrigger asChild>
        <div className="hidden md:block">
          <Button variant="outline">My Skills</Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>A unique set of skills</AlertDialogTitle>

          <AlertDialogDescription>
            An end-to-end set of skills for the ambitious dev.
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-10">
              <div className=" h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/figma.svg"
                  height={92}
                  width={92}
                  alt="logo figma"
                />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/nextjs.svg"
                  height={92}
                  width={92}
                  alt="logo nextjs"
                />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/react.svg"
                  height={92}
                  width={92}
                  alt="logo react"
                />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/javascript.svg"
                  height={92}
                  width={92}
                  alt="logo xd"
                />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/tailwind.svg"
                  height={92}
                  width={92}
                  alt="logo tailwind"
                />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image src="/html.svg" height={92} width={92} alt="logo html" />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image src="/css.svg" height={92} width={92} alt="logo css" />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/vscode.svg"
                  height={92}
                  width={92}
                  alt="logo vscode"
                />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image src="/git.svg" height={92} width={92} alt="logo git" />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/photoshop.svg"
                  height={92}
                  width={92}
                  alt="logo photoshop"
                />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image
                  src="/illustrator.svg"
                  height={92}
                  width={92}
                  alt="logo illustrator"
                />
              </div>
              <div className="h-[70px] md:w-[92px] md:h-[92px] bg-[#f1f1f1] flex items-center justify-center rounded-lg">
                <Image src="/xd.svg" height={92} width={92} alt="logo xd" />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
