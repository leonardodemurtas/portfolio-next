import Link from "next/link";

const videos = [
    "Understanding Color Theory",
    "Creating Beautiful Gradients",
    "Mastering Midpoints in Shapes with Sketch"
];

export function SectionTraining() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto bg-neutral-50 rounded-3xl my-20">
            <div className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-foreground">Training Video Pills</h2>
                <p className="text-neutral-600 max-w-3xl text-lg">
                    This section gathers short training videos I created for a mentorship program—quick, practical takes on design theory and tools, meant to help younger designers grow their craft.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videos.map((vid, idx) => (
                    <Link key={idx} href={`/training/${vid.toLowerCase().replace(/ /g, "-")}`} className="group block space-y-3">
                        <div className="aspect-video bg-white rounded-lg overflow-hidden border border-black/5 group-hover:border-black/20 transition-colors flex items-center justify-center shadow-sm">
                            <span className="text-neutral-500 text-sm">Video Preview</span>
                        </div>
                        <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">{vid}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}
