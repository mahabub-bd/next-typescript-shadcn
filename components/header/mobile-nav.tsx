"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/public";
import { aboutItems, navLinks, services } from "@/constants/data";
import { AboutItem, NavLink, Service } from "@/types/types";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { ModeToggle } from "../theme/theme-toggle";

export default function MobileNavigation() {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleSubMenu = (id: number) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setOpenSubMenu(null); // Close any open submenu
  };

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="lg:hidden">
          <MenuIcon className="h-5 w-5  bg-transparent" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <div className="flex justify-between items-center">
          <Image src={Logo} alt="logo" width={60} />
        </div>

        <div className="flex flex-col items-start gap-4 p-6">
          {navLinks?.map((link: NavLink) => (
            <div key={link.id} className="w-full">
              {link?.subMenu ? (
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
                      {link.text === "Services" &&
                        services?.map((service: Service) => (
                          <li key={service.id}>
                            <Link
                              href={`/service/${service.slug}`}
                              className="text-md font-normal hover:underline"
                              prefetch={false}
                              onClick={handleCloseDrawer}
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      {link.text === "About Us" && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {aboutItems?.map((aboutLink: AboutItem) => (
                            <li key={aboutLink.id}>
                              <Link
                                href={aboutLink.href}
                                className="text-md font-normal hover:underline"
                                prefetch={false}
                                onClick={handleCloseDrawer}
                              >
                                {aboutLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.path}
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                  onClick={handleCloseDrawer}
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
