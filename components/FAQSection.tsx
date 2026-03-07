"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Why is it still organised around finance, human resources, and marketing, when the world demands systems thinkers, cultural interpreters, and ethical designers?",
      a: "Because traditional education models still follow legacy structures. At SLRTSBM we rethink management education through interdisciplinary lenses that integrate culture, systems thinking, and ethics."
    },
    {
      q: "Why is it still organised around finance, human resources, and marketing, when the world demands systems thinkers, cultural interpreters, and ethical designers?",
      a: "Modern organisations require thinkers who can integrate technology, culture, ethics and systems thinking rather than siloed functional expertise."
    },
    {
      q: "Why is it still organised around finance, human resources, and marketing, when the world demands systems thinkers, cultural interpreters, and ethical designers?",
      a: "Students explore real-world problems through multiple learning lenses including films, research, sociology, technology and immersive experiences."
    },
    {
      q: "Why is it still organised around finance, human resources, and marketing, when the world demands systems thinkers, cultural interpreters, and ethical designers?",
      a: "Graduates develop systems thinking abilities suited for leadership roles in strategy, consulting, design management, social innovation and technology."
    },
    {
      q: "Why is it still organised around finance, human resources, and marketing, when the world demands systems thinkers, cultural interpreters, and ethical designers?",
      a: "Yes. The interdisciplinary structure reflects how organisations operate globally today, integrating business, culture and technology."
    },
    {
      q: "Why is it still organised around finance, human resources, and marketing, when the world demands systems thinkers, cultural interpreters, and ethical designers?",
      a: "Rather than producing only functional specialists, we develop reflective thinkers capable of interpreting complex systems."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
    <h2 className="md:text-5xl text-4xl text-center mb-20 font-semibold font-display italic text-[#1A1A1A]">
           Our Philosophy?
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {faqs.map((faq, i) => (
            <FlipCard key={i} question={faq.q} answer={faq.a} />
          ))}

        </div>

      </div>
    </section>
  );
}

function FlipCard({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (

    <div>
    <div
      className="group md:h-[300px] h-[250px] perspective"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          open ? "rotate-y-180" : ""
        }`}
      >

        {/* FRONT (QUESTION) */}
        <div className="absolute inset-0 bg-white rounded-xl border border-gray-300 p-6 flex flex-col justify-between backface-hidden">

          <p className="md:text-xl font-medium text-black leading-relaxed">
            {question}
          </p>

          <div className="flex items-center w-full">
            <div className="justify-end ml-auto border rounded-full border-black">
            <Plus size={18} className="text-black" /></div>
          </div>

        </div>

        {/* BACK (ANSWER) */}
        <div className="absolute inset-0 bg-blue-600 text-white rounded-xl p-6 flex flex-col justify-between rotate-y-180 backface-hidden">

          <p className="md:text-xl leading-relaxed">
            {answer}
          </p>

          <div className="flex items-center w-full">
            <div className="justify-end ml-auto border rounded-full ">
            <Minus size={18} />
            </div>
          </div>

        </div>

      </div>
    </div>
    </div>
  );
}