import Image, { StaticImageData } from "next/image";

export default function ProgramCard({
    image,
    tag,
    title,
    color,
}: {
    image: StaticImageData;
    tag: string;
    title: string;
    color: string;
}) {
    return (
        <div className="relative min-w-[280px] overflow-hidden rounded-3xl bg-white p-2 shadow-lg">
            <div className="relative h-[360px] overflow-hidden rounded-2xl">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />

                {/* Bottom blur */}
                <div className="absolute h-30 bottom-0 inset-x-0 bg-gradient-to-t from-white via-white/20 backdrop-blur-[6px] rounded-2xl" />

                {/* Text */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-sm opacity-80">{tag}</p>

                    <h3 className="text-2xl font-semibold leading-tight">
                        {title}
                    </h3>

                    <button
                        className={`mt-3 rounded-full px-4 py-1 text-sm font-medium ${color === "blue"
                                ? "bg-blue-600"
                                : "bg-orange-500"
                            }`}
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
}