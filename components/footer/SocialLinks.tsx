import { socialLinks } from "@/constants/data"; // Import social links array
import { SocialLink } from "@/types/types";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="mt-5">
      <ul className="flex space-x-4">
        {socialLinks.map(({ id, href, icon: Icon }: SocialLink) => (
          <li
            key={id}
            className="bg-sky-800 shadow-2xl w-10 h-10 flex justify-center items-center rounded-full hover:translate-y-1"
          >
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer  p-2 rounded-full"
            >
              <Icon color="#fff" size={24} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
