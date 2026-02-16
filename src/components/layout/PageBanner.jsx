function PageBanner({ title }) {
  return (
    <section className="relative h-[24vh] sm:h-[30vh] md:h-[38vh] lg:h-[45vh] overflow-hidden">

      <img
        src="/src/assets/images/bannerimage.png"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="font-['Anton'] text-4xl md:text-6xl uppercase tracking-wider">
          {title}
        </h1>

        <p className="mt-3 text-sm tracking-widest">
          HOME • {title}
        </p>
      </div>
    </section>
  );
}

export default PageBanner;