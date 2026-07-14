import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <Features />
      <Services />
      <Process />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
