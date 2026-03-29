export default function SectionHeading({
  title,
  subtitle,
  subtitleFullWidth = false,
  compact = false,
}) {
  return (
    <div className={compact ? "mb-4" : "mb-10"}>
      <h2 className="text-3xl font-extrabold tracking-tight text-text md:text-4xl text-left">{title}</h2>
      <div className="mt-3 h-1 w-20 rounded-full bg-brand" />
      {subtitle ? (
        <p
          className={`text-left text-lg text-muted leading-relaxed ${compact ? "mt-3" : "mt-5"} ${
            subtitleFullWidth ? "w-full" : "max-w-3xl"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
