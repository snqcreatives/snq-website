import Link from "next/link";
import MediaFrame from "@/components/media/MediaFrame";
import type { Series } from "@/lib/types";

export default function SeriesCard({ series }: { series: Series }) {
  return (
    <Link href={`/work/${series.slug}`} className="group block">
      <div className="overflow-hidden rounded-xl ring-1 ring-border transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-accent/60 group-hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]">
        <MediaFrame
          src={series.poster || undefined}
          alt={series.title}
          label={series.title}
          aspect="poster"
        />
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="line-clamp-1 font-display text-lg tracking-wide text-foreground">
          {series.title}
        </h3>
        {series.genre && (
          <span className="block text-[11px] tracking-wide text-muted uppercase">
            {series.genre}
          </span>
        )}
        <p className="line-clamp-2 text-sm text-muted">{series.description}</p>
      </div>
    </Link>
  );
}
