import { Mail, Map, PhoneIcon } from "lucide-react";
import Link from "next/link";

const FooterContact = () => {
  return (
    <div className="py-10 border-b-[0.5px] border-b-[#ffffff20]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 grid-cols-1  gap-10  ">
          <div className="flex gap-10  items-center  ">
            <div className="rounded-[30px] w-16 h-16 flex justify-center items-center bg-sky-800">
              <Mail />
            </div>

            <div className="footer-contact-info">
              <h3 className="text-md font-bold mb-2">Email</h3>

              <Link href="mailto:info@greenpacbd.org" className="text-base">
                info@bmw.com
              </Link>
            </div>
          </div>
          <div className="flex gap-10  items-center">
            <div className="rounded-[30px] w-16 h-16 flex justify-center items-center bg-sky-800">
              <PhoneIcon size={32} />
            </div>

            <div className="footer-contact-info">
              <h3 className="text-md font-bold mb-2">Phone</h3>

              <Link href="tel:+8801711938753" className="text-base">
                Helpline: +88 01711 000000
              </Link>
            </div>
          </div>
          <div className="flex gap-10  items-center">
            <div className="rounded-[30px] w-16 h-16 flex justify-center items-center bg-sky-800">
              <Map size={32} />
            </div>

            <div className="footer-contact-info">
              <h3 className="text-md font-bold mb-2">Our Location</h3>

              <p className="text-base">House #18, Road #23, Sector #10</p>
              <p className="text-base mt-1">Uttara Model Town, Dhaka-1230</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
