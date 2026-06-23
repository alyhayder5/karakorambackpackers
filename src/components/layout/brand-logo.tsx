import Image from "next/image";
import Link from "next/link";
import { siteName } from "@/lib/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
}: BrandLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0", className)}>
      <Image
        src="/karakoram-backpackers-logo.png"
        alt={siteName}
        width={200}
        height={80}
        className={cn("h-11 w-auto sm:h-14", imageClassName)}
        priority={priority}
      />
    </Link>
  );
}
