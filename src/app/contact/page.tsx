import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactLinks from "@/components/contact/ContactLinks";
import ContactForm from "@/components/contact/ContactForm";
import { getSite } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const site = getSite();

  return (
    <div className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact"
          description="Have a project in mind, or just want to say hello? Reach us however's easiest."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ContactLinks contact={site.contact} />

          <div>
            <h3 className="mb-4 font-display text-2xl tracking-wide text-foreground">
              Send a Message
            </h3>
            <ContactForm email={site.contact.email} />
          </div>
        </div>
      </Container>
    </div>
  );
}
