const featuredItems = [
  {
    title: "Contextual patterns",
    description: "How AI surfaces guidance without breaking expert workflows.",
  },
  {
    title: "Decision support",
    description: "Pairing AI reasoning with human checks in risk decisions.",
  },
  {
    title: "AI-assisted workflows",
    description: "Assistants, overlays, and explainers for analysts.",
  },
];

export default function AiPatternsWritingPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
          AI Patterns & Writing
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900">
          Documenting AI UX patterns and writing about applied AI.
        </h1>
        <p className="text-neutral-700">
          Placeholder copy for short essays on contextual integration, decision
          support tools, and AI-assisted workflows for experts.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {featuredItems.map((item) => (
          <article
            key={item.title}
            className="space-y-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-neutral-900">
              {item.title}
            </h2>
            <p className="text-sm text-neutral-600">{item.description}</p>
            <span className="text-sm text-neutral-700">Link coming soon</span>
          </article>
        ))}
      </section>
    </div>
  );
}
