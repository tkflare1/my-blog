"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lowercase">
      <Link href="/" className="font-bold text-3xl">
        Uncommon
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link href="/our-story" className="text-black hover:text-gray-800">
          Our Story
        </Link>
        <Link href="/our-programs" className="text-black hover:text-gray-800">
          Our Programs
        </Link>
        <Link href="/get-involved" className="text-black hover:text-gray-800">
          Get Involved
        </Link>
      </div>
      <Link href="/donate" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-full">
        Donate
      </Link>
      <button
        className="md:hidden text-black"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-10">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/our-story" className="text-black hover:text-gray-800">
              Our Story
            </Link>
            <Link href="/our-programs" className="text-black hover:text-gray-800">
              Our Programs
            </Link>
            <Link href="/get-involved" className="text-black hover:text-gray-800">
              Get Involved
            </Link>
            <Link href="/donate" className="bg-blue-600 text-white px-4 py-2 rounded-full">
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
