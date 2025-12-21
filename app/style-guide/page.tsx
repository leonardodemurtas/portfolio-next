import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Style Guide | Leonardo",
    description: "Design guidelines for the portfolio including typography, colors, border radius, spacing, and margins.",
};

export default function StyleGuidePage() {
    return (
        <div className="w-full pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-[90rem] mx-auto">
                {/* Page Header */}
                <header className="mb-16">
                    <p className="text-neutral-500 text-sm font-medium tracking-[0.1em] uppercase mb-4">
                        Design Guidelines
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-tight mb-6">
                        Style Guide
                    </h1>
                    <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
                        This page documents the design system used throughout the portfolio, including typography, colors, border radius, spacing, and margin values.
                    </p>
                </header>

                {/* Typography Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-medium text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                        Typography
                    </h2>

                    {/* Font Families */}
                    <div className="mb-12">
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Font Families</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-neutral-50 rounded-2xl">
                                <p className="text-2xl font-medium mb-2" style={{ fontFamily: '"Inter", sans-serif' }}>
                                    Inter
                                </p>
                                <p className="text-sm text-neutral-500">Primary font</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded mt-2 inline-block">
                                    font-family: &quot;Inter&quot;
                                </code>
                            </div>
                            <div className="p-6 bg-neutral-50 rounded-2xl">
                                <p className="text-2xl font-medium mb-2 font-sans">
                                    Geist Sans
                                </p>
                                <p className="text-sm text-neutral-500">Sans-serif alternative</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded mt-2 inline-block">
                                    --font-geist-sans
                                </code>
                            </div>
                            <div className="p-6 bg-neutral-50 rounded-2xl">
                                <p className="text-2xl font-medium mb-2 font-mono">
                                    Geist Mono
                                </p>
                                <p className="text-sm text-neutral-500">Monospace font</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded mt-2 inline-block">
                                    --font-geist-mono
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Font Sizes */}
                    <div className="mb-12">
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Font Sizes</h3>
                        <div className="space-y-4">
                            <div className="flex items-baseline gap-4 p-4 bg-neutral-50 rounded-xl">
                                <span className="text-sm text-neutral-900">Small Text</span>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">text-sm</code>
                                <span className="text-xs text-neutral-500">14px</span>
                            </div>
                            <div className="flex items-baseline gap-4 p-4 bg-neutral-50 rounded-xl">
                                <span className="text-lg text-neutral-900">Large Text</span>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">text-lg</code>
                                <span className="text-xs text-neutral-500">18px</span>
                            </div>
                            <div className="flex items-baseline gap-4 p-4 bg-neutral-50 rounded-xl">
                                <span className="text-xl text-neutral-900">Extra Large</span>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">text-xl</code>
                                <span className="text-xs text-neutral-500">20px</span>
                            </div>
                            <div className="flex items-baseline gap-4 p-4 bg-neutral-50 rounded-xl">
                                <span className="text-2xl text-neutral-900">2XL Text</span>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">text-2xl</code>
                                <span className="text-xs text-neutral-500">24px</span>
                            </div>
                            <div className="flex items-baseline gap-4 p-4 bg-neutral-50 rounded-xl">
                                <span className="text-3xl text-neutral-900">3XL Text</span>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">text-3xl</code>
                                <span className="text-xs text-neutral-500">30px</span>
                            </div>
                            <div className="flex items-baseline gap-4 p-4 bg-neutral-50 rounded-xl">
                                <span className="text-5xl text-neutral-900">5XL</span>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">text-5xl</code>
                                <span className="text-xs text-neutral-500">48px</span>
                            </div>
                            <div className="flex items-baseline gap-4 p-4 bg-neutral-50 rounded-xl">
                                <span className="text-6xl text-neutral-900">6XL</span>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">text-6xl</code>
                                <span className="text-xs text-neutral-500">60px</span>
                            </div>
                        </div>
                    </div>

                    {/* Font Weights */}
                    <div className="mb-12">
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Font Weights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-neutral-50 rounded-2xl">
                                <p className="text-3xl font-thin mb-2">Thin</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">font-thin</code>
                                <span className="text-xs text-neutral-500 ml-2">100</span>
                            </div>
                            <div className="p-6 bg-neutral-50 rounded-2xl">
                                <p className="text-3xl font-medium mb-2">Medium</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">font-medium</code>
                                <span className="text-xs text-neutral-500 ml-2">500</span>
                            </div>
                            <div className="p-6 bg-neutral-50 rounded-2xl">
                                <p className="text-3xl font-bold mb-2">Bold</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">font-bold</code>
                                <span className="text-xs text-neutral-500 ml-2">700</span>
                            </div>
                        </div>
                    </div>

                    {/* Letter Spacing */}
                    <div className="mb-12">
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Letter Spacing</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-neutral-50 rounded-xl">
                                <p className="text-2xl tracking-tighter mb-2">Tighter tracking</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">tracking-tighter</code>
                                <span className="text-xs text-neutral-500 ml-2">-0.05em</span>
                            </div>
                            <div className="p-4 bg-neutral-50 rounded-xl">
                                <p className="text-2xl tracking-tight mb-2">Tight tracking</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">tracking-tight</code>
                                <span className="text-xs text-neutral-500 ml-2">-0.025em</span>
                            </div>
                            <div className="p-4 bg-neutral-50 rounded-xl">
                                <p className="text-sm tracking-[0.1em] uppercase mb-2">Wide tracking (labels)</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">tracking-[0.1em]</code>
                                <span className="text-xs text-neutral-500 ml-2">0.1em</span>
                            </div>
                            <div className="p-4 bg-neutral-50 rounded-xl">
                                <p className="text-lg tracking-wide mb-2">Wide tracking</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">tracking-wide</code>
                                <span className="text-xs text-neutral-500 ml-2">0.025em</span>
                            </div>
                        </div>
                    </div>

                    {/* Line Heights */}
                    <div>
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Line Heights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-neutral-50 rounded-2xl">
                                <p className="text-xl leading-[0.9] mb-4">
                                    Leading 0.9<br />Very tight
                                </p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">leading-[0.9]</code>
                            </div>
                            <div className="p-6 bg-neutral-50 rounded-2xl">
                                <p className="text-xl leading-tight mb-4">
                                    Leading tight<br />For headlines
                                </p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">leading-tight</code>
                            </div>
                            <div className="p-6 bg-neutral-50 rounded-2xl">
                                <p className="text-xl leading-relaxed mb-4">
                                    Leading relaxed<br />For body text
                                </p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">leading-relaxed</code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-medium text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                        Colors
                    </h2>

                    {/* Base Colors */}
                    <div className="mb-12">
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Base Colors</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl">
                                <div className="w-16 h-16 rounded-xl bg-[#FEFEFD] border border-neutral-200"></div>
                                <div>
                                    <p className="font-medium">Background</p>
                                    <code className="text-xs bg-neutral-200 px-2 py-1 rounded">#FEFEFD</code>
                                    <p className="text-xs text-neutral-500 mt-1">var(--background)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl">
                                <div className="w-16 h-16 rounded-xl bg-[#171717]"></div>
                                <div>
                                    <p className="font-medium">Foreground</p>
                                    <code className="text-xs bg-neutral-200 px-2 py-1 rounded">#171717</code>
                                    <p className="text-xs text-neutral-500 mt-1">var(--foreground)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Neutral Palette */}
                    <div className="mb-12">
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Neutral Palette</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 bg-neutral-50 rounded-2xl">
                                <div className="w-full h-20 rounded-xl bg-neutral-50 border border-neutral-200 mb-3"></div>
                                <p className="font-medium text-sm">Neutral 50</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">neutral-50</code>
                            </div>
                            <div className="p-4 bg-neutral-50 rounded-2xl">
                                <div className="w-full h-20 rounded-xl bg-neutral-500 mb-3"></div>
                                <p className="font-medium text-sm">Neutral 500</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">neutral-500</code>
                            </div>
                            <div className="p-4 bg-neutral-50 rounded-2xl">
                                <div className="w-full h-20 rounded-xl bg-neutral-600 mb-3"></div>
                                <p className="font-medium text-sm">Neutral 600</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">neutral-600</code>
                            </div>
                            <div className="p-4 bg-neutral-50 rounded-2xl">
                                <div className="w-full h-20 rounded-xl bg-neutral-900 mb-3"></div>
                                <p className="font-medium text-sm">Neutral 900</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">neutral-900</code>
                            </div>
                        </div>
                    </div>

                    {/* Opacity Variants */}
                    <div>
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Opacity Variants</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 bg-neutral-50 rounded-2xl">
                                <div className="w-full h-20 rounded-xl bg-neutral-900/5 border border-neutral-200 mb-3"></div>
                                <p className="font-medium text-sm">5% Opacity</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">neutral-900/5</code>
                            </div>
                            <div className="p-4 bg-neutral-50 rounded-2xl">
                                <div className="w-full h-20 rounded-xl bg-black/20 mb-3"></div>
                                <p className="font-medium text-sm">20% Opacity</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">black/20</code>
                            </div>
                            <div className="p-4 bg-neutral-50 rounded-2xl">
                                <div className="w-full h-20 rounded-xl bg-black/60 mb-3"></div>
                                <p className="font-medium text-sm">60% Opacity</p>
                                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">black/60</code>
                            </div>
                            <div className="p-4 bg-neutral-900 rounded-2xl">
                                <div className="w-full h-20 rounded-xl bg-white/30 mb-3"></div>
                                <p className="font-medium text-sm text-white">30% White</p>
                                <code className="text-xs bg-white/20 text-white px-2 py-1 rounded">white/30</code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Border Radius Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-medium text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                        Border Radius
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto bg-neutral-900 rounded-lg mb-4"></div>
                            <p className="font-medium text-sm mb-1">Large</p>
                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">rounded-lg</code>
                            <p className="text-xs text-neutral-500 mt-1">8px</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto bg-neutral-900 rounded-xl mb-4"></div>
                            <p className="font-medium text-sm mb-1">XL</p>
                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">rounded-xl</code>
                            <p className="text-xs text-neutral-500 mt-1">12px</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto bg-neutral-900 rounded-2xl mb-4"></div>
                            <p className="font-medium text-sm mb-1">2XL</p>
                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">rounded-2xl</code>
                            <p className="text-xs text-neutral-500 mt-1">16px</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto bg-neutral-900 rounded-3xl mb-4"></div>
                            <p className="font-medium text-sm mb-1">3XL</p>
                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">rounded-3xl</code>
                            <p className="text-xs text-neutral-500 mt-1">24px</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto bg-neutral-900 rounded-[2rem] mb-4"></div>
                            <p className="font-medium text-sm mb-1">Custom</p>
                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">rounded-[2rem]</code>
                            <p className="text-xs text-neutral-500 mt-1">32px</p>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-6">
                        <div className="text-center">
                            <div className="w-32 h-12 mx-auto bg-neutral-900 rounded-full mb-4"></div>
                            <p className="font-medium text-sm mb-1">Full (Pill)</p>
                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">rounded-full</code>
                        </div>
                    </div>
                </section>

                {/* Spacing Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-medium text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                        Spacing
                    </h2>

                    {/* Padding */}
                    <div className="mb-12">
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Padding</h3>
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="bg-neutral-200 inline-block">
                                    <div className="bg-neutral-900 text-white text-xs px-6 py-2">px-6</div>
                                </div>
                                <code className="text-xs bg-neutral-100 px-2 py-1 rounded border">24px horizontal</code>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="bg-neutral-200 inline-block">
                                    <div className="bg-neutral-900 text-white text-xs px-12 py-2">px-12</div>
                                </div>
                                <code className="text-xs bg-neutral-100 px-2 py-1 rounded border">48px horizontal</code>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="bg-neutral-200 inline-block">
                                    <div className="bg-neutral-900 text-white text-xs px-4 py-8">py-8</div>
                                </div>
                                <code className="text-xs bg-neutral-100 px-2 py-1 rounded border">32px vertical</code>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="bg-neutral-200 inline-block">
                                    <div className="bg-neutral-900 text-white text-xs p-8">p-8</div>
                                </div>
                                <code className="text-xs bg-neutral-100 px-2 py-1 rounded border">32px all sides</code>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="bg-neutral-200 inline-block">
                                    <div className="bg-neutral-900 text-white text-xs p-16">p-16</div>
                                </div>
                                <code className="text-xs bg-neutral-100 px-2 py-1 rounded border">64px all sides</code>
                            </div>
                        </div>
                    </div>

                    {/* Gap */}
                    <div>
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Gap & Space</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-neutral-600 mb-2">gap-2 (8px)</p>
                                <div className="flex gap-2">
                                    <div className="w-12 h-12 bg-neutral-900 rounded-lg"></div>
                                    <div className="w-12 h-12 bg-neutral-900 rounded-lg"></div>
                                    <div className="w-12 h-12 bg-neutral-900 rounded-lg"></div>
                                </div>
                                <code className="text-xs bg-neutral-100 px-2 py-1 rounded border mt-2 inline-block">gap-2</code>
                            </div>
                            <div>
                                <p className="text-sm text-neutral-600 mb-2">gap-6 (24px)</p>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-neutral-900 rounded-lg"></div>
                                    <div className="w-12 h-12 bg-neutral-900 rounded-lg"></div>
                                    <div className="w-12 h-12 bg-neutral-900 rounded-lg"></div>
                                </div>
                                <code className="text-xs bg-neutral-100 px-2 py-1 rounded border mt-2 inline-block">gap-6</code>
                            </div>
                            <div>
                                <p className="text-sm text-neutral-600 mb-2">space-y-6 (24px vertical)</p>
                                <div className="space-y-6 inline-flex flex-col">
                                    <div className="w-24 h-8 bg-neutral-900 rounded-lg"></div>
                                    <div className="w-24 h-8 bg-neutral-900 rounded-lg"></div>
                                    <div className="w-24 h-8 bg-neutral-900 rounded-lg"></div>
                                </div>
                                <code className="text-xs bg-neutral-100 px-2 py-1 rounded border mt-2 block w-fit">space-y-6</code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Margin Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-medium text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                        Margins
                    </h2>

                    {/* Vertical Margins */}
                    <div className="mb-12">
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Vertical Margins</h3>
                        <div className="space-y-6 bg-neutral-100 p-6 rounded-2xl">
                            <div>
                                <div className="bg-neutral-900 text-white text-xs p-3 rounded-lg mb-4 inline-block">
                                    mb-4 (16px bottom)
                                </div>
                                <div className="bg-neutral-300 h-px"></div>
                            </div>
                            <div>
                                <div className="bg-neutral-900 text-white text-xs p-3 rounded-lg mb-10 inline-block">
                                    mb-10 (40px bottom)
                                </div>
                                <div className="bg-neutral-300 h-px"></div>
                            </div>
                            <div>
                                <div className="bg-neutral-900 text-white text-xs p-3 rounded-lg mb-16 inline-block">
                                    mb-16 (64px bottom)
                                </div>
                                <div className="bg-neutral-300 h-px"></div>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">mb-4</code>
                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">mb-10</code>
                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">mb-16</code>
                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">my-20</code>
                        </div>
                    </div>

                    {/* Horizontal Margins */}
                    <div className="mb-12">
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Horizontal Margins</h3>
                        <div className="bg-neutral-100 p-6 rounded-2xl">
                            <div className="bg-neutral-900 text-white text-xs p-4 rounded-lg mx-auto w-fit">
                                mx-auto (centered)
                            </div>
                        </div>
                        <code className="text-xs bg-neutral-200 px-2 py-1 rounded mt-4 inline-block">mx-auto</code>
                    </div>

                    {/* Responsive Margins */}
                    <div>
                        <h3 className="text-xl font-medium text-neutral-900 mb-4">Responsive Margins</h3>
                        <p className="text-neutral-600 mb-4">
                            Margins change at different breakpoints for responsive layouts.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-neutral-200">
                                        <th className="text-left py-3 pr-4 font-medium">Class</th>
                                        <th className="text-left py-3 pr-4 font-medium">Mobile</th>
                                        <th className="text-left py-3 font-medium">Desktop (md:)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4">
                                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">mb-16 md:mb-10</code>
                                        </td>
                                        <td className="py-3 pr-4 text-neutral-600">64px</td>
                                        <td className="py-3 text-neutral-600">40px</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4">
                                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">px-6 md:px-12</code>
                                        </td>
                                        <td className="py-3 pr-4 text-neutral-600">24px</td>
                                        <td className="py-3 text-neutral-600">48px</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">
                                            <code className="text-xs bg-neutral-200 px-2 py-1 rounded">space-y-8 md:space-y-16</code>
                                        </td>
                                        <td className="py-3 pr-4 text-neutral-600">32px</td>
                                        <td className="py-3 text-neutral-600">64px</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Max Widths */}
                <section>
                    <h2 className="text-3xl font-medium text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                        Container Widths
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-neutral-100 p-4 rounded-xl">
                            <div className="bg-neutral-900 text-white text-xs p-3 rounded-lg max-w-2xl">
                                max-w-2xl (672px)
                            </div>
                        </div>
                        <div className="bg-neutral-100 p-4 rounded-xl">
                            <div className="bg-neutral-900 text-white text-xs p-3 rounded-lg max-w-3xl">
                                max-w-3xl (768px)
                            </div>
                        </div>
                        <div className="bg-neutral-100 p-4 rounded-xl">
                            <div className="bg-neutral-900 text-white text-xs p-3 rounded-lg max-w-7xl">
                                max-w-7xl (1280px)
                            </div>
                        </div>
                        <div className="bg-neutral-100 p-4 rounded-xl">
                            <div className="bg-neutral-900 text-white text-xs p-3 rounded-lg max-w-[90rem]">
                                max-w-[90rem] (1440px)
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
