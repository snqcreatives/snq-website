import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SeriesCard from "@/components/work/SeriesCard";
import { getAllSeries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  const allSeries = getAllSeries();

  return (
    <div className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Catalog"
          title="Our Work"
          description="Every series, short film, and documentary we've made, all in one place."
        />

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {allSeries.map((series) => (
            <SeriesCard key={series.slug} series={series} />
          ))}
        </div>
      </Container>
    </div>
  );
}
