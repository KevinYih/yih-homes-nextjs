import Image from "next/image";
import logo from "@/assests/images/logo.png";
import Link from "next/link";
import { MdHomeWork } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 py-4 mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Link href="/">
            {/* <Image src={logo} alt="Logo" className="h-8 w-auto" /> */}
            <MdHomeWork className="text-green-700 text-3xl" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="/properties">Properties</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">&copy; {currentYear} YihHomes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
