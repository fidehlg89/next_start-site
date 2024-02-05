import React from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('assets/pngwing-1920w.webp')" }}
    >
      <Link
        href="/contact"
        className="flex items-center justify-center w-[162px] bg-[yellow] text-gray-800 px-4 py-2 hover:bg-yellow-500 transition duration-300 text-xl font-semibold h-12"
      >
        Book Online
      </Link>
      <TopBar />
      <Navbar />
    </header>
  );
};

export default Header;
