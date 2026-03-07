"use client";

import Image, { StaticImageData } from "next/image";

interface LensSectionProps {
  index?: number;
  title: string;
  description: string;
  image: string | StaticImageData;
}

export default function LensSection({
  index,
  title,
  description,
  image,
}: LensSectionProps) {
  return (
    <section className="relative rounded-[28px] bg-[#F3F3F3] p-10 mt-10 mx-auto max-w-[90rem] md:p-14 shadow-inner ">
      
      {/* Inner container (matches your screenshot padding feel) */}
      <div className="rounded-[24px] bg-white p-8 md:p-8  ">
        
        {/* Title */}
        <h3 className="text-2xl font-semibold text-[#1A1A1A]">
          {index && <span className="mr-2">{index}.</span>}
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-5xl md:text-xl leading-relaxed text-[#555]">
          {description}
        </p>

        {/* Image Card */}
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-3xl">
            
            <Image
              src={image}
              alt={title}
              width={1400}
              height={800}
              className="h-[380px] w-full object-cover" 
              priority={false}
            />

            {/* Bottom blur fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}
