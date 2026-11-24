import React from "react";
import type { Metadata } from "next";
import { ProblemHero } from "@/components/home/ProblemHero";
import { FeaturedCase } from "@/components/home/FeaturedCase";
import { ProjectRunTimeline } from "@/components/home/ProjectRunTimeline";
import { FounderDesk } from "@/components/home/FounderDesk";
import { ProofBand } from "@/components/home/ProofBand";
import { RecentNotes } from "@/components/home/RecentNotes";
import { DirectContact } from "@/components/home/DirectContact";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <ProblemHero />
      <FeaturedCase />
      <ProjectRunTimeline />
      <FounderDesk />
      <ProofBand />
      <RecentNotes />
      <DirectContact />
    </>
  );
}
