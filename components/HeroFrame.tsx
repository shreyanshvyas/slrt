"use client";

import { ReactNode } from "react";

interface HeroFrameProps {
  title: ReactNode;
  rightContent?: ReactNode;
  children?: ReactNode;
}

export default function HeroFrame({ title, rightContent, children }: HeroFrameProps) {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-white ">
      {/* GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)]
            bg-[size:120px_40%]
            opacity-60
          "
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" />
      </div>

      {/* Yellow Accent Lines */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[12%] top-0 h-2/3 w-px bg-[#EDA12E]/40" />
        <span className="absolute left-[24%] bottom-0 h-1/2 w-px bg-[#EDA12E]/30" />
        <span className="absolute left-[36%] top-0 h-2/3 w-px bg-[#EDA12E]/35" />
        <span className="absolute left-[48%] bottom-0 h-1/2 w-px bg-[#EDA12E]/35" />
        <span className="absolute left-[60%] top-0 h-2/3 w-px bg-[#EDA12E]/35" />
        <span className="absolute left-[72%] bottom-0 h-1/2 w-px bg-[#EDA12E]/35" />
        <span className="absolute left-[84%] top-0 h-1/2 w-px bg-[#EDA12E]/35" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:pt-24 md:pb-28 py-12">
        {/* Heading Row */}
        <div className="grid md:gap-10 lg:grid-cols-5 lg:items-center">
          <h1 className="md:text-left text-center font-bold leading-tight text-5xl lg:text-[5rem] col-span-3 font-heading md:mb-0 mb-6">
            {title}
          </h1>

          {rightContent && (
            <div className="flex flex-col md:items-start items-center gap-6 lg:items-end md:col-span-2 col-span-5 md:text-left  text-center">
              {rightContent}
            </div>
          )}
        </div>

        {/* Optional children */}
        {children}
      </div>
    </section>
  );
}