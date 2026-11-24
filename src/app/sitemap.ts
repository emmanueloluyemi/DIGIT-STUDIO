import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/projects";
import { journalArticles } from "@/content/journal";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const lastMod = new Date("2026-11-24T00:00:00.000Z");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: lastMod, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/work`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/journal`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/accessibility`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const journalRoutes: MetadataRoute.Sitemap = journalArticles.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes, ...journalRoutes];
}
