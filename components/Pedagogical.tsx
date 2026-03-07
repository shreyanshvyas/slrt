"use client";

import Image from "next/image";
import LearningLenses from "./LearningLenses";
import FiveDCycle from "./FiveDCycle";
import pa1 from "@/images/pa1.png"
import pa2 from "@/images/pa2.png"
import pa3 from "@/images/pa3.png"

export default function PedagogicalApproach() {
  return (
    <section className="bg-[#F5F5F5] py-16">

      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl col-span-3 text-[#1D1D1D]">
          Pedagogical Approach
        </h1>

        {/* ================= LEARNING CYCLE CARD ================= */}
        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

            {/* LEFT TEXT */}
            <div>
              <h3 className="text-[1.75rem] font-semibold text-[#2A2A2A]">
                The SLB Learning Cycle
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-[#555]">
                Learning at the Shree L.R. Tiwari School of Business Management is designed as a dynamic,  reflective, and engaging cycle.</p>
              <p className="mt-4 text-lg leading-relaxed text-[#555]">
                We refer to it as the 5D Learning Model:  Discover,  Design, Develop, Deliver, and Demonstrate.  It  mirrors how thought becomes action, how curiosity gives rise to creation, and how learning  leads to consciousness. </p>
              <p className="mt-4 text-lg leading-relaxed text-[#555]">
                This model is not a process to be followed mechanically; it is a rhythm to be lived. Each  semester moves through these five phases, allowing every learner to evolve from exploration to  expression, from questioning to contribution.
              </p>
            </div>

            {/* RIGHT ILLUSTRATION */}
            <div className="relative md:h-[20em] w-auto ">
              <Image
                src={pa1}
                alt="Learning Illustration"
                width={350}
                height={350}
                className="object-contain shadow-xl mx-auto rounded-2xl"
              />
              <div className="absolute h-[4rem] bottom-0 inset-x-0 bg-gradient-to-t from-white via-white/20 backdrop-blur-[3px]" />

            </div>
          </div>
        </div>

        {/* ================= UNDERSTAND CYCLE ================= */}
        <FiveDCycle />
        {/* <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm">
          <h3 className="text-center text-lg font-semibold text-[#2A2A2A]">
            Understanding the Learning Cycle
          </h3>
          <p className="mt-2 text-center text-sm text-[#666]">
            Dive into the principles of Discover, Design, Develop, Deliver,
            and Demonstrate.
          </p>

          {/* BLUE STEPS BAR */}
        {/* <div className="mt-8 rounded-2xl bg-[#0B5ED7] p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 text-white">
              {["Discover", "Design", "Develop", "Deliver", "Demonstrate"].map(
                (step) => (
                  <div
                    key={step}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="h-12 w-12 rounded-lg bg-white/20" />
                    <span className="mt-3 text-sm font-medium">
                      {step}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div> */}

        {/* ================= LEARNING LENSES ================= */}

        <LearningLenses />
        {/* <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm">
          <h3 className="text-center text-lg font-semibold text-[#2A2A2A]">
            Learning Lenses
          </h3>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Films",
              "Research",
              "Sociology",
              "Technology",
              "Immersive",
              "Experiences",
              "Theory",
            ].map((item) => (
              <div
                key={item}
                className="relative h-36 overflow-hidden rounded-xl"
              >
                <Image
                  src="/images/sample.jpg"
                  alt={item}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div> */}

        {/* ================= CULTURE SECTION ================= */}
        <div className="mt-12 rounded-2xl bg-white p-8 md:p-16 shadow-sm">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-[#2A2A2A]">
            SLRTSBM Culture
          </h3>
          <p className="mt-2 text-center text-sm md:text-xl text-[#666]">
            A living community built on dialogue, reflection, collaboration,
            and trust.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">

            <div
              className="relative h-80 overflow-hidden rounded-3xl"
            >
              <Image
                src={pa2}
                alt="Culture"
                fill
                className="object-cover"
              />
              <div className="absolute h-[4rem] bottom-0 inset-x-0 bg-gradient-to-t from-white via-white/20 backdrop-blur-[3px]" />
            </div>

            <div
              className="relative h-80 overflow-hidden rounded-3xl"
            >
              <Image
                src={pa3}
                alt="Culture"
                fill
                className="object-cover"
              />
              <div className="absolute h-[4rem] bottom-0 inset-x-0 bg-gradient-to-t from-white via-white/20 backdrop-blur-[3px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
