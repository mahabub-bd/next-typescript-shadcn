import { navLinks } from "@/constants/data";
import { NavLink } from "@/types/types";
import Link from "next/link";

interface FooterLinksProps {
  disabled?: boolean;
}

const FooterLinks = ({ disabled = false }: FooterLinksProps) => {
  return (
    <div className="footer-links-container">
      <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
      <ul>
        {navLinks.map(({ id, text, path }: NavLink) => (
          <li key={id} className="mb-2">
            <Link
              href={disabled ? "#" : path}
              className={`md:text-base text-sm ${
                disabled ? "text-gray-400 cursor-not-allowed" : ""
              }`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
