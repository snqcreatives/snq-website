import { socialIconMap } from "@/components/ui/icons";
import type { SiteContent } from "@/lib/types";

const platformStyles: Record<string, string> = {
  YouTube: "bg-[#FF0000] hover:brightness-110",
  Instagram:
    "bg-[linear-gradient(45deg,_#f09433_0%,_#e6683c_25%,_#dc2743_50%,_#cc2366_75%,_#bc1888_100%)] hover:brightness-110",
  WhatsApp: "bg-[#25D366] hover:brightness-110",
  Linktree: "bg-black hover:bg-neutral-800",
};

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
            className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-all ${
              platformStyles[social.platform] ?? "bg-accent hover:bg-accent-hover"
            }`}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
