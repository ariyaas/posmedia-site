
import { useEffect, useState } from "react";

function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
  "/images/one.jpg",
  
  "/images/three.jpg",
  "/images/four.jpg",
  "/images/five.jpg",
  "/images/six.jpg",
  "/images/seven.jpg",
  "/images/eight.jpg",
  "/images/nine.jpg",
];

  // ⭐ captions added (NEW)
  const captions = [
    "LED Signage",
    "Exhibition Fitouts",
    "Fabric Printing",
    "Retail Displays",
    "Foam Branding",
    "Flex Vinyl Printing",
    "Retail Promotions",
    "Welcome Arch",
    "Window Graphics",
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
<section className="relative h-[55svh] sm:h-[65svh] md:h-[85vh] w-full overflow-hidden">
      {/* SLIDES (keep object-cover like before) */}
      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="POS Media Work"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1500ms] ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}

      {/* ⭐ GRADIENT OVERLAY (small bottom fade for text) */}
     {/* ⭐ GRADIENT OVERLAY (small bottom fade for text) */}
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" style={{ zIndex: 15 }}></div>

      {/* ⭐ SMALL CAPTION TEXT */}
     {/* ⭐ ANIMATED CAPTION */}
<div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 overflow-hidden">
  <p
    key={current} 
    className="font-['Anton'] text-white text-sm sm:text-xl md:text-2xl tracking-wider
               bg-black/40 backdrop-blur-md px-6 py-2 rounded-full
               animate-caption"
    // Add this style to ensure it stays behind navbar
    style={{ zIndex: 20 }}
  >
    {captions[current]}
  </p>
</div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`cursor-pointer w-3 h-3 rounded-full transition ${
              current === i ? "bg-brandOrange w-8" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
}

export default Hero;