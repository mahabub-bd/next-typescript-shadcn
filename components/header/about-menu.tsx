import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { aboutItems } from "@/constants/data";
import { AboutItem } from "@/types/types";
import Link from "next/link";
import React from "react";

interface ListItemProps {
  className?: string;
  title: string;
  href: string;
  onClick?: () => void;
}

interface AboutMenuProps {
  closeDropdown: () => void;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, href, onClick, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          passHref
          ref={ref}
          href={href}
          className={`block select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:ring focus:ring-offset-2 focus:ring-accent ${className}`}
          onClick={onClick}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

const AboutMenu = ({ closeDropdown }: AboutMenuProps) => {
  return (
    <ul className="grid w-full md:w-[200px] gap-2 p-3">
      {aboutItems.length > 0 ? (
        aboutItems.map(({ id, title, href }: AboutItem) => (
          <ListItem
            key={id}
            title={title}
            href={href}
            onClick={closeDropdown}
          />
        ))
      ) : (
        <li className="text-gray-500 p-3">No items available</li>
      )}
    </ul>
  );
};

export default AboutMenu;
