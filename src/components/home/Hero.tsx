import Image from "next/image";
import Link from "next/link";
import { getSite, getHeroSeries } from "@/lib/content";
import { gradientFromString } from "@/lib/palette";
import { IconYouTube, IconArrowUpRight } from "@/components/ui/icons";

export default function Hero() {
  const site = getSite();
  const featured = getHeroSeries();
  const heroImage = featured.episodes[0]?.thumbnail;

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      {heroImage ? (
        <Image
          src={heroImage}
          alt={featured.title}
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ backgroundImage: gradientFromString(featured.title) }}
        />
      )}
      {/* Legibility gradients, streaming-catalog style */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/10 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-20 sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium tracking-widest text-accent uppercase backdrop-blur-sm">
          Featured · {featured.genre ?? "Series"}
        </span>

        <h1 className="max-w-2xl font-display text-6xl leading-[0.95] tracking-wide text-foreground sm:text-7xl lg:text-8xl">
          {site.studioName}
        </h1>

        <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
          {site.hero.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={site.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <IconYouTube className="h-5 w-5" />
            Watch on YouTube
          </a>

          <Link
            href={`/work/${featured.slug}`}
            className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-foreground/40"
          >
            {featured.title}
            <IconArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
