"use client";

import { ArrowDown } from "lucide-react";

export default function ProspectusCTA() {
  const stripeText =
    "GET THE ADMISSION • LIBERATE • NOT DOMESTICATE • ";

  return (
    <section className="relative h-[420px] bg-white flex items-center justify-center overflow-hidden">

      {/* TOP STRIPE */}
      <div className="absolute w-[200%] h-[120px] bg-orange-500 flex items-center justify-center md:rotate-[-10deg] rotate-[-20deg]">
        <p className="whitespace-nowrap text-white md:text-3xl text-lg font-semibold tracking-wide">
          {stripeText.repeat(2)}
        </p>
      </div>

      {/* BOTTOM STRIPE */}
      <div className="absolute w-[200%] h-[120px] bg-blue-600 flex items-center justify-center md:rotate-[10deg] rotate-[20deg]">
        <p className="whitespace-nowrap text-white md:text-3xl text-lg font-semibold tracking-wide">
          {stripeText.repeat(6)}
        </p>
      </div>

      {/* CENTER BUTTON */}
      <button
        className="
        relative z-10
        md:h-[200px] md:w-[200px]
        w-[140px] h-[140px]
        rounded-full
        bg-white
        text-black
        border border-black
        flex flex-col
        items-center
        justify-center
        gap-3
        text-center
        shadow-xl
        hover:scale-105
        transition
      "
      >
        <ArrowDown size={28} />

        <span className="md:text-sm text-xs font-semibold tracking-wide leading-tight">
          DOWNLOAD <br /> PROSPECTUS
        </span>
      </button>
    </section>
  );
}