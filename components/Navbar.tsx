"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-primary-orange border-b-2 border-primary-orange"
            } capitalize hover:text-primary-orange font-medium transition-all duration-300 ease-in-out`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
