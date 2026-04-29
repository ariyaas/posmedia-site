function Partners() {
const logos = [
  "/partners/brandlogo-01.jpg",
  "/partners/brandlogo-02.jpg",
  "/partners/brandlogo-03.jpg",
  "/partners/brandlogo-04.jpg",
  "/partners/brandlogo-05.jpg",
  "/partners/brandlogo-06.jpg",
  "/partners/brandlogo-07.jpg",
  "/partners/brandlogo-08.jpg",
  "/partners/brandlogo-09.jpg",
  "/partners/brandlogo-10.jpg",
  "/partners/brandlogo-11.jpg",
  "/partners/brandlogo-12.jpg",
  "/partners/brandlogo-13.jpg",
];
  return (
<section className="bg-white py-12 sm:py-16 overflow-hidden">
      {/* ORANGE TITLE (outside blue strip) */}
      <div className="text-center mb-10">
        <h2 className="font-['Anton'] text-2xl sm:text-4xl md:text-5xl uppercase tracking-wider text-brandOrange">
          Trusted By Leading Brands
        </h2>
          <div className="w-28 sm:w-32 h-1 bg-gradient-to-r from-brandOrange/70 to-orange-400/70 mx-auto mt-4 rounded-full"></div>

      </div>

      {/* BLUE STRIP */}
      <div className="bg-[#030e4b] py-6 sm:py-10 overflow-hidden">
        <div className="flex items-center gap-10 sm:gap-20 w-max animate-marquee">

          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              loading="lazy"
             className="h-8 sm:h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          ))}

        </div>
      </div>

    </section>
  );
}

export default Partners;