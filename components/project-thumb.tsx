import Image from "next/image";

interface ProjectThumbProps {
  name: string;
  image?: string;
  /** large = bandeau de carte phare ; sm = pastille de l'index. */
  size?: "sm" | "lg";
  /** cover pour une capture d'écran, contain pour un logo. */
  fit?: "cover" | "contain";
}

const initials = (name: string) =>
  name
    .split(/[\s—-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

/** Visuel d'un projet : image réelle si elle existe, sinon monogramme. */
export function ProjectThumb({ name, image, size = "sm", fit = "contain" }: ProjectThumbProps) {
  return (
    <div className={`thumb thumb-${size}${fit === "cover" ? " thumb-cover" : ""}`}>
      {image ? (
        <Image
          src={image}
          alt={`Visuel du projet ${name}`}
          fill
          sizes={size === "lg" ? "(max-width: 760px) 100vw, 560px" : "56px"}
          style={{ objectFit: fit }}
          unoptimized={image.endsWith(".png")}
        />
      ) : (
        <span className="thumb-mono" aria-hidden="true">{initials(name)}</span>
      )}
    </div>
  );
}
