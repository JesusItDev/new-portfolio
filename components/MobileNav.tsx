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
    name: "resume",
    path: "/resume",
  },
];

const MobileNav = () => {
  return <div>MobileNav</div>;
};

export default MobileNav;
