const TECHS = [
  "Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Spring Boot", "React",
  "Redis", "MySQL", "MongoDB", "Nginx", "PM2", "Tailwind CSS", "TanStack Query",
];

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <div className="mq-group" aria-hidden={hidden || undefined}>
      {TECHS.map((t) => (
        <span key={t} style={{ display: "contents" }}>
          <span>{t}</span>
          <span className="sq" />
        </span>
      ))}
    </div>
  );
}

/** Bandeau défilant des technologies ; s'arrête au survol. */
export function Marquee() {
  return (
    <div className="mq" aria-label="Technologies utilisées">
      <div className="mq-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
