"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Slide {
    src: string;
    title: string;
}

interface TemplateCarouselProps {
    slides: Slide[];
}

export const TemplateCarousel = ({ slides }: TemplateCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    return (
        <div className="w-full flex flex-col items-center">
            
            {/* Carousel Content */}
            <div className="w-full flex justify-center overflow-hidden -mt-[112px] pt-14 relative z-10">
                <div className="w-full max-w-[1200px] px-6 md:px-12">
                    <div className="overflow-hidden p-4" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {slides.map((slide, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 relative h-fit overflow-hidden">
<Image
    src={slide.src}
    alt={slide.title}
    width={1200}
    height={800}
    className="object-contain w-full h-auto"
    priority={index === 0}
/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Navigation */}
            <div className="w-full flex items-center justify-between px-6">
                <button 
                    onClick={scrollPrev}
                    className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                    aria-label="Previous slide"
                >
                    <ArrowLeft className="w-8 h-8 md:w-10 md:h-10 text-neutral-600" strokeWidth={1} />
                </button>
                
                <h3 className="text-xl md:text-2xl font-medium text-neutral-900 tracking-tight">
                    {slides[selectedIndex]?.title}
                </h3>

                <button 
                    onClick={scrollNext}
                    className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                    aria-label="Next slide"
                >
                    <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-neutral-600" strokeWidth={1} />
                </button>
            </div>

            {/* Dots Indicators */}
            <div className="flex justify-center gap-3 py-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === selectedIndex 
                                ? 'bg-neutral-800 scale-110' 
                                : 'bg-neutral-300 hover:bg-neutral-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
