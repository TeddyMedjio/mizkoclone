import {
  AlertDialog,
  AlertDialogAction,
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
      <AlertDialogTrigger>
        <div className="">
          <Button variant="secondary">My Skills</Button>
        </div>
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
              <Image
                src="/figma.svg"
                height={66}
                width={92}
                alt="logo figma"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/nextjs.svg"
                height={66}
                width={92}
                alt="logo nextjs"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/react.svg"
                height={66}
                width={92}
                alt="logo react"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/javascript.svg"
                height={66}
                width={92}
                alt="logo xd"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/tailwind.svg"
                height={66}
                width={92}
                alt="logo tailwind"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/html.svg"
                height={66}
                width={92}
                alt="logo html"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/css.svg"
                height={66}
                width={92}
                alt="logo css"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/vscode.svg"
                height={66}
                width={92}
                alt="logo vscode"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/git.svg"
                height={66}
                width={92}
                alt="logo git"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/photoshop.svg"
                height={66}
                width={92}
                alt="logo photoshop"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/illustrator.svg"
                height={66}
                width={92}
                alt="logo illustrator"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/xd.svg"
                height={66}
                width={92}
                alt="logo xd"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>

          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
