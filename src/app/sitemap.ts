import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { JOURNAL_POSTS } from "@/data/journal";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.siteUrl.replace(/\/$/, "");
  // Use real deployment ISO date string for static crawl determinism
  const lastMod = new Date("2026-11-24T00:00:00.000Z");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/how-we-work`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/journal`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/accessibility`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const journalRoutes: MetadataRoute.Sitemap = JOURNAL_POSTS.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...journalRoutes];
}
