import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTimes } from "react-icons/fa";

const headingStyle = "text-white font-[700] text-[15px] mb-[11px]";
const listStyle =
  "text-white font-[400] opacity-[0.8] text-[15px] mb-[11px] cursor-pointer";
const Footer = () => {
  return (
    <footer className="text-white px-6 md:px-0 bg-[#0f172a]">
      <div className="mx-auto w-[85%]">
        <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap text-sm text-gray-300 mb-[28px]">
          <div>
            <h3 className={headingStyle}>LINKS</h3>
            <ul className="space-y-2">
              <li className={listStyle}>Home</li>
              <li className={listStyle}>About Us</li>
              <li className={listStyle}>Our Creation</li>
              <li className={listStyle}>Case Studies</li>
              <li className={listStyle}>Insight Hub</li>
              <li className={listStyle}>Careers</li>
              <li className={listStyle}>Visual Hub</li>
            </ul>
          </div>

          <div>
            <h3 className={headingStyle}>SERVICES</h3>
            <ul className="space-y-2">
              <li className={listStyle}>SEO Services</li>
              <li className={listStyle}>Social Media Marketing</li>
              <li className={listStyle}>PPC Marketing</li>
              <li className={listStyle}>Content Marketing</li>
              <li className={listStyle}>Custom Software Development</li>
              <li className={listStyle}>Mobile App Development</li>
              <li className={listStyle}>Web Development</li>
              <li className={listStyle}>UI/UX Designing</li>
            </ul>
          </div>

          <div>
            <h3 className={headingStyle}>FOCUS</h3>
            <ul className="space-y-2">
              <li className={listStyle}>Brand Loyalty</li>
              <li className={listStyle}>Responsive Designs</li>
              <li className={listStyle}>Development</li>
              <li className={listStyle}>Media Production</li>
              <li className={listStyle}>Website Maintenance</li>
              <li className={listStyle}>Virtual Tour</li>
              <li className={listStyle}>Performance Optimization</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 mt-8 md:mt-0">
              <li className={listStyle}>Market Research & Analysis</li>
              <li className={listStyle}>Social Media Content</li>
              <li className={listStyle}>Graphic Design</li>
              <li className={listStyle}>E-Commerce</li>
              <li className={listStyle}>Brand Identity</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-2 py-[39px]">
            <img
              src="/images/footer-logo.png"
              alt="SMB Digital Zone Logo"
              className="h-[50px] w-[122px]"
            />
          </div>
          <p>© 2025 SMB DigitalZone. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700 transition"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700 transition"
            >
              <FaLinkedinIn size={14} />
            </Link>
            <Link
              href="#"
              aria-label="Close"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700 transition"
            >
              <FaTimes size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
