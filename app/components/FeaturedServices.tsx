import Image from "next/image";
import React from "react";
import ScheduleButton from "./ScheduleButton";

const services = [
  { name: "Psychiatric Evaluations", icon: "/assets/interview-1920w.webp" },
  { name: "Medication Management", icon: "/assets/medicine-1920w.webp" },
  { name: "Hyperbaric Oxygen Therapy", icon: "/assets/o2-1920w.webp" },
  { name: "TMS Therapy", icon: "/assets/brain-1920w.webp" },
  { name: "Ketamine Therapy", icon: "/assets/iv-bag-1920w.webp" },
];

const ServiceCard = ({ service }: any) => {
  return (
    <div
      tabIndex={0}
      className="p-4 flex flex-col justify-around bg-white border text-center shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <Image
        src={service.icon}
        alt=""
        className="mx-auto"
        width={100}
        height={60}
      ></Image>

      <h3 className="text-[24px] font-semibold text-gray-600 leading-6">
        {service.name}
      </h3>
    </div>
  );
};

const FeaturedServices = () => {
  return (
    <section className="mx-auto px-4 text-center py-40">
      <h1 className="uppercase mb-10 text-[#8AC8AD] text-center text-[24px] font-semibold">
        FEATURED SERVICES
      </h1>
      <h2 className="text-3xl text-center mb-10 text-black text-[56px] leading-none">
        {`Tampa's Premier Destination for A Healthy Mind, Body, and Soul`}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
      <h3 className="uppercase mb-10 text-[#8AC8AD] text-center text-[24px] font-semibold">
        LET US HELP YOU
      </h3>
      <ScheduleButton />
    </section>
  );
};

export default FeaturedServices;
