import Link from "next/link";
import Logo from "@/components/layout/Logo";
import SocialRow from "@/components/layout/SocialRow";
import { getSite } from "@/lib/content";

export default function Footer() {
  const site = getSite();
  const year = new Date().getFullYear();

  return (
    <footer className="bar-light border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted">{site.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {site.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <SocialRow socials={site.socials} />
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted sm:px-6 lg:px-8">
        © {year} {site.studioName}. All rights reserved.
      </div>
    </footer>
  );
}
