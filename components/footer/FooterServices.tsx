import Link from "next/link";

import { services } from "@/constants/data";
import { Service } from "@/types/types";

const FooterServices = () => {
  return (
    <div className="">
      <div className="footer-links">
        <h2 className="text-xl font-semibold mb-4">Services</h2>
        <ul className="grid grid-cols-2 ">
          {services.map(({ id, slug, title }: Service) => (
            <li key={id} className="mb-2">
              <Link className="md:text-base text-sm" href={slug}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterServices;
