
export function Clients() {
    return (
        <section className="py-20 px-6 bg-background">
            <div className="max-w-7xl mx-auto space-y-12 text-center">
                <h2 className="text-2xl font-medium text-white">Awesome Clients</h2>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Since we don't have actual SVG assets, I'll use text placeholders styled like logos */}
                    <span className="text-xl font-bold text-white tracking-tight">AgencyAnalytics</span>
                    <span className="text-xl font-bold text-white tracking-widest uppercase">GBG</span>
                    <span className="text-xl font-bold text-white italic">aspire</span>
                    <span className="text-xl font-semibold text-white">Synergita</span>
                </div>
            </div>
        </section>
    );
}
