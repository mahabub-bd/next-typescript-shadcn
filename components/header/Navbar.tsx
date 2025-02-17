"use client";
import { Logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { MainNavigation } from "./main-nav";
import MobileNavigation from "./mobile-nav";

function Navbar() {
  return (
    <div className="bg-white dark:bg-accent sticky top-0 z-40 shadow-md dark:shadow-gray-800 md:px-0 px-4">
      <nav className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between w-full py-1">
          <Link href="/" className="py-2">
            <Image src={Logo} alt="logo" height={60} />
          </Link>

          <div className="lg:flex hidden">
            <MainNavigation />
          </div>
          <div className="lg:hidden flex">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
