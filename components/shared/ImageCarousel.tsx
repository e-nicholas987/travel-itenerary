"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageCarouselProps = {
  images: string[];
  className?: string;
};

function CaretButton({
  onClick,
  position,
}: {
  onClick: () => void;
  position: "left" | "right";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "absolute  top-1/2 size-8 flex -translate-y-1/2 items-center justify-center rounded-full bg-neutral-100 text-black shadow-sm hover:bg-white",
        position === "left" ? "left-1" : "right-1"
      )}
      aria-label="Previous image"
    >
      {position === "left" ? (
        <ChevronLeft className="text-black/40 text-sm" />
      ) : (
        <ChevronRight className="text-black/40 text-sm" />
      )}
    </button>
  );
}

export default function ImageCarousel({
  images,
  className,
}: ImageCarouselProps) {
  const [isError, setIsError] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const hasImages = images.length > 0;
  const safeIndex = hasImages ? currentIndex % images.length : 0;

  const showControls = images.length > 1;

  const goPrev = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className={cn(
        "relative h-61.5 w-58 shrink-0 overflow-hidden rounded-sm bg-neutral-300",
        className
      )}
    >
      <div
        className={cn(
          "flex h-full w-full transition-transform duration-300 ease-out",
          !hasImages && "items-center justify-center"
        )}
        style={{
          transform: hasImages ? `translateX(-${safeIndex * 100}%)` : undefined,
        }}
      >
        {hasImages && !isError ? (
          images.map((src) => (
            <div key={src} className="relative h-full w-full shrink-0">
              <Image
                src={src}
                alt={src}
                fill
                className="object-cover"
                sizes="14.5rem"
                onError={() => setIsError(true)}
              />
            </div>
          ))
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-black-secondary">
            No image
          </div>
        )}
      </div>

      {showControls && (
        <>
          <CaretButton position="left" onClick={goPrev} />
          <CaretButton position="right" onClick={goNext} />
        </>
      )}
    </div>
  );
}
