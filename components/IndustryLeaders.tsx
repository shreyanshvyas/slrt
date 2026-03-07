"use client";

import Image, { StaticImageData } from "next/image";
import akshay from "@/images/akshay.jpg";
import deepak from "@/images/deepak.jpg";
import deependra from "@/images/deependra.jpg";
import hanif from "@/images/hanif.jpg";
import prashant from "@/images/prashant.jpg";
import rajeev from "@/images/rajeev.jpg";

export default function IndustryLeaders() {
  const placeholder = "https://picsum.photos/300/400";

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[90rem] px-6">

        <div className="grid grid-cols-1 md:grid-cols-5 items-center md:gap-12">

          {/* COLUMN 1 */}
          <div className="flex md:flex-col items-end md:gap-8 md:justify-end justify-between md:mb-0 mb-6 ">
            <Portrait src={akshay} />
            <Portrait src={deepak} />
          </div>

          {/* COLUMN 2 */}
          <div className="grid md:grid-cols-[auto_1fr_auto] md:col-span-3 items-center gap-6">

            {/* left image */}
            <div className="mx-auto">
            <Portrait src={deependra}  /></div>

            {/* center text */}
            <div className="text-center max-w-sm mx-auto">
              <p className="text-xl text-gray-600">
                Made by the
              </p>

           <h2 className="md:text-5xl text-4xl text-center mb-6 font-semibold font-display italic text-[#1A1A1A]">
                Industry Leaders
              </h2>

              <p className="mt-4 text-gray-600">
                Powered by real-world expertise and innovation
              </p>

              <button className="mt-6 rounded-full bg-blue-600 px-8 py-3 text-white font-medium shadow-md">
                Hear from the Experts
              </button>
            </div>

            {/* right image */}
            <div className="mx-auto">
            <Portrait src={hanif}  /></div>

          </div>

          {/* COLUMN 3 */}
          <div className="flex md:flex-col items-start md:gap-8 md:justify-start justify-between md:mt-0 mt-6">
            <Portrait src={prashant} />
            <Portrait src={rajeev} />
          </div>

        </div>

      </div>
    </section>
  );
}

/* Portrait */

function Portrait({ src }: { src: StaticImageData }) {
  return (
    <div className="relative h-[170px] w-[130px] md:h-[180px] md:w-[140px] lg:h-[220px] lg:w-[180px] overflow-hidden rounded-2xl shadow-md">
      <Image
        src={src}
        alt="leader"
        fill
        className="object-cover opacity-90"
      />
    </div>
  );
}