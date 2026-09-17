import Avatar from "@/components/media/Avatar";
import type { TeamMember } from "@/lib/types";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group">
      <Avatar
        src={member.photo || undefined}
        name={member.name}
        className="ring-1 ring-border transition-all duration-300 group-hover:ring-accent/60"
      />
      <div className="mt-3">
        <h3 className="font-display text-lg tracking-wide text-foreground">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-accent">{member.role}</p>
        <p className="mt-1 text-sm text-muted">{member.bio}</p>
      </div>
    </div>
  );
}
