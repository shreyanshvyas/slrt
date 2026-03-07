"use client";

import Image, { StaticImageData } from "next/image";

interface ImageContentSectionProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  primaryButton?: string;
  secondaryButton?: string;
}

export default function ImageContentSection({
  title,
  description,
  image,
  primaryButton,
  secondaryButton,
}: ImageContentSectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[32px] bg-[#1C1C1C] p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center mb-32">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-snug">
                {title}
              </h2>

              <p className="mt-6 text-gray-300 leading-relaxed text-lg">
                {description}
              </p>

              {(primaryButton || secondaryButton) && (
                <div className="flex gap-4 mt-8">
                  {primaryButton && (
                    <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                      {primaryButton}
                    </button>
                  )}

                  {secondaryButton && (
                    <button className="px-6 py-3 rounded-full border border-gray-400 text-white hover:bg-white hover:text-black transition">
                      {secondaryButton}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* IMAGE */}
            <div className="relative rounded-[28px] overflow-hidden h-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />

              {/* Bottom blur */}
              <div className="absolute h-[5rem] bottom-0 inset-x-0 backdrop-blur-[6px] bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}