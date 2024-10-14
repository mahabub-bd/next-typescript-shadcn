"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, services } from "@/constants/data";
import { NavLink } from "@/types/types";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/public";

import { ChevronDownIcon, MenuIcon } from "lucide-react";

export default function MobileNavigation() {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (id: number) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden  ">
          <MenuIcon className="h-6 w-6 text-primary shadow-xl" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <Image src={Logo} alt="logo" width={80} />
        <div className="flex flex-col items-start gap-4 p-6">
          {navLinks.map((link: NavLink) => (
            <div key={link.id} className="w-full">
              {link.subMenu ? (
                <>
                  <button
                    className="text-lg font-medium hover:underline w-full text-left flex items-center justify-between"
                    onClick={() => toggleSubMenu(link.id)}
                  >
                    {link.text}

                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: openSubMenu === link.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 ml-2" />
                    </motion.div>
                  </button>
                  {openSubMenu === link.id && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/service/${service.slug}`}
                            className="text-md font-normal hover:underline"
                            prefetch={false}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.path}
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  {link.text}
                </Link>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
