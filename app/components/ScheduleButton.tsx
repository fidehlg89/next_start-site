import Link from "next/link";
import React from "react";

const ScheduleButton = () => {
  return (
    <Link
      href="/contact"
      className="whitespace-nowrap border-4 font-semibold border-[#b7ddcd] bg-transparent text-[#464a4d] px-6 py-4 hover:bg-white transition duration-300"
    >
      SCHEDULE A CONSULTATION
    </Link>
  );
};

export default ScheduleButton;
