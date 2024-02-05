import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto">
      <div className="flex flex-col md:flex-row items-stretch ">
        <div className="md:w-1/2 px-[40px] py-[120px]">
          <h1 className="uppercase text-[#8AC8AD] text-[24px] font-semibold">
            Bokhari Medical Consortium
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-black">
            {`Tampa's Premier Destination for A Healthy Mind, Body, and Soul`}
          </h2>
          <p className="text-[#464A4D] mb-8">
            {`Welcome to Bokhari Medical Consortium, located in Largo, Florida.
            Our mission is to empower individuals on their mental health journey
            by providing a comprehensive range of services. From thorough
            psychiatric evaluations and accurate diagnoses to effective
            medication management and transformative TMS therapy, we prioritize
            your well-being.`}
          </p>
          <p className="text-[#464A4D] mb-8">
            {`Experience the benefits of our innovative approaches, such as
            ketamine therapy and intensive outpatient programs, which are
            tailored to promote mental wellness. Our dedicated team is here to
            offer guidance and support throughout your healing process.`}
          </p>
          <p className="text-[#464A4D] mb-8">
            {`Don't hesitate to reach out to us as you embark on your path to
            inner peace. Let Bokhari Medical Consortium be your partner in
            achieving true emotional well-being.`}
          </p>
          <Link
            href="/contact"
            className="whitespace-nowrap border border-[#b7ddcd] bg-transparent text-[#464a4d] px-6 py-4 hover:bg-white transition duration-300"
          >
            SCHEDULE A CONSULTATION
          </Link>
        </div>
        <div className="relative md:w-1/2 mt-6 md:mt-0">
          <Image
            src="https://lirp.cdn-website.com/f36ffd00/dms3rep/multi/opt/KV-01-1152w.jpg"
            alt="Content Image"
            className="object-cover"
            width={600}
            height={600}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </main>
  );
}
