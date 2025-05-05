"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useDispatch } from "@/store/store";
import { logOutUser } from "@/store/slices/currentUserSlice";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Our Creation", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Insight Hub", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Visual Hub", href: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <header className="bg-white sticky top-0 z-50 px-6 md:px-0 py-2 flex flex-col justify-center w-full">
      <div className="flex justify-between items-center w-[85%] mx-auto">
        <div className="flex items-center">
          <img
            src="/images/header-logo.png"
            alt="SMB Digital Zone Logo"
            className="w-auto"
          />
        </div>

        <nav className="hidden lg:flex items-center space-x-[32px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] text-[#000000] hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => dispatch(logOutUser())}
            className="bg-[#0537AE] text-white cursor-pointer transition text-[13px] font-[600] w-[140px] h-[50px] rounded-[15px] text-sm hover:bg-[#0538aed8]"
          >
            Log out
          </button>
        </div>

        <div className="lg:hidden cursor-pointer">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={24} /> : <IoIosMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Drawer Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="font-medium text-xl">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#000000] text-[13px] hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => dispatch(logOutUser())}
            className="bg-[#0537AE] text-white cursor-pointer transition text-[13px] font-[600] w-[140px] h-[50px] rounded-[15px] text-sm hover:bg-[#0538aed8]"
          >
            Log out
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
