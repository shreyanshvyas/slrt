import AdvisoryMembers from "@/components/AdvisoryMembers";
import HeroFrame from "@/components/HeroFrame";
import ImageContentSection from "@/components/ImageContentSection";
import advisoryImage from "@/images/advisory.png"

export default function AcademicFramework() {
    return (
        <>
            <HeroFrame
                title={"Advisory Board"}
            />
            <ImageContentSection
                title="The Advisory Board of the Shree L.R. Tiwari School of Business Management"
                description="The Advisory Board helps the School stay aligned with its founding philosophy, which holds that  management is not merely about commerce or control, but about reflection, responsibility, and  relevance. It assists in co-creating the long-term vision of SLRTSBM, translating its ideals of  dialogic, inquiry-based learning into tangible academic and institutional practices. By bridging  perspectives from diverse fields, the Board ensures that the School’s programs, pedagogies, and  partnerships remain contemporary and human-centred."
                image={advisoryImage}
                primaryButton="See More"
                secondaryButton="Learn More"
            />
            <AdvisoryMembers />
        </>
    );
}