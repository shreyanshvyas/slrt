"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function AdvisoryMembers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  const members = [
    {
      image: "/members/member1.jpg",
      name: "Dr. Hanif Kanjer",
      role: "Director and Dean",
      org: "Rustomjee Cambridge International School & Junior College",
    },
    {
      image: "/members/member2.jpg",
      name: "Dr. Hanif Kanjer",
      role: "Director and Dean",
      org: "Rustomjee Cambridge International School & Junior College",
    },
    {
      image: "/members/member3.jpg",
      name: "Dr. Hanif Kanjer",
      role: "Director and Dean",
      org: "Rustomjee Cambridge International School & Junior College",
    },
    {
      image: "/members/member4.jpg",
      name: "Dr. Hanif Kanjer",
      role: "Director and Dean",
      org: "Rustomjee Cambridge International School & Junior College",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl font-semibold text-black">
            Advisory Board Members:
          </h2>

          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-gray-200 text-black"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={scrollRight}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {members.map((member, index) => (
            <div
              key={index}
              className="min-w-[360px] rounded-[28px] border border-gray-400 p-5"
            >
              {/* Image */}
              <div className="relative h-[230px] w-full overflow-hidden rounded-2xl bg-gray-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-5">
                <h3 className="text-xl font-semibold text-black">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-700">{member.role}</p>

                <p className="mt-3 text-sm text-gray-900 leading-snug">
                  {member.org}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}