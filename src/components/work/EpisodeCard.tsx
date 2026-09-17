import MediaFrame from "@/components/media/MediaFrame";
import PlayGlyph from "@/components/media/PlayGlyph";
import { IconYouTube, IconArrowUpRight } from "@/components/ui/icons";
import type { Episode } from "@/lib/types";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <a
      href={episode.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl bg-surface ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:ring-accent/60 sm:flex-row"
    >
      <div className="relative sm:w-64 sm:shrink-0">
        <MediaFrame
          src={episode.thumbnail || undefined}
          alt={episode.title}
          label={episode.title}
          aspect="video"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <PlayGlyph className="h-12 w-12" />
        </div>
        {episode.duration && (
          <span className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 py-0.5 text-xs text-white">
            {episode.duration}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2 p-4">
        <span className="text-xs font-medium tracking-widest text-accent uppercase">
          Episode {episode.episodeNumber}
        </span>
        <h3 className="font-display text-xl tracking-wide text-foreground">
          {episode.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted">{episode.description}</p>
        <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-foreground">
          <IconYouTube className="h-4 w-4 text-accent" />
          Watch on YouTube
          <IconArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}
