import { Logo } from "@/public";
import Image from "next/image";

import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import SocialLinks from "./SocialLinks";

const MegaFooter = () => {
  return (
    <div className="mega-footer  text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 md:gap-8 gap-4">
          <div className=" md:col-span-3 col-span-6">
            <div className="footer-about ">
              <Image src={Logo} alt="Logo" className="md:w-24 w-20" />
              <p className="mt-5 text-justify md:text-lg text-sm">
                Together for greener tomorrow
              </p>
            </div>
            <SocialLinks />
          </div>
          <div className=" md:col-span-3 col-span-6">
            <FooterLinks />
          </div>

          <div className=" md:col-span-6 col-span-12">
            <FooterServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaFooter;
