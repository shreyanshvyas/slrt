"use client";

import {
  Search,
  PenTool,
  Wrench,
  Truck,
  Presentation,
} from "lucide-react";

export default function FiveDCycle() {
  const steps = [
    { title: "Discover", icon: Search },
    { title: "Design", icon: PenTool },
    { title: "Develop", icon: Wrench },
    { title: "Deliver", icon: Truck },
    { title: "Demonstrate", icon: Presentation },
  ];

  return (
    <section className="bg-[#F3F3F3] py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Understanding the 5D Cycle
          </h2>

          <p className="mt-2 text-sm md:text-xl text-gray-600">
            Dive into the principles of Discover, Design, Develop, Deliver, and Demonstrate.
          </p>
        </div>

        {/* Container */}
        <div className="mt-10 rounded-3xl bg-[#EDEDED] p-8">
          <div className="relative flex items-center justify-between gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative flex flex-1 items-center">

                  {/* Step Card */}
                  <div className="relative flex h-36 w-full flex-col items-center justify-center rounded-3xl bg-[#1E5AC8] text-white shadow-md">

                    {/* Icon */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                      <Icon className="h-6 w-6 text-[#1E5AC8]" />
                    </div>

                    <p className="text-xl ">
                      {step.title}
                    </p>

                  </div>

                  {/* Connector Dot */}
                  {index !== steps.length - 1 && (
                    <div className="absolute right-[-30px] z-10 h-10 w-10 rounded-full bg-[#0D3D8B]" />
                  )}

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}