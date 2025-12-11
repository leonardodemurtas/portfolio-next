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
                <h2 className="text-2xl font-medium mb-4">Projects archive</h2>
                <p className="text-neutral-400 max-w-3xl text-lg">
                    With over a decade in digital design, I’ve worked across a wide mix of projects. Here are a few—early ideas that later grew into larger work, shown here for their outcomes rather than the process behind them.
                </p>
                <div className="mt-4">
                    <Link href="/archive" className="text-sm text-neutral-400 hover:text-white underline underline-offset-4">View all in Archive →</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {archiveItems.slice(0, 6).map((item, idx) => (
                    <Link
                        key={idx}
                        href={`/archive/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="block p-6 rounded-xl bg-neutral-900/50 hover:bg-neutral-900 border border-white/5 transition-colors"
                    >
                        <h3 className="font-medium text-lg">{item}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}
