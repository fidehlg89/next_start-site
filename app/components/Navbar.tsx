"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ServicesMenu from "./ServicesMenu";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="flex justify-between items-center px-[40px] py-[6px]uppercase text-[20px] h-32 uppercase">
      <Image
        src="/assets/Bokhari-Medical-logo-400px-262w.webp"
        alt="Bokhari Medical Consortium Logo"
        width={150}
        height={50}
        priority
      />
      <div className="flex justify-end items-center gap-4">
        <div className="flex flex-wrap justify-end items-stretch">
          <Link
            href="/"
            className={`text-gray-600 ml-5 hover:text-[#463939] transition duration-300 ${
              pathname === "/" && "border-b-4 border-[#b7ddcd]"
            }`}
          >
            HOME
          </Link>
          <ServicesMenu />
          <Link
            href="/membership-plans"
            className={`text-gray-600 ml-5 hover:text-[#463939] transition duration-300 ${
              pathname === "/membership-plans" && "border-b-4 border-[#b7ddcd]"
            }`}
          >
            MEMBERSHIP
          </Link>
          <Link
            href="/membership"
            className={`text-gray-600 ml-5 hover:text-[#463939] transition duration-300 ${
              pathname === "/membership" && "border-b-4 border-[#b7ddcd]"
            }`}
          >
            Ketamine & SPRAVATO®
          </Link>
          <Link
            href="/resources"
            className={`text-gray-600 ml-5 hover:text-[#463939] transition duration-300 ${
              pathname === "/resources" && "border-b-4 border-[#b7ddcd]"
            }`}
          >
            Resources
          </Link>
        </div>

        <Link
          href="/contact"
          className="whitespace-nowrap border border-[#b7ddcd] bg-transparent text-[#464a4d] px-6 py-4 hover:bg-white transition duration-300"
        >
          SCHEDULE A CONSULTATION
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
