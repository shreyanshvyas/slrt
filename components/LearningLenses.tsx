"use client";

import Image, { StaticImageData } from "next/image";

import film from "@/images/film.png";
import research from "@/images/research.png";
import sociology from "@/images/sociology.png";
import tech from "@/images/tech.png";
import immersive from "@/images/immersive.png";
import experiences from "@/images/experience.png";
import theory from "@/images/theory.png";

interface Lens {
  title: string;
  image: StaticImageData;
}

const lenses: Lens[] = [
  { title: "Films", image: film },
  { title: "Research", image: research },
  { title: "Sociology", image: sociology },
  { title: "Technology", image: tech },
  { title: "Immersive", image: immersive },
  { title: "Experiences", image: experiences },
  { title: "Theory", image: theory },
];

export default function LearningLenses() {
  return (
    <section className="bg-[#F3F3F3] pb-20">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="rounded-3xl bg-[#EDEDED] p-10">
          
          <h3 className="mb-10 text-center text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Learning Lenses
          </h3>

         <div className="space-y-6">
  {/* First Row - 4 Cards */}
  <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
    {lenses.slice(0, 4).map((lens) => (
      <LensCard key={lens.title} lens={lens} />
    ))}
  </div>

  {/* Second Row - Centered 3 Cards */}
  <div className="flex justify-center gap-6">
    {lenses.slice(4).map((lens) => (
      <div className="w-full max-w-[23%]" key={lens.title}>
        <LensCard lens={lens} />
      </div>
    ))}
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
function LensCard({ lens }: { lens: { title: string; image: StaticImageData } }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <Image
        src={lens.image}
        alt={lens.title}
        width={400}
        height={300}
        className="h-40 w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D8B]/80 to-transparent" />

      <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
        {lens.title}
      </div>
    </div>
  );
}

