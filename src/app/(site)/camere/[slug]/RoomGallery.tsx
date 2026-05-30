"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type RoomGalleryProps = {
  images: { src: string; alt: string; width: number; height: number }[];
};

export default function RoomGallery({ images }: RoomGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return (prev - 1 + images.length) % images.length;
        });
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return (prev + 1) % images.length;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [images.length, selectedIndex]);

  if (!images.length) return null;

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <section className="bg-sol-sand py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 md:grid-cols-3 md:px-16">
          <button
            type="button"
            onClick={() => setSelectedIndex(0)}
            className="relative aspect-[4/3] cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
          >
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" />
          </button>

          {images.slice(1).map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index + 1)}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      </section>

      {selectedIndex !== null && currentImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex h-full w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute left-0 right-0 top-0 z-20 flex h-16 cursor-pointer items-center justify-end pr-6"
              onClick={() => setSelectedIndex(null)}
            >
              <span className="text-3xl text-white/70 hover:text-white">×</span>
            </button>

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  className="absolute left-0 top-0 z-10 flex h-full w-1/4 cursor-pointer items-center justify-start bg-gradient-to-r from-black/30 to-transparent pl-4 transition-colors hover:from-black/50"
                  onClick={() =>
                    setSelectedIndex((prev) => {
                      if (prev === null) return null;
                      return (prev - 1 + images.length) % images.length;
                    })
                  }
                >
                  <span className="text-5xl font-light text-white">‹</span>
                </button>
                <button
                  type="button"
                  className="absolute right-0 top-0 z-10 flex h-full w-1/4 cursor-pointer items-center justify-end bg-gradient-to-l from-black/30 to-transparent pr-4 transition-colors hover:from-black/50"
                  onClick={() =>
                    setSelectedIndex((prev) => {
                      if (prev === null) return null;
                      return (prev + 1) % images.length;
                    })
                  }
                >
                  <span className="text-5xl font-light text-white">›</span>
                </button>
              </>
            ) : null}

            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="max-h-[80vh] max-w-4xl object-contain"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xs text-white/50">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
