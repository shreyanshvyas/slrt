import HeroFrame from "@/components/HeroFrame";
import ScholarshipIntro from "@/components/ScholarshipIntro";
import ScholarshipSection from "@/components/ScholarshipSection";

export default function Page () {
    return (
        <>
        <HeroFrame
                        title={"Scholarships"}
                    />
        <ScholarshipIntro />
        <ScholarshipSection />
        </>
    );
}