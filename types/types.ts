import { LucideIcon } from "lucide-react";

export interface NavLink {
  id: number;
  path: string;
  text: string;
  subMenu?: boolean;
}

export interface CustomLinkProps {
  path: string;
  children: React.ReactNode;
}

export interface Service {
  id: number;
  title: string;
  shortDescription?: string;
  slug: string;
  imgUrl?: StaticImageData | string;
}

export interface SocialLink {
  id: number;
  href: string;
  icon: LucideIcon;
}
