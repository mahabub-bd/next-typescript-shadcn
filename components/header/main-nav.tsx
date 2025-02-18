import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/constants/data";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import ServicesMenu from "./services-menu";
import AboutMenu from "./about-menu";
import { ModeToggle } from "../theme/theme-toggle";

export function MainNavigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleOpenChange = (menuName: string | null) => {
    setOpenMenu(menuName);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((navItem) => (
          <NavigationMenuItem key={navItem.id}>
            {navItem.subMenu ? (
              <DropdownMenu
                open={openMenu === navItem.text}
                onOpenChange={(open) =>
                  handleOpenChange(open ? navItem.text : null)
                }
              >
                <DropdownMenuTrigger asChild>
                  <span
                    className={`px-4 py-2 font-medium flex items-center space-x-1 cursor-pointer`}
                  >
                    <span>{navItem.text}</span>
                    <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {navItem.text === "Services" ? (
                    <ServicesMenu
                      closeDropdown={() => handleOpenChange(null)}
                    />
                  ) : navItem.text === "About Us" ? (
                    <AboutMenu closeDropdown={() => handleOpenChange(null)} />
                  ) : null}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href={navItem.path} passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navItem.text}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
