"use client";

import Image from "next/image";
import management from "@/images/management.jpg";

export default function ScholarshipIntro() {
  return (
    <section className="py-16 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[28px] bg-gradient-to-r from-[#2a2a2a] to-[#1e1e1e] p-10 md:p-12">
          
          {/* Text */}
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            At Shree L.R. Tiwari School of Business Management (SLRTSBM),
          </h2>

          <p className="mt-4 max-w-4xl md:text-xl text-gray-300 leading-relaxed">
            We believe that financial constraints should never stand in the way
            of talent, dedication, and potential. In keeping with this ethos,
            the institution ensures that every deserving student has access to
            scholarships and financial assistance through both
            government-sponsored and institutional schemes.
          </p>

          {/* Image */}
          <div className="relative mt-8 overflow-hidden rounded-[22px]">
            <Image
              src={management}
              alt="Graduation"
              width={1400}
              height={600}
              className="w-full h-[240px] md:h-[300px] object-cover"
            />

            {/* Glass blur bottom */}
              <div className="absolute h-[5rem] bottom-0 inset-x-0 bg-gradient-to-t from-gray-700 via-white/20 backdrop-blur-[4px]" />
          </div>

        </div>
      </div>
    </section>
  );
}