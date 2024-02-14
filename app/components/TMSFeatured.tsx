"use client";
import React from "react";
import Image from "next/image";
import { Testimonial } from "../types";
import TestimonialCard from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    id: "1",
    title: "How MagVenture TMS Therapy helped Cindy",
    description:
      'After having received MagVenture TMS Therapy Cindy stated, "My husband got his wife back, my son got his mother back and I started living life more fully. TMS literally saved my life."',
    thumbnailUrl: "https://i.ytimg.com/vi_webp/fsvggWrczuY/sddefault.webp", // Asegúrate de tener la ruta correcta
  },
  {
    id: "2",
    title: "Oliver's experience with TMS",
    description:
      'Oliver stated, "I have hope now", that he was "grasping at straws" and "honestly didn\'t expect much." He decided to try TMS treatment for his depression and was pleased with the results.',
    thumbnailUrl: "https://i.ytimg.com/vi_webp/x1K_S9p9n84/sddefault.webp", // Asegúrate de tener la ruta correcta
  },
];

const TMSFeatured: React.FC = () => {
  return (
    <section
      className="bg-white bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://lirp.cdn-website.com/f36ffd00/dms3rep/multi/opt/pngwing-black-01-1920w.jpg)",
      }}
    >
      <div className="flex mb-10">
        <div className="flex flex-col justify-center items-center w-1/2">
          <div className="px-[40px] py-[120px] pb-0">
            <div className="">
              <h1 className="uppercase mb-5 text-white text-[24px] font-semibold">
                Transcranial Magnetic Stimulation (TMS)
              </h1>
              <h2 className="font-normal mb-5 text-white text-[50px] leading-none">{`What You Need to Know About Transcranial Magnetic Stimulation (TMS) Therapy`}</h2>
              <p className="text-white mb-8 text-[20px]">
                {`Transcranial magnetic stimulation (TMS) is a type of brain stimulation therapy. It’s a noninvasive treatment that uses electromagnetic pulses to stimulate nerve cells, which may improve symptoms of neurological or mental health disorders.
              TMS is mainly used to treat depression. It’s had success helping people who don’t respond to antidepressant medication and psychotherapy. In fact, in 2008 the Food and Drug Administration (FDA) approved TMS for this purpose.
              There’s also some evidence that TMS may help other disorders, like anxiety and Parkinson’s disease.
              Since TMS uses repetitive electrical impulses, it’s sometimes called repetitive transcranial magnetic stimulation (rTMS). The terms are often used interchangeably.`}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start w-1/2">
          <Image
            src={"https://i.ytimg.com/vi_webp/7UKqY-sC7qQ/maxresdefault.webp"}
            alt="Youtube video"
            width={500}
            height={400}
            style={{ width: "auto", height: "100%" }}
          ></Image>
        </div>
      </div>

      <div className="container mx-auto flex justify-evenly gap-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TMSFeatured;
