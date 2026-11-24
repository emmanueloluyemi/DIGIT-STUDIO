import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { IntroStatementSection } from "@/components/home/IntroStatementSection";
import { InteractiveStatementSection } from "@/components/home/InteractiveStatementSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SoloOrTeamSection } from "@/components/home/SoloOrTeamSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ToolsMarqueeSection } from "@/components/home/ToolsMarqueeSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <IntroStatementSection />
      <InteractiveStatementSection />
      <ServicesSection />
      <SoloOrTeamSection />
      <StatsSection />
      <ToolsMarqueeSection />
      <ProcessSection />
      <FaqSection limit={4} />
      <ContactSection />
    </>
  );
}
