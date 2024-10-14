import { Copyright } from "lucide-react";
import Link from "next/link";
import FooterContact from "./FooterContact";
import MegaFooter from "./MegaFooter";

export default function Footer() {
  return (
    <footer className="py-1 md:py-3   bg-sky-950 bg-no-repeat bg-center  text-gray-100">
      <FooterContact />
      <MegaFooter />
      <div className=" container mx-auto  grid md:grid-cols-2 grid-cols-1  justify-items-center md:py-8 py-4">
        <div className="flex gap-2 text-muted md:text-base text-[13px] ">
          <Copyright size={18}></Copyright>
          2024 Next.js, Tailwind, TypeScript & ShadCN Template. All Rights
          Reserved
        </div>
        <div className="flex gap-2 text-muted md:text-base text-[13px] text-black md:mt-0 mt-2 ">
          Design and Develop By{" "}
          <Link href="https://mahabub.me">Mahabub Hossain</Link>
        </div>
      </div>
    </footer>
  );
}
