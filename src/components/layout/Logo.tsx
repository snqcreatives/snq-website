import Image from "next/image";
import Link from "next/link";
import { getSite } from "@/lib/content";

export default function Logo() {
  const site = getSite();

  return (
    <Link
      href="/"
      className="group flex items-center transition-transform duration-300 group-hover:scale-105"
      aria-label={`${site.studioName} home`}
    >
      <Image
        src="/logo.png"
        alt={site.studioName}
        width={632}
        height={678}
        priority
        className="h-11 w-auto shrink-0"
      />
    </Link>
  );
}
