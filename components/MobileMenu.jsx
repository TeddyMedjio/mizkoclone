import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="border border-[#222222] py-2 px-4 rounded-lg">
            <Image src="/hamburger.svg" height={24} width={24} alt="menu" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <SheetFooter>
                <ul className="flex flex-col mt-40 space-y-5">
                  <SheetClose asChild>
                    <Link href="/">Home</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/about">About</Link>
                  </SheetClose>

                  <Link
                    href="https://scarfacedigitalagency.vercel.app/work"
                    target="blank"
                  >
                    Projets
                  </Link>

                  <Link
                    href="https://scarfacedigitalagency.vercel.app/"
                    target="blank"
                  >
                    Agency
                  </Link>
                </ul>
              </SheetFooter>
              <div className=" w-full mt-10 space-y-3 flex flex-col items-center justify-center">
                {/* <div className="border border-[#222222] py-[10px] px-4 w-full rounded-lg flex space-x-2 items-center justify-center hover:bg-Lightgrey">
                  <Link href="/" className=" font-medium text-sm">
                    Newsletter
                  </Link>
                  <Image src="/link.svg" height={16} width={16} alt="icon" />
                </div> */}
                <Link
                  href="mailto:hello.medjio.me"
                  className="text-sm font-medium py-[10px] px-4 w-full text-center bg-white text-black rounded-lg"
                >
                  Get in touch
                </Link>
              </div>
            </SheetTitle>
            {/* <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription> */}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
