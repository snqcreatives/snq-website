import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/team/TeamCard";
import { getAllTeamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  const team = getAllTeamMembers();

  return (
    <div className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Crew"
          title="Team"
          description="The people behind every shoot, cut, and upload."
        />

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </div>
  );
}
