"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks, services } from "@/constants/data";
import { NavLink, Service } from "@/types/types";

import Link from "next/link";
import React from "react";

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={`block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

interface ListItemProps {
  className?: string;
  title: string;
  href: string;
}

const ServiceSubMenu = () => (
  <ul className="grid w-[200px] gap-1 p-2">
    {services.map((service: Service) => (
      <ListItem
        key={service.id}
        title={service.title}
        href={`/service/${service.slug}`}
      />
    ))}
  </ul>
);

export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((navItem: NavLink) => (
          <NavigationMenuItem key={navItem.id}>
            {navItem.subMenu ? (
              <>
                <NavigationMenuTrigger>{navItem.text}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ServiceSubMenu />
                </NavigationMenuContent>
              </>
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
