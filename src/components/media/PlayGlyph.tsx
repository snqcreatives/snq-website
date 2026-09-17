export default function PlayGlyph({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-1/2 w-1/2 translate-x-[6%]">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}
