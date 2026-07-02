import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva("w-full", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    size: {
      sm: "[&_.section-title]:text-2xl [&_.section-title]:sm:text-3xl",
      md: "[&_.section-title]:text-3xl [&_.section-title]:sm:text-4xl",
      lg: "[&_.section-title]:text-4xl [&_.section-title]:sm:text-5xl [&_.section-title]:lg:text-6xl",
    },
    spacing: {
      compact: "gap-2",
      normal: "gap-4",
      generous: "gap-6",
    },
  },
  defaultVariants: {
    align: "left",
    size: "md",
    spacing: "normal",
  },
});

interface SectionHeadingProps extends VariantProps<typeof headingVariants> {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  size = "md",
  spacing = "normal",
  className,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  const content = (
    <div className={cn("flex flex-col flex-1 min-w-0", isCentered && "items-center text-center mx-auto")}>
      
      {/* Main Container tailored around the title text length */}
      <div className="relative w-fit flex flex-col pt-5 pb-4">
        
        {/* Eyebrow positioned at the exact top-right of the title container */}
        {eyebrow && (
          <span
            className={cn(
              "absolute top-0 right-0 text-xs font-semibold uppercase tracking-wider text-primary block whitespace-nowrap",
              eyebrowClassName,
            )}
          >
            {eyebrow}
          </span>
        )}
        
        {/* Title text */}
        <h2
          className={cn(
            "section-title font-bold tracking-tight text-white pr-4",
            titleClassName,
          )}
        >
          {title}
        </h2>

        {/* Orange Decorative Underline positioned at the bottom-right of the title container */}
      </div>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "text-base text-muted-foreground sm:text-lg mt-3",
            isCentered ? "mx-auto max-w-2xl" : "max-w-2xl",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );

  return (
    <div 
      className={cn(
        "flex flex-col md:flex-row md:items-end md:justify-between w-full", 
        headingVariants({ align, size, spacing }), 
        className
      )}
    >
      {content}
      
      {/* Action Button Section ("View All Tours") */}
      {action && (
        <div className={cn("shrink-0 mt-4 md:mt-0", isCentered ? "self-center" : "self-end")}>
          {action}
        </div>
      )}
    </div>
  );
}