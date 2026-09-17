/** Deterministic hue from a string, used to color media placeholders consistently per title. */
export function hueFromString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % 360;
}

export function gradientFromString(value: string): string {
  const hue = hueFromString(value);
  const hue2 = (hue + 40) % 360;
  return `linear-gradient(135deg, hsl(${hue} 70% 18%) 0%, hsl(${hue2} 65% 10%) 100%)`;
}

export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}
