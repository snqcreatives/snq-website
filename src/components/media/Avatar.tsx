import Image from "next/image";
import { gradientFromString, initials } from "@/lib/palette";

interface AvatarProps {
  src?: string;
  name: string;
  className?: string;
}

export default function Avatar({ src, name, className = "" }: AvatarProps) {
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-surface ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(min-width: 1024px) 20vw, 40vw"
          className="object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ backgroundImage: gradientFromString(name) }}
        >
          <span className="font-display text-4xl text-white/85">
            {initials(name)}
          </span>
        </div>
      )}
    </div>
  );
}
