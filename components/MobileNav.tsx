"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "Resume",
    path: "/resume",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-3xl text-primary-orange" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className="text-2xl font-bold">
                Jesus<span className="text-primary-orange">.</span>It
                <span className="text-primary-orange">.</span>Dev
              </h1>
            </Link>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname &&
                    "text-primary-orange border-b-2 border-primary-orange text-xl"
                  } text-xl capitalize hover:text-primary-orange font-medium transition-all duration-300 ease-in-out`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
