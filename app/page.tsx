import Link from "next/link";

const heroTiles = [
  {
    title: "Design System for Enterprise Risk",
    href: "/case-studies",
    description: "Multi-product system with AI-ready patterns and templates.",
  },
  {
    title: "Credit Portfolio Monitoring",
    href: "/case-studies",
    description: "Surfacing negative events, risk signals, and timelines.",
  },
  {
    title: "AI Pattern Case",
    href: "/case-studies",
    description: "Contextual AI patterns woven into existing workflows.",
  },
];

const stats = [
  { label: "Years experience", value: "10+" },
  { label: "Products shipped", value: "7" },
  { label: "Domain focus", value: "Risk · Credit · B2B SaaS" },
  { label: "Location", value: "Remote-first, EU/US friendly" },
];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          AI Product Designer (UX/UI)
        </p>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900">
          I build AI-ready design systems and decision tools for enterprise risk
          and credit teams.
        </h1>
        <p className="text-lg text-neutral-700">
          I combine reusable patterns with AI tooling that speeds research,
          guides decisions, and surfaces insights for analysts, credit managers,
          and portfolio owners.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {heroTiles.map((tile) => (
          <Link
            key={tile.title}
            href={tile.href}
            className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-neutral-900">
              {tile.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">{tile.description}</p>
          </Link>
        ))}
      </section>

      <section className="flex flex-wrap gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex min-w-[160px] flex-col rounded-lg bg-neutral-50 px-4 py-3"
          >
            <span className="text-sm text-neutral-500">{item.label}</span>
            <span className="text-lg font-semibold text-neutral-900">
              {item.value}
            </span>
          </div>
        ))}
      </section>

      <section className="space-y-3 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h3 className="text-xl font-semibold text-neutral-900">How I work</h3>
        <p className="text-neutral-700">
          Systems-first approach that pairs tokens, components, and templates
          with AI patterns. I keep workflows explainable for experts while
          making room for automation, guidance, and faster decision support.
        </p>
        <div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            View case studies
          </Link>
        </div>
      </section>
    </div>
  );
}
