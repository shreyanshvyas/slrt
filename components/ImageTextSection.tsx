"use client";

import Image, { StaticImageData } from "next/image";

interface ImageTextSectionProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    imagePosition?: "left" | "right";
}

export default function ImageTextSection({
    title,
    description,
    image,
    imagePosition = "right",
}: ImageTextSectionProps) {
    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="rounded-[32px] bg-[#ECECEC] p-10 md:p-14">
                    <div
                        className={`grid items-center gap-12 lg:grid-cols-2 ${imagePosition === "left" ? "lg:[&>*:first-child]:order-2" : ""
                            }`}
                    >
                        {/* TEXT */}
                        <div>
                            <h2 className="text-5xl font-semibold text-[#3A3A3A]">
                                {title}
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#555]">
                                {description}
                            </p>
                        </div>

                        {/* IMAGE */}
                        <div className="relative overflow-hidden rounded-[28px]">
                            <Image
                                src={image}
                                alt={title}
                                width={800}
                                height={600}
                                className="h-[420px] w-full object-cover"
                            />

                            {/* Glass blur bottom */}
                            <div className="absolute h-[4.5rem] bottom-0 inset-x-0 backdrop-blur-[3px] bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}