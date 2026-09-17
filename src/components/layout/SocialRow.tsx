import { socialIconMap } from "@/components/ui/icons";
import type { SiteContent } from "@/lib/types";

export default function SocialRow({
  socials,
  className = "",
}: {
  socials: SiteContent["socials"];
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => {
        const Icon = socialIconMap[social.platform];
        if (!Icon) return null;
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
