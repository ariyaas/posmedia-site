

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Printer,
  Layers,
  Scissors,
  Box,
  Monitor,
  Store,
  ArrowRight
} from "lucide-react";

function CoreServices() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const titleRef = useRef(null);
  const captionRef = useRef(null);
  const navigate = useNavigate();

  // Intersection Observer for scroll animations
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-caption");

          if (entry.target.classList.contains("title-animate")) {
            entry.target.classList.add("animate-titleLeft");
          }

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // wait until children refs are registered ⭐
  requestAnimationFrame(() => {
    if (titleRef.current) observer.observe(titleRef.current);
    if (captionRef.current) observer.observe(captionRef.current);

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
  });

  return () => observer.disconnect();
}, []);

  const leftServices = [
    {
      icon: Printer,
      title: "Sign Board Manufacturing",
      desc: "Durable and attractive signage for branding.",
      color: "from-blue-500 to-blue-600",
      link: "/projects"
    },
    {
      icon: Layers,
      title: "Flex & Vinyl Printing",
      desc: "High-quality prints for banners & displays.",
      color: "from-purple-500 to-purple-600",
      link: "/projects"
    },
    {
      icon: Scissors,
      title: "Customized Acrylic Works",
      desc: "Creative precision-cut acrylic solutions.",
      color: "from-pink-500 to-pink-600",
      link: "/projects"
    }
  ];

  const rightServices = [
    {
      icon: Box,
      title: "MDF Display Units",
      desc: "Stylish MDF displays for showcasing.",
      color: "from-amber-500 to-amber-600",
      link: "/projects"
    },
    {
      icon: Monitor,
      title: "Forex Cutout Signage",
      desc: "Lightweight custom shape signage.",
      color: "from-emerald-500 to-emerald-600",
      link: "/projects"
    },
    {
      icon: Store,
      title: "In-Shop Branding",
      desc: "Complete branding for retail spaces.",
      color: "from-orange-500 to-orange-600",
      link: "/projects"
    }
  ];

const handleReadMore = (link) => {
  navigate(link);
};

  const Item = ({ Icon, title, desc, color, index, link }) => {
    const itemRef = useRef(null);

    useEffect(() => {
      if (itemRef.current) itemsRef.current.push(itemRef.current);
    }, []);

    return (
      <div
        ref={itemRef}
        className="flex items-start gap-4 sm:gap-5 group relative opacity-0 transform transition-all duration-500 hover:translate-x-2 cursor-pointer"
        style={{ animationDelay: `${index * 0.08}s` }}
        onClick={() => handleReadMore(link)}
      >
        <div className="absolute left-[26px] top-14 bottom-[-40px] w-[2px] bg-gradient-to-b from-brandOrange/50 to-transparent hidden lg:block"></div>

        <div className={`min-w-[50px] sm:min-w-[55px] h-[50px] sm:h-[55px] rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <Icon size={22} className="sm:w-6 sm:h-6" />
        </div>

        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-['Anton'] uppercase tracking-wide text-gray-800 group-hover:text-brandOrange transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 font-['Poppins'] leading-relaxed">
            {desc}
          </p>

          <span
            className="text-brandOrange text-xs sm:text-sm mt-2 sm:mt-3 inline-flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              handleReadMore(link);
            }}
          >
            READ MORE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-white  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div ref={titleRef} className="inline-block relative opacity-0 title-animate">
            <h2 className="font-['Anton'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider bg-gradient-to-r from-brandOrange to-orange-400 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-brandOrange/50 to-orange-400/50 rounded-full"></div>
          </div>

          <p ref={captionRef} className="font-['Poppins'] text-gray-600 text-sm sm:text-base mt-6 sm:mt-8 max-w-2xl mx-auto opacity-0">
            Premium printing and branding solutions tailored for your business
          </p>
        </div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 items-start">          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 order-2 lg:order-1">
           {leftServices.map((s, i) => (
  <Item
    key={i}
    Icon={s.icon}   // ⭐ FIX
    title={s.title}
    desc={s.desc}
    color={s.color}
    link={s.link}
    index={i}
  />
))}
          </div>

          <div className="relative flex flex-col items-center order-1 lg:order-2 mb-8 lg:mb-0">
            
            <img
              src="/logo/badge.png"
              alt="Premium Badge"
              className="relative w-[260px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] animate-float z-10"
            />

            <div className="relative z-20 text-center max-w-[280px] mt-8">
              <h3 className="font-['Anton'] text-2xl uppercase tracking-wider bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Multicolor Stationery Printing
              </h3>
              <p className="font-['Poppins'] text-gray-500 text-sm mt-2 leading-relaxed">
                Business cards, flyers & corporate stationery printing with premium finishes
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 order-3">
           {rightServices.map((s, i) => (
  <Item
    key={i}
    Icon={s.icon}   // ⭐ FIX
    title={s.title}
    desc={s.desc}
    color={s.color}
    link={s.link}
    index={i + 3}
  />
))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreServices;