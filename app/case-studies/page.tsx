const sections = [
  "Snapshot",
  "Problem & Context",
  "System / Solution",
  "AI Angle",
  "Key Flows & Screens",
  "Impact",
  "What I’d Improve Next",
  "Assets",
];

export default function CaseStudiesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Case Studies
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900">
          Three hero case studies, one shared structure.
        </h1>
        <p className="text-neutral-700">
          Each case covers the product, audience, my role, outcomes, and how AI
          patterns shaped the workflows.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          "Design System for Enterprise Risk",
          "Credit Portfolio Monitoring",
          "AI Pattern Case",
        ].map((title) => (
          <article
            key={title}
            className="space-y-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
            <p className="text-sm text-neutral-600">
              Placeholder content for the shared case study template. Each
              section below will be filled with real details.
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">Template</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section}
              className="rounded-lg bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
            >
              {section}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
