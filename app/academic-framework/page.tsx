import FeaturedProgram from "@/components/FeaturedProgram";
import HeroFrame from "@/components/HeroFrame";
import ImageContentSection from "@/components/ImageContentSection";
import course from "@/images/course.jpg"
export default function AcademicFramework() {
    return (
        <>
            <HeroFrame
                title={
                    <>
                        Academic
                        <br />
                        Framework
                    </>
                }
            />
            <ImageContentSection
                    title="Explore Our Courses"
                    description="Join the best academic programs and enhance your knowledge."
                    image={course}
                    primaryButton="Learn More"
                    secondaryButton="Enroll Now"
                  />
                  <FeaturedProgram />
        </>
    );
}