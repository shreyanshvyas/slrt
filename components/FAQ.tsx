"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What business management programs do you offer?",
      answer:
        "We offer industry-focused business management programs designed to build strong foundations in leadership, strategy, finance, marketing, and entrepreneurship. Our programs combine academic knowledge with practical, real-world applications.",
    },
    {
      question: "Who can apply for these programs?",
      answer:
        "Students who have completed their higher secondary education or equivalent qualification can apply for undergraduate programs. Postgraduate programs require a relevant bachelor's degree.",
    },
    {
      question: "What makes your business management programs different?",
      answer:
        "Our programs integrate interdisciplinary learning, real-world projects, and industry mentorship to ensure students graduate with both academic knowledge and practical skills.",
    },
    {
      question: "Do you offer placement or career support?",
      answer:
        "Yes. Our placement cell works closely with industry partners to provide internships, mentorship, and career placement opportunities for students.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F5F5] py-24 ">
      <div className="mx-auto max-w-5xl px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="flex items-center gap-2 rounded-full border border-gray-400 px-6 py-3 text-sm font-medium hover:bg-gray-100 transition text-black">
              More Questions <ArrowRight size={16} />
            </button>

            <a
              href="#"
              className="text-sm underline underline-offset-4 text-gray-700"
            >
              Get a free consultation call
            </a>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="divide-y divide-gray-300">

          {faqs.map((faq, index) => (
            <div key={index} className="py-8">

              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between text-left"
              >
                <h3 className="text-xl md:text-2xl font-medium text-gray-900">
                  {faq.question}
                </h3>

                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}