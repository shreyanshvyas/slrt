"use client";

import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import film from "@/images/film.png";
import research from "@/images/research.png";
import sociology from "@/images/sociology.png";
import tech from "@/images/tech.png";
import immersive from "@/images/immersive.png";
import experiences from "@/images/experience.png";
import theory from "@/images/theory.png";


type Pair = {
    left: {
        title: string;
        image: StaticImageData;
        section: string;
    };
    right: {
        title: string;
        image: StaticImageData;
        section: string;
    };
};

export default function LensesSection() {
    const router = useRouter();

    const pairs: Pair[] = [
        {
            left: {
                title: "Films & Visual Communication",
                image: film,
                section: "films",
            },
            right: {
                title: "Theory & Technicals",
                image: theory,
                section: "theory",
            },
        },
        {
            left: {
                title: "Immersive Experience",
                image: immersive,
                section: "immersive",
            },
            right: {
                title: "Research",
                image: research,
                section: "research",
            },
        },
        {
            left: {
                title: "Sociology & Humanism",
                image: sociology,
                section: "sociology",
            },
            right: {
                title: "Technology",
                image: tech,
                section: "technology",
            },
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 space-y-10">
                <div className="text-center">
                    <h2 className="md:text-5xl text-4xl text-center mb-6 font-semibold font-display italic text-[#1A1A1A]">
                        Learning Lenses</h2>
                    <p className=" text-gray-600 text-lg mt-6">At SLRTSBM, Each lens reveals a different way
                        organisations, people, and systems function.</p>
                </div>
                {pairs.map((pair, i) => (
                    <LensPair
                        key={i}
                        pair={pair}
                        onNavigate={(section) =>
                            router.push(`/epistemology#${section}`)
                        }
                    />
                ))}
            </div>
        </section>
    );
}

function LensPair({
    pair,
    onNavigate,
}: {
    pair: Pair;
    onNavigate: (section: string) => void;
}) {
    return (
        <div className="group relative rounded-2xl bg-white md:p-4 transition-colors duration-300 hover:bg-[#F0716F]">

            {/* Images */}
            <div className="grid grid-cols-2 gap-6">
                <div
                    className="cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => onNavigate(pair.left.section)}
                >
                    <Image
                        src={pair.left.image}
                        alt={pair.left.title}
                        width={900}
                        height={600}
                        className="h-[280px] w-full object-cover"
                    />
                </div>

                <div
                    className="cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => onNavigate(pair.right.section)}
                >
                    <Image
                        src={pair.right.image}
                        alt={pair.right.title}
                        width={900}
                        height={600}
                        className="h-[280px] w-full object-cover"
                    />
                </div>
            </div>

            {/* Titles */}
            <div className="mt-4 grid grid-cols-2 text-lg font-semibold text-black">
                <button
                    className="text-left"
                    onClick={() => onNavigate(pair.left.section)}
                >
                    {pair.left.title}
                </button>

                <button
                    className="text-right"
                    onClick={() => onNavigate(pair.right.section)}
                >
                    {pair.right.title}
                </button>
            </div>

            {/* Center Arrow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-6 w-6 text-black" />
                </div>
            </div>
        </div>
    );
}