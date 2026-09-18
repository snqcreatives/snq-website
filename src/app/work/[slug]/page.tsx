import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import MediaFrame from "@/components/media/MediaFrame";
import EpisodeCard from "@/components/work/EpisodeCard";
import { getAllSeries, getSeriesBySlug } from "@/lib/content";
import { IconArrowUpRight } from "@/components/ui/icons";

export function generateStaticParams() {
  return getAllSeries().map((series) => ({ slug: series.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);
  return { title: series?.title ?? "Series not found" };
}

export default async function SeriesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);

  if (!series) notFound();

  return (
    <div className="pb-20 sm:pb-28">
      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-end">
          <div className="w-40 shrink-0 sm:w-52 lg:w-full">
            <div className="overflow-hidden rounded-xl ring-1 ring-border">
              <MediaFrame
                src={series.poster || undefined}
                alt={series.title}
                label={series.title}
                aspect="poster"
                priority
              />
            </div>
          </div>

          <div>
            <Link
              href="/work"
              className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              ← Back to Work
            </Link>
            {series.genre && (
              <span className="mb-3 block text-xs font-medium tracking-widest text-accent uppercase">
                {series.genre}
              </span>
            )}
            <h1 className="font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {series.title}
            </h1>
            <p className="mt-4 max-w-2xl text-muted">{series.description}</p>
            <p className="mt-4 text-sm text-muted">
              {series.episodes.length} episode
              {series.episodes.length === 1 ? "" : "s"}
            </p>
          </div>
        </Container>
      </section>

      <Container className="mt-12">
        <h2 className="font-display text-2xl tracking-wide text-foreground">
          Episodes
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {series.episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>

        <a
          href={series.playlistUrl || series.episodes[0]?.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          See the full series on YouTube
          <IconArrowUpRight className="h-4 w-4" />
        </a>
      </Container>
    </div>
  );
}
