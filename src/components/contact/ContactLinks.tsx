import {
  IconPhone,
  IconMail,
  IconInstagram,
  IconLinktree,
  IconWhatsApp,
  IconArrowUpRight,
} from "@/components/ui/icons";
import type { SiteContent } from "@/lib/types";

type IconComponent = (props: { className?: string }) => React.JSX.Element;

export default function ContactLinks({
  contact,
}: {
  contact: SiteContent["contact"];
}) {
  const items: {
    label: string;
    value: string;
    href: string;
    icon: IconComponent;
    external?: boolean;
  }[] = [
    {
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
      icon: IconPhone,
    },
    {
      label: "Email",
      value: contact.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`,
      icon: IconMail,
      external: true,
    },
    {
      label: "Instagram",
      value: "@snqcreatives",
      href: contact.instagram,
      icon: IconInstagram,
      external: true,
    },
    {
      label: "WhatsApp",
      value: "Message us",
      href: contact.whatsapp,
      icon: IconWhatsApp,
      external: true,
    },
    {
      label: "Linktree",
      value: "All our links",
      href: contact.linktree,
      icon: IconLinktree,
      external: true,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(({ label, value, href, icon: Icon, external }) => (
        <a
          key={href}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group flex items-center gap-4 rounded-xl bg-surface p-4 ring-1 ring-border transition-colors hover:ring-accent/60"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-accent">
            <Icon className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs tracking-wide text-muted uppercase">
              {label}
            </span>
            <span className="block truncate font-medium text-foreground">
              {value}
            </span>
          </span>
          <IconArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
        </a>
      ))}
    </div>
  );
}
