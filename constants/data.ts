import { AboutItem, NavLink, Service, SocialLink } from "@/types/types";
import { FacebookIcon, LinkedinIcon, Twitter } from "lucide-react";

export const services: Service[] = [
  {
    id: 1,
    title: "ServiceOne",
    shortDescription: "Professional personal protection for individuals.",
    slug: "service-one",
  },
  {
    id: 2,
    title: "ServiceTwo",
    shortDescription: "Specialized security services for VIPs and executives.",
    slug: "service-two",
  },
  {
    id: 3,
    title: "ServiceThree",
    shortDescription: "Close-range security tailored to high-risk situations.",
    slug: "service-three",
  },
  {
    id: 4,
    title: "ServiceFour",
    shortDescription:
      "Highly trained armed guards for critical security needs.",
    slug: "service-four",
  },
  {
    id: 5,
    title: "ServiceFive",
    shortDescription: "Safe and secure transportation with vehicle support.",
    slug: "service-five",
  },
  {
    id: 6,
    title: "ServiceSix",
    shortDescription: "Security support for airport transfers and facilities.",
    slug: "service-six",
  },
  {
    id: 7,
    title: "ServiceSeven",
    shortDescription: "Comprehensive security for travelers and tourists.",
    slug: "service-seven",
  },
  {
    id: 8,
    title: "ServiceEight",
    shortDescription:
      "Insightful intelligence and security consulting services.",
    slug: "service-eight",
  },
];

export const navLinks: NavLink[] = [
  { id: 1, path: "/", text: "Home" },
  { id: 2, path: "/about-us", text: "About Us", subMenu: true },
  { id: 3, path: "/service", text: "Services", subMenu: true },
  { id: 6, path: "/clients", text: "Clients" },
  { id: 4, path: "/blogs", text: "Blog" },
  { id: 5, path: "/contact-us", text: "Contact Us" },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    href: "https://www.facebook.com/profile.php?id=61560270515036",
    icon: FacebookIcon,
  },
  { id: 2, href: "https://twitter.com", icon: Twitter },
  { id: 3, href: "https://linkedin.com", icon: LinkedinIcon },
];

export const aboutItems: AboutItem[] = [
  { id: 1, title: "About Allround", href: "/about-allround" },
  { id: 2, title: "Mission & Vision", href: "/mission-vision" },
  { id: 3, title: "Our Team", href: "/our-team" },
];
