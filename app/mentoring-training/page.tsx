const trainingPills = [
  {
    title: "Design systems for AI products",
    format: "Workshop",
    blurb: "Tokens, patterns, and governance for fast-moving teams.",
  },
  {
    title: "AI patterns for analysts",
    format: "Talk",
    blurb: "Guidance, explainability, and safe automation in workflows.",
  },
  {
    title: "Workflow design critiques",
    format: "1:1 or team session",
    blurb: "Review flows and spot AI integration opportunities.",
  },
  {
    title: "Mentoring for junior designers",
    format: "1:1",
    blurb: "Portfolio feedback and growth plans.",
  },
];

export default function MentoringTrainingPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Mentoring & Training
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900">
          Sessions on design systems, AI patterns, and workflow design.
        </h1>
        <p className="text-neutral-700">
          Placeholder copy describing topics, audiences, and formats for
          mentoring and training engagements.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {trainingPills.map((pill) => (
          <article
            key={pill.title}
            className="space-y-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-neutral-900">
                {pill.title}
              </h2>
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                {pill.format}
              </span>
            </div>
            <p className="text-sm text-neutral-600">{pill.blurb}</p>
            <span className="text-sm text-neutral-500">Details coming soon</span>
          </article>
        ))}
      </section>
    </div>
  );
}
