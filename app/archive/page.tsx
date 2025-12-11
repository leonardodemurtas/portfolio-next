const archiveItems = [
  {
    title: "Legacy dashboard exploration",
    description: "Early experiment for portfolio owners.",
    tag: "legacy",
  },
  {
    title: "Risk signals concepts",
    description: "Concept cards for negative event surfacing.",
    tag: "experiment",
  },
  {
    title: "Workflow assistant v1",
    description: "First pass at embedded assistant patterns.",
    tag: "concept",
  },
  {
    title: "Data quality quick fixes",
    description: "Utility flows to unblock analysts quickly.",
    tag: "legacy",
  },
  {
    title: "Voice handoff trial",
    description: "Lightweight trial for voice summaries.",
    tag: "experiment",
  },
  {
    title: "Mobile triage sketch",
    description: "Sketches for on-call decision support.",
    tag: "concept",
  },
];

export default function ArchivePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Archive
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900">
          Selected earlier work and experiments.
        </h1>
        <p className="text-neutral-700">
          Lightweight cards that keep focus on the hero cases while showing
          breadth of older explorations.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {archiveItems.map((item) => (
          <article
            key={item.title}
            className="space-y-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
          >
            <div className="h-32 rounded-lg bg-neutral-100" />
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">
                {item.title}
              </h2>
              <p className="text-sm text-neutral-600">{item.description}</p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
              {item.tag}
            </span>
          </article>
        ))}
      </section>
    </div>
  );
}
