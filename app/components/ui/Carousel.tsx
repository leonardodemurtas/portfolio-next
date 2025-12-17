"use client";

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'

type CarouselProps = {
    children: React.ReactNode
    options?: EmblaOptionsType
    className?: string
}

export const Carousel = ({ children, options, className = "" }: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onInit = useCallback((emblaApi: any) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    return (
        <div className={`relative ${className}`}>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y gap-4">
                    {children}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            index === selectedIndex ? 'bg-neutral-800' : 'bg-neutral-300'
                        }`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export const CarouselSlide = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`flex-[0_0_100%] min-w-0 relative ${className}`}>
            {children}
        </div>
    )
}
