export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-extrabold tracking-tight text-text md:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-20 rounded-full bg-brand" />
      {subtitle ? <p className="mt-5 max-w-3xl text-lg text-muted">{subtitle}</p> : null}
    </div>
  );
}
