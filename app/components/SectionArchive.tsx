import Link from "next/link";

const archiveItems = [
    "PowerBiz Company Sheet",
    "Hackathon DigitalBrain",
    "QueryBuilder",
    "ESG Verify Platform",
    "Music player",
    "Beacon locator",
    "Customer experience research",
    "Commission plan",
    "Donut worry",
    "Leadboard",
    "Home automation system",
    "Onboarding process"
];

export function SectionArchive() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="mb-12">
                <h2 className="text-2xl font-medium mb-4 text-foreground">Projects archive</h2>
                <p className="text-neutral-600 max-w-3xl text-lg">
                    With over a decade in digital design, I’ve worked across a wide mix of projects. Here are a few—early ideas that later grew into larger work, shown here for their outcomes rather than the process behind them.
                </p>
                <div className="mt-4">
                    <Link href="/archive" className="text-sm text-neutral-500 hover:text-foreground underline underline-offset-4">View all in Archive →</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {archiveItems.slice(0, 6).map((item, idx) => (
                    <Link
                        key={idx}
                        href={`/archive/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="block p-6 rounded-xl bg-[var(--brand-ancient)] hover:bg-[var(--brand-ancient)]/80 border border-black/5 hover:border-black/10 transition-colors"
                    >
                        <h3 className="font-medium text-lg text-foreground">{item}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}
