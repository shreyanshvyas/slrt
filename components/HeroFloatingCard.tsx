"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import hero from "@/images/hero.jpg";

export default function HeroFloatingCard() {
  return (
    <div className="md:p-6 p-3 bg-[#2a2a2a]">
    <div className="rounded-3xl bg-[#1D1D1D] md:p-8 p-6 lg:p-12">
      <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
        
        {/* LEFT PROGRAM CARD */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-4 text-black">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={hero}
                alt="PGDM Classroom"
                width={500}
                height={300}
                className="h-48 w-full object-cover"
              />

              <span className="absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                Intake 60
              </span>
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              PGDM (Multi-Specialisation)
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              A launchpad into modern business worlds.
            </p>

            <button className="mt-4 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
              Enroll Now
            </button>
          </div>
        </div>

        {/* RIGHT QUOTE */}
        <div className="lg:col-span-3">
          <p className="text-2xl font-medium leading-snug sm:text-5xl">
            “We Don’t Produce Graduates;
            <br />
            We Nurture Thinkers Who
            <br />
            Redefine The Future.”
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
            EXPLORE MORE COURSES <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}