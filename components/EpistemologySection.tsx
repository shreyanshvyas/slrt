"use client";

import Image from "next/image";
import vision from "@/images/vision.png"

export default function EpistemologySection() {
  return (
    <section className="relative overflow-hidden bg-[#EDEDED] py-24">
      {/* ================= GRID BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Light grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Yellow vertical accent lines */}
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h2 className="md:text-5xl text-3xl font-bold leading-tight text-[#222]">
              The Epistemology of Learning at SLRTSBM
            </h2>

            <p className="mt-4 text-xl text-[#555]">
              The Lenses Through Which We Teach and Reimagine Management.
            </p>

            <p className="mt-8 text-lg leading-relaxed text-[#555]">
              At SLRTSBM, we believe that management is not taught; it is
              encountered, interpreted, and lived. Every learner arrives with
              a worldview, and education’s task is not to replace it but to
              refine it, expanding the frame through which they see reality.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#555]">
              Hence, the School structures its pedagogy not around conventional
              subjects, but around lenses of understanding, each revealing a
              different facet of how organisations, people, and systems function.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex items-center flex-col md:flex-row gap-6">
              <button className="rounded-full bg-[#1E5CC8] px-8 py-4 text-white text-lg font-medium shadow-lg shadow-blue-200 transition hover:scale-[1.02]">
                See More
              </button>

              <button className="rounded-full border border-[#222] px-8 py-4 text-lg font-medium text-[#222] transition hover:bg-[#222] hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          {/* ================= RIGHT IMAGE CARD ================= */}
          <div className="relative">
            <div className="relative rounded-3xl bg-white p-3 shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={vision} // replace with actual
                  alt="Classroom Learning"
                  width={900}
                  height={700}
                  className="h-[520px] w-full object-cover"
                />

                {/* Bottom Blur Fade */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
