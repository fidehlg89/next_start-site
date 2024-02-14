// components/TestimonialCard.tsx
import React from "react";
import { Testimonial } from "../types";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex max-w-sm overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative w-1/2">
        <Image
          src={testimonial.thumbnailUrl}
          className="bg-cover"
          alt="Thumbnail"
          width={100}
          height={100}
          style={{ width: "auto", height: "100%" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            // Include your play button SVG here
            className="fill-current text-white w-12 h-12"
            viewBox="0 0 20 20"
          >
            {/* SVG path here */}
          </svg>
        </div>
      </div>
      <div className="px-6 py-4 w-1/2">
        <div className="font-bold text-xl mb-2">{testimonial.title}</div>
        <p className="text-gray-700 text-[24px]">{testimonial.description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
