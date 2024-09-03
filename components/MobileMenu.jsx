import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "./Alert";

const MobileMenu = () => {
  return (
    <div className="lg:hidden">
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
                <ul className="flex flex-col mt-40 space-y-5  w-full">
                  <SheetClose asChild>
                    <Link href="/">Acceuil</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/about">A Propos</Link>
                  </SheetClose>
                  {/* <SheetClose asChild>
                    <Link href="/testimonials">Ténoignages</Link>
                  </SheetClose> */}

                  <Link href="/projets">Projets</Link>
                </ul>
              </SheetFooter>
              <div className=" mt-10 space-y-3 flex flex-col items-center justify-center">
                <Alert variant="secondary" />
                <Link
                  href="mailto:hello.medjio.me"
                  className="text-sm font-medium py-[10px] px-4 w-full text-center bg-white text-black rounded-lg"
                >
                  Me contacter
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
