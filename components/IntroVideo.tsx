"use client";

import { useState } from "react";
import Image from "next/image";
import button from "@/images/play.png"
import thumbnail from "@/images/thumbnail.jpg"

export default function IntroVideo() {
    const [play, setPlay] = useState(false);

    return (
        <section className="py-10 bg-white">
            <div className="mx-auto px-6">

                <div className="relative overflow-hidden rounded-[32px]">

                    {/* THUMBNAIL */}
                    {!play && (
                        <div
                            className="relative cursor-pointer"
                            onClick={() => setPlay(true)}
                        >
                            <Image
                                src={thumbnail}
                                alt="Intro video"
                                width={1600}
                                height={900}
                                className="w-full h-[500px] object-cover"
                            />

                            {/* Center Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src={button}
                                    alt="Play intro video"
                                    width={120}
                                    height={120}
                                    className="pointer-events-none"
                                />
                            </div>
                        </div>
                    )}

                    {/* VIDEO */}
                    {play && (
                        <video
                            className="w-full h-[500px] object-cover"
                            autoPlay
                            muted
                            playsInline
                        >
                            <source src="/videos/intro.mp4" type="video/mp4" />
                        </video>
                    )}
                </div>

            </div>
        </section>
    );
}