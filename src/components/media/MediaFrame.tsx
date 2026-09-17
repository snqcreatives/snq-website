import Image from "next/image";
import { gradientFromString } from "@/lib/palette";

type Aspect = "poster" | "video";

const aspectClass: Record<Aspect, string> = {
  poster: "aspect-[2/3]",
  video: "aspect-video",
};

interface MediaFrameProps {
  src?: string;
  alt: string;
  label: string;
  aspect: Aspect;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function MediaFrame({
  src,
  alt,
  label,
  aspect,
  className = "",
  sizes,
  priority,
}: MediaFrameProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-surface ${aspectClass[aspect]} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(min-width: 1024px) 25vw, 50vw"}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full items-end p-4"
          style={{ backgroundImage: gradientFromString(label) }}
        >
          <span className="line-clamp-3 font-display text-lg leading-tight text-white/80 uppercase tracking-wide">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
