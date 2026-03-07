"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import hero from "@/images/hero.jpg"

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#111111] text-white">
            {/* GRID BACKGROUND */}
            <div className="pointer-events-none absolute inset-0">
                {/* Vertical grid lines */}
                <div
                    className="
      absolute inset-0
      bg-[linear-gradient(
        to_right,
        rgba(255,255,255,0.06)_1px,
        transparent_1px
      )]
      bg-[size:120px_40%]
      opacity-60
    "
                />

                {/* Top fade (important) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" />
            </div>


            {/* Accent yellow lines */}
            <div className="pointer-events-none absolute inset-0">
                <span className="absolute left-[12%] top-0 h-full w-px bg-[#EDA12E]/40" />
                <span className="absolute left-[24%] bottom-0 h-1/2 w-px bg-[#EDA12E]/30" />
                <span className="absolute left-[36%] top-0 h-full w-px bg-[#EDA12E]/35" />
                <span className="absolute left-[48%] top-0 h-full w-px bg-[#EDA12E]/35" />
                <span className="absolute left-[60%] top-0 h-full w-px bg-[#EDA12E]/35" />
                <span className="absolute left-[72%] top-0 h-full w-px bg-[#EDA12E]/35" />
                <span className="absolute left-[84%] top-0 h-full w-px bg-[#EDA12E]/35" />
                <span className="absolute left-[%] top-0 h-full w-px bg-[#EDA12E]/35" />
            </div>


            <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28">
                {/* TOP HERO ROW */}
                <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl col-span-3">
                        Not Your Average
                        <br />
                        B-School
                    </h1>

                    <div className="flex flex-col items-start gap-6 lg:items-end col-span-2">
                        <p className="max-w-sm text-lg text-slate-300 text-right">
                            Education must be Liberate,
                            <br />
                            Not Domesticate
                        </p>

                        <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                            ENROLL NOW <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* FLOATING CARD */}
                <div className="mt-20 rounded-3xl bg-[#1C1C1C] p-8 lg:p-12">
                    <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
                        {/* LEFT PROGRAM CARD */}
                        <div className="lg:col-span-2">
                            <div className="rounded-2xl bg-white p-4 text-black">
                                <div className="relative overflow-hidden rounded-xl">
                                    <Image
                                        src={hero} // replace with your image
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
                            <p className="text-2xl font-medium leading-snug sm:text-3xl">
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
        </section>
    );
}
