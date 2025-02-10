import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  MapPin,
  PhoneIcon,
  Mail,
} from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 px-4">
      <MaxWidthWrapper>
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Knolls Estates</h2>

            <div className="flex items-center gap-2 mt-2">
              <MapPin />
              <p>610 Dovetail Ln, Sutherlin, OR 97479</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Mail />
              <p>PO Box 1498, Sutherlin OR 97479</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <PhoneIcon />
              <p>(541) 459-3595</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0">
            <Link href="/about" className=" hover:text-white transition">
              About
            </Link>
            <Link href="/services" className=" hover:text-white transition">
              Services
            </Link>
            <Link href="/contact" className=" hover:text-white transition">
              Contact
            </Link>
            <Link href="/blog" className=" hover:text-white transition">
              Blog
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="0 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className=" hover:text-white transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-6 pt-4 text-center text-sm">
          Website Designed by Tri Peak Design © {new Date().getFullYear()} Get
          a Website and List Your Business
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
