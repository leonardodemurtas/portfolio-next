
import Image, { ImageProps } from "next/image";

interface ProjectImageProps extends Omit<ImageProps, "className"> {
    className?: string; // Make className optional again since we omitted it
    wrapperClassName?: string;
    background?: "beige" | "sage" | "lavender" | "transparent";
    exposure?: "normal" | "high";
    contrast?: "normal" | "high";
}

export function ProjectImage({
    src,
    alt,
    className = "",
    wrapperClassName = "",
    background = "transparent",
    exposure = "normal",
    contrast = "normal",
    ...props
}: ProjectImageProps) {
    // Map background props to CSS variables/classes
    const bgColors = {
        beige: "bg-[var(--accent-beige)]",
        sage: "bg-[var(--accent-sage)]",
        lavender: "bg-[var(--accent-lavender)]",
        transparent: "bg-transparent",
    };

    // Filter classes
    const filterClasses = [
        exposure === "high" ? "brightness-105" : "",
        contrast === "high" ? "contrast-105" : "",
    ].filter(Boolean).join(" ");

    return (
        <div
            className={`
        relative overflow-hidden rounded-2xl border border-black/5 
        ${bgColors[background]} 
        ${wrapperClassName}
      `.trim().replace(/\s+/g, " ")}
        >
            <Image
                src={src}
                alt={alt}
                className={`
          object-cover 
          ${filterClasses} 
          ${className}
        `.trim().replace(/\s+/g, " ")}
                {...props}
            />
        </div>
    );
}
