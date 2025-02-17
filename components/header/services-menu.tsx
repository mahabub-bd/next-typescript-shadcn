import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { services } from "@/constants/data";

import Link from "next/link";
import React from "react";

interface ListItemProps {
  className?: string;
  title: string;
  href: string;
  onClick?: () => void;
}

interface ServiceMenuProps {
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
          className={`block select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground ${className}`}
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

const ServicesMenu = ({ closeDropdown }: ServiceMenuProps) => {
  return (
    <ul className="grid w-full md:w-[220px] gap-2 p-3">
      {services.length > 0 ? (
        services.map((service) => (
          <ListItem
            key={service.id}
            title={service.title}
            href={`/service/${service.slug}`}
            onClick={closeDropdown}
          />
        ))
      ) : (
        <li className="p-3 text-gray-500">No services available.</li>
      )}
    </ul>
  );
};

export default ServicesMenu;
