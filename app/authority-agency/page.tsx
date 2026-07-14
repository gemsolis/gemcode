import type { Metadata } from "next";
import Navbar from "@/components/authority-agency/Navbar";
import Hero from "@/components/authority-agency/Hero";
import TrustBar from "@/components/authority-agency/TrustBar";
import Resources from "@/components/authority-agency/Resources";
import ProblemIntro from "@/components/authority-agency/ProblemIntro";
import RealIssue from "@/components/authority-agency/RealIssue";
import AuthorityProfiles from "@/components/authority-agency/AuthorityProfiles";
import HowWeHelp from "@/components/authority-agency/HowWeHelp";
import OurApproach from "@/components/authority-agency/OurApproach";
import EventHighlights from "@/components/authority-agency/EventHighlights";
import Testimonials from "@/components/authority-agency/Testimonials";
import AboutFounder from "@/components/authority-agency/AboutFounder";
import FinalCta from "@/components/authority-agency/FinalCta";
import Footer from "@/components/authority-agency/Footer";

export const metadata: Metadata = {
  title: "Authority Agency",
  description:
    "Turn your expertise into speaking opportunities that build lasting authority, impact, and income.",
};

export default function AuthorityAgencyPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Resources />
      <ProblemIntro />
      <RealIssue />
      <AuthorityProfiles />
      <HowWeHelp />
      <OurApproach />
      <EventHighlights />
      <Testimonials />
      <AboutFounder />
      <FinalCta />
      <Footer />
    </>
  );
}
