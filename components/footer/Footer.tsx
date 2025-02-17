import { Copyright } from "lucide-react";
import Link from "next/link";
import FooterContact from "./FooterContact";
import MegaFooter from "./MegaFooter";

export default function Footer() {
  return (
    <footer className="py-1 md:py-3 bg-sky-950 dark:bg-accent bg-no-repeat bg-center text-gray-100 dark:text-gray-200">
      <FooterContact />
      <MegaFooter />
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 justify-items-center md:py-8 py-4">
        <div className="flex gap-2 text-muted md:text-base text-[13px] dark:text-gray-300">
          <Copyright size={18} />
          2024 Next.js, Tailwind, TypeScript & ShadCN Template. All Rights
          Reserved
        </div>
        <div className="flex gap-2 text-muted md:text-base text-[13px] dark:text-gray-300 md:mt-0 mt-2">
          Design and Develop By{" "}
          <Link
            href="https://mahabub.me"
            className="hover:text-gray-300 dark:hover:text-gray-100"
          >
            Mahabub Hossain
          </Link>
        </div>
      </div>
    </footer>
  );
}
