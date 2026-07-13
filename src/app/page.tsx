import Hero from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import RoboticsTechnology from "@/components/home/RoboticsTechnology";
import CareWorkflow from "@/components/home/CareWorkflow";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import SupportCTA from "@/components/home/SupportCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <RoboticsTechnology />
      <CareWorkflow />
      <CaseStudiesSection />
      <SupportCTA />
    </>
  );
}
