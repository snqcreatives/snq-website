import Link from "next/link";
import Hero from "@/components/home/Hero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SeriesCard from "@/components/work/SeriesCard";
import { getAllSeries } from "@/lib/content";
import { IconArrowUpRight } from "@/components/ui/icons";

export default function Home() {
  const allSeries = getAllSeries();

  return (
    <>
      <Hero />

      <section className="py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Browse"
              title="Our Work"
              description="Series, shorts, and documentaries currently in the catalog."
            />
            <Link
              href="/work"
              className="flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              View all
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {allSeries.slice(0, 5).map((series) => (
              <SeriesCard key={series.slug} series={series} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <SectionHeading
            eyebrow="About Us"
            title="Small studio. Real craft."
            description="We're a lean crew that shoots, edits, and ships everything ourselves — no ghost crews, no outsourced edits."
          />
          <Link
            href="/about"
            className="flex shrink-0 items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Our Story
            <IconArrowUpRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
