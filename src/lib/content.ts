import siteJson from "@/content/site.json";
import seriesJson from "@/content/series.json";
import teamJson from "@/content/team.json";
import type { SiteContent, Series, TeamMember } from "@/lib/types";

const site = siteJson as SiteContent;
const series = seriesJson as Series[];
const team = teamJson as TeamMember[];

export function getSite(): SiteContent {
  return site;
}

export function getAllSeries(): Series[] {
  return series;
}

export function getFeaturedSeries(): Series[] {
  return series.filter((s) => s.featured);
}

export function getSeriesBySlug(slug: string): Series | undefined {
  return series.find((s) => s.slug === slug);
}

export function getHeroSeries(): Series {
  const slug = site.hero.featuredSeriesSlug;
  return getSeriesBySlug(slug) ?? series[0];
}

export function getAllTeamMembers(): TeamMember[] {
  return team;
}
