

import { useNavigate } from "react-router-dom";
import { servicesData } from "../../data/services";
import { useEffect, useRef } from "react";

function ServicesGrid() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  // ⭐ SCROLL ANIMATION (same as previous section)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-caption");

            if (entry.target.classList.contains("title-animate")) {
              entry.target.classList.add("animate-titleLeft");
            }
          }
        });
      },
     { threshold: 0.05 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardsRef.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
<section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      {/* GRADIENT BACKGROUND */}
<div className="absolute inset-0 
  bg-gradient-to-b 
  from-white 
  via-slate-200 
  to-orange-100">
</div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* ⭐ TITLE LEFT → RIGHT */}
        <div ref={titleRef} className="text-center mb-16 opacity-0 title-animate">
          <h2 className="font-['Anton'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider text-brandOrange mb-6">
            Our Core Services
          </h2>
          

         <p className="font-['Poppins'] text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Experience Allows Us To Printing Things
          </p>
        </div>

        {/* ⭐ CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.slug}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => navigate(`/projects/${service.slug}`)}
              className="group relative h-[230px] sm:h-[260px] lg:h-[280px] rounded-2xl overflow-hidden cursor-pointer 
                         opacity-0 transform transition-all duration-700 hover:-translate-y-3"
             style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={service.image}
                className="absolute inset-0 w-full h-full object-cover 
                           group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              <div className="absolute bottom-0 p-6">
                <h3 className="font-['Anton'] text-lg sm:text-xl uppercase text-white group-hover:text-brandOrange transition">
                  {service.title}
                </h3>
              </div>

              <div className="absolute inset-0 border-2 border-transparent 
                              group-hover:border-brandOrange rounded-2xl transition"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesGrid;