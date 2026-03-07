import ImageTextSection from "@/components/ImageTextSection";

import visionImage from "@/images/vision.png"
import missionImage from "@/images/mission.png"
import philosophyImage from "@/images/philosophy.png"
import HeroFrame from "@/components/HeroFrame";

export default function Vision() {
    return (
        <>
        <HeroFrame
                        title={
                            <>
                                Vision | Mission |
                                <br />
                                Philosophy
                            </>
                        }
                    />

        <ImageTextSection
        title="Our Vision"
        description="To reimagine management education as a human, ethical, and creative enterprise one that unites technology, design, and consciousness to shape a more thoughtful, equitable, and sustainable world."
        image={visionImage}
      />
      <ImageTextSection
        title="Our Mission"
        description="To cultivate reflective thinkers, responsible leaders, and creative problem-solvers  through an education that integrates intellect, empathy, and enterprise."
        image={missionImage}
      />
      <ImageTextSection
        title="Our Philosophy"
        description="We were born out of a set of complex, uncomfortable, and necessary questions. These  questions arose from a space of questioning the status quo."
        image={philosophyImage}
      />
        </>
    );
}