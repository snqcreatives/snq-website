import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getSite } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const site = getSite();

  return (
    <div className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={`Since ${site.founded}`} title="About Us" />

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl tracking-wide text-foreground">
              Our Vision
            </h3>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/90">
              {site.about.vision}
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-border pt-16 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl tracking-wide text-foreground">
              Founding Story
            </h3>
          </div>
          <div className="space-y-6 lg:col-span-2">
            {site.about.story.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
