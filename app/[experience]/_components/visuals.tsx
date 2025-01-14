"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";

type VisualsProps = {
  text: string;
  images: string[];
};

export function Visuals({text, images}: VisualsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const goToPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const goToNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="text-gray-700 text-base lg:text-lg">
      <p>{text}</p>
      <div className="mt-4 relative embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div key={index} className="embla__slide">
              <div className="relative w-full h-96">
                <Image
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
          onClick={goToPrev}
        >
          <ChevronLeft size={32} />
        </button>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
          onClick={goToNext}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
