import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="p-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Jesus<span className="text-primary-orange">.</span>It
            <span className="text-primary-orange">.</span>Dev
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button variant="custom">Contact me!</Button>
          </Link>
        </div>

        {/* Mobile NAV */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
