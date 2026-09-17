export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <span className="mb-2 block text-xs font-medium tracking-widest text-accent uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted">{description}</p>
      )}
    </div>
  );
}
