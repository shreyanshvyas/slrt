import EducationNetworkStats from "@/components/EducationNetworkStats";
import IntroVideo from "@/components/IntroVideo";
import { ArrowRight } from "lucide-react";
import HeroFrame from "@/components/HeroFrame";
import HeroFloatingCard from "@/components/HeroFloatingCard";
import Programs from "@/components/Programs";
import IndustryLeaders from "@/components/IndustryLeaders";
import LensesSection from "@/components/LensesSection";
import FAQSection from "@/components/FAQSection";
import ProspectusCTA from "@/components/ProspectusCTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <HeroFrame
        title={
          <>
            Not Your Average
            <br />
            B-School
          </>
        }
        rightContent={
          <>
            <p className="max-w-sm text-lg md:text-xl text-slate-300 md:text-right">
              Education must be Liberate,
              <br />
              Not Domesticate
            </p>

            <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
              ENROLL NOW <ArrowRight className="h-4 w-4" />
            </button>
          </>
        }
      />
      <HeroFloatingCard />
      <IntroVideo />
      <Programs />
      <IndustryLeaders />
      <LensesSection />
      <ProspectusCTA />
      <FAQSection />
      <EducationNetworkStats />
      <FAQ />
    </>
  );
}