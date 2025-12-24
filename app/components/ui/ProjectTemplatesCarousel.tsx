"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/app/components/ui/shadcn-carousel"
import { cn } from "@/lib/utils"

interface Slide {
    src: string;
    title: string;
}

interface ProjectTemplatesCarouselProps {
    slides: Slide[];
}

export function ProjectTemplatesCarousel({ slides }: ProjectTemplatesCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const scrollTo = (index: number) => api?.scrollTo(index)

    return (
        <div className="w-full flex flex-col items-center">
             {/* Carousel Content */}
            <div className="w-full flex justify-center overflow-hidden -mt-[112px] pt-14 relative z-10">
                <div className="w-full px-12 md:px-16 max-w-[1300px]">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            loop: true,
                            align: "start", 
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-6">
                            {slides.map((slide, index) => (
                                <CarouselItem key={index} className="pl-6 basis-full">
                                     <div className="relative h-fit overflow-hidden w-full group rounded-2xl border border-[#D0D0D0]">
                                        <Image
                                            src={slide.src}
                                            alt={slide.title}
                                            width={1200}
                                            height={800}
                                            className="object-contain w-full h-auto"
                                            priority={index === 0}
                                        />
                                        <div className="absolute bottom-10 left-10 z-20">
                                            <span className="inline-block px-5 py-2.5 bg-[rgba(255,255,255,0.12)] backdrop-blur-[12px] text-white text-[20px] font-normal leading-[31px] rounded-full border border-[rgba(230,229,229,0.30)] shadow-lg">
                                                {slide.title}
                                            </span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>

            {/* Dots Indicators */}
            <div className="flex justify-center gap-3 pb-6 pt-3 mt-0">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            "w-2.5 h-2.5 rounded-full transition-all duration-300",
                            index === current 
                                ? "bg-neutral-800 scale-110" 
                                : "bg-neutral-300 hover:bg-neutral-400"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
