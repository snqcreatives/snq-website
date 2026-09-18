type IconProps = { className?: string };

export function IconYouTube({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.6 7.2c-.23-.86-.9-1.54-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43c-.86.23-1.53.91-1.76 1.77C2 8.8 2 12 2 12s0 3.2.4 4.8c.23.86.9 1.54 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43c.86-.23 1.53-.91 1.76-1.77.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

export function IconInstagram({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconWhatsApp({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.27 4.86L2 22l5.32-1.32a9.9 9.9 0 0 0 4.72 1.2h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.83 14.1c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.06.26-3.55-.74-2.98-1.2-4.88-4.22-5.02-4.42-.14-.2-1.2-1.6-1.2-3.06 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.18-.2.75-.87.96-1.17.2-.3.4-.24.66-.15.27.1 1.73.82 2.02.97.3.15.5.22.57.34.08.13.08.72-.16 1.4Z" />
    </svg>
  );
}

export function IconLinktree({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a1.2 1.2 0 0 1 1.2 1.2v3.35l2.6-2.6a1.2 1.2 0 1 1 1.7 1.7l-2.6 2.6h3.35a1.2 1.2 0 1 1 0 2.4h-3.35l2.6 2.6a1.2 1.2 0 1 1-1.7 1.7l-2.6-2.6v3.35a1.2 1.2 0 1 1-2.4 0v-3.35l-2.6 2.6a1.2 1.2 0 1 1-1.7-1.7l2.6-2.6H5.65a1.2 1.2 0 1 1 0-2.4H9l-2.6-2.6a1.2 1.2 0 1 1 1.7-1.7l2.6 2.6V3.2A1.2 1.2 0 0 1 12 2Zm0 14.4a1.2 1.2 0 0 1 1.2 1.2v3.2a1.2 1.2 0 1 1-2.4 0v-3.2A1.2 1.2 0 0 1 12 16.4Z" />
    </svg>
  );
}

export function IconPhone({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 5c0 8.28 6.72 15 15 15l3-3.5a1.5 1.5 0 0 0-.5-2.4l-3.6-1.6a1.5 1.5 0 0 0-1.7.4l-1 1.2a11.5 11.5 0 0 1-5.3-5.3l1.2-1a1.5 1.5 0 0 0 .4-1.7L9.9 2.5A1.5 1.5 0 0 0 7.5 2L4 5Z"
      />
    </svg>
  );
}

export function IconMail({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconArrowUpRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}


export const socialIconMap: Record<string, (props: IconProps) => React.JSX.Element> = {
  YouTube: IconYouTube,
  Instagram: IconInstagram,
  WhatsApp: IconWhatsApp,
  Linktree: IconLinktree,
};
