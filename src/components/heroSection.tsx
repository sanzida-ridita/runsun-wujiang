import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";


export default function HeroSection() {

  // Initialize Embla carousel with autoplay
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const slides = [
    { id: 1, image: hero1, alt: "Factory View 1" },
    { id: 2, image: hero2, alt: "Factory View 2" },
    { id: 3, image: hero3, alt: "Factory View 3" },
  ];
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-shrink-0 w-full h-full"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Static Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
        <h1 className="text-4xl md:text-6xl font-bold">Runsun Factory</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Innovating the Future of Manufacturing
        </p>
         <button className="mt-5 px-6 py-3 border-2 border-orange-400 text-white font-semibold rounded-lg transition-colors duration-300 hover:bg-orange-400 hover:text-white">
        View Products
      </button>
      </div>
    </section>
  );
}
