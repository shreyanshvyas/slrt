"use client";

import Image, { StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import bba from "@/images/pa2.png";
import bsc from "@/images/pa3.png";
import pgdm from "@/images/pa4.png";
import { useRef } from "react";
import ProgramCard from "./ProgramCard";

export default function ProgramsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -320,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 320,
            behavior: "smooth",
        });
    };

    const programs = [
        { image: bba, tag: "Undergraduate Program", title: "BBA (Hons.)", color: "blue" },
        { image: bsc, tag: "Undergraduate Program", title: "B.Sc. Management", color: "blue" },
        { image: pgdm, tag: "Postgraduate Program", title: "PGDM Finance", color: "orange" },
        { image: bba, tag: "Postgraduate Program", title: "PGDM Business Analytics", color: "orange" },
        { image: bba, tag: "Postgraduate Program", title: "PGDM Business Analytics", color: "orange" },
        { image: bba, tag: "Postgraduate Program", title: "PGDM Business Analytics", color: "orange" },
        { image: bba, tag: "Postgraduate Program", title: "PGDM Business Analytics", color: "orange" },
    ];

    return (
        <section className="bg-[#F5F5F5] py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-5xl font-display font-semibold italic text-black">Our Programs</h2>
                    <p className="mt-2 text-gray-600 text-lg">Undergraduate/Postgraduate</p>
                </div>

                <div className="relative mt-16">

                    {/* LEFT BUTTON */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 rounded-full bg-blue-600 p-2 shadow-lg"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    {/* SCROLL CONTAINER */}
                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
                    >
                        {programs.map((program, index) => (
                            <ProgramCard key={index} {...program} />
                        ))}
                    </div>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 rounded-full bg-blue-600 p-2 text-white shadow-lg"
                    >
                        <ArrowRight size={18} />
                    </button>

                </div>
            </div>
        </section>
    );
}