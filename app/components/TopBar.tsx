import React from "react";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#464a4d] text-[22px] px-[40px] py-[6px]">
      <div className="flex justify-evenly items-center">
        <span className="my-2">Serving Hillsborough, Pinellas, and Pasco County</span>
        <div className="flex items-center space-x-4">
          <Link href="tel:+17272383241" className="flex items-center space-x-1">
            <PhoneIcon className="w-6 h-6 text-[#b7ddcd]" />
            <span className="my-2">+1 (727) 238-3241</span>
          </Link>
          <Link
            href="https://www.google.com/maps/place/716+Seminole+Blvd,+Largo,+FL+33770"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1"
          >
            <MapPinIcon className="w-6 h-6 text-[#b7ddcd]" />
            <span className="my-2">716 Seminole Blvd, Largo, FL 33770</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
