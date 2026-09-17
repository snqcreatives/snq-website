"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const from = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer"
    );
    setStatus("sent");
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder-muted outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className={inputClass}
        />
      </div>
      <textarea
        name="message"
        placeholder="Tell us about your project…"
        required
        rows={5}
        className={inputClass}
      />
      <button
        type="submit"
        className="w-fit rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        Send Message
      </button>
      {status === "sent" && (
        <p className="text-sm text-muted">
          Opening your email client to send this along — thanks for reaching out.
        </p>
      )}
    </form>
  );
}
