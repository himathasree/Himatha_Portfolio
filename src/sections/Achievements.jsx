import SectionHeading from "../components/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="section-space">
      <div className="container-base">
        <SectionHeading
          title="Achievements"
          subtitle="Add your awards, certifications, hackathon wins, and academic recognitions here."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article className="glass rounded-2xl p-6">
            <p className="text-sm text-muted">2026</p>
            <h3 className="mt-2 text-2xl font-bold text-text">Achievement Title</h3>
            <p className="mt-3 text-muted">Briefly describe this achievement and its context.</p>
          </article>

          <article className="glass rounded-2xl p-6">
            <p className="text-sm text-muted">2025</p>
            <h3 className="mt-2 text-2xl font-bold text-text">Certification Title</h3>
            <p className="mt-3 text-muted">Add details about the certificate or competition result.</p>
          </article>

          <article className="glass rounded-2xl p-6">
            <p className="text-sm text-muted">2024</p>
            <h3 className="mt-2 text-2xl font-bold text-text">Award Title</h3>
            <p className="mt-3 text-muted">Summarize the impact or significance in one or two lines.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
