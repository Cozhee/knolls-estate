import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  FacebookIcon,
  PhoneIcon,
  MapPin,
  Mail,
  InstagramIcon,
} from "lucide-react";

export default function Banner() {
  return (
    <div className="bg-green-900 p-4 text-white font-light">
      <MaxWidthWrapper>
        <div className="flex justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="flex gap-2 p-2">
              <PhoneIcon /> 541-670-3434
            </div>
            <div className="flex gap-2 col-span-2 p-2">
              <MapPin />
              508 W. Agee, Roseburg, OR 97471
            </div>
            <div className="flex gap-2 hover:bg-green-950 p-2 rounded hover:cursor-pointer">
              <Mail />
              Contact Us
            </div>
          </div>
          <div className="gap-4 hidden md:flex">
            <Link
              href="/"
              className="p-2 hover:bg-green-950 p-2 rounded hover:cursor-pointer"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="/"
              className="p-2 hover:bg-green-950 p-2 rounded hover:cursor-pointer"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
