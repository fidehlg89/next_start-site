"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

const ServicesMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ml-5">
      <button
        className="flex items-center text-gray-600 hover:text-[#463939] transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        SERVICES
        <div className="transition-transform duration-3000 transform">
          <ChevronDownIcon
            className={`w-4 h-4 ml-1 transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          <Link
            href="/services/tms-therapy"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            TMS THERAPY
          </Link>
          <Link
            href="/services/evaluations"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            PSYCHIATRIC EVALUATIONS & DIAGNOSIS
          </Link>
          <Link
            href="/services/medication"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            MEDICATION MANAGEMENT
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServicesMenu;
