export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  duration?: string;
  youtubeUrl: string;
  thumbnail?: string;
}

export interface Series {
  slug: string;
  title: string;
  genre?: string;
  description: string;
  poster?: string;
  featured?: boolean;
  playlistUrl?: string;
  episodes: Episode[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteContent {
  studioName: string;
  shortName: string;
  tagline: string;
  founded: string;
  youtubeChannel: string;
  nav: NavLink[];
  hero: {
    featuredSeriesSlug: string;
    subheadline: string;
  };
  about: {
    vision: string;
    story: string[];
  };
  contact: {
    phone: string;
    email: string;
    instagram: string;
    linktree: string;
    whatsapp: string;
  };
  socials: { platform: string; url: string }[];
}
