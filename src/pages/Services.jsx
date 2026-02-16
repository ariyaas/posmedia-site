import PageBanner from "../components/layout/PageBanner";
import { servicesData } from "../data/services";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      {/* PAGE BANNER */}
      <PageBanner title="Services" />

      {/* INTRO SECTION (IMAGE LEFT TEXT RIGHT) */}
<section className="py-16 sm:py-20 lg:py-24 bg-white">        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
          
          {/* LEFT IMAGE */}
          <img
            src="/src/assets/images/service_3.png"
            className="rounded-xl shadow-xl"
          />

          {/* RIGHT TEXT */}
          <div>
            <h3 className="font-['Anton'] text-brandOrange ttext-lg sm:text-xl mb-3">
              Our Services
            </h3>

            <h2 className="font-['Anton'] text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
              We Provide Complete Branding Solutions
            </h2>

            <p className="font-['Poppins'] text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
              Our network spans across the Middle East where we have gained 
              extensive experience in interior fit-outs and signage across the area. 
              We provide premium quality installation, maintenance and 
              customized branding solutions for businesses.
            </p>

            <p className="font-['Poppins'] text-gray-600 leading-8 mt-4">
              We deliver professional service and ensure every project is 
              completed with high precision and attention to detail.
            </p>
          </div>

        </div>
      </section>

      {/* BLUE CTA SECTION */}
      <section className="bg-[#2f4a8f] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/src/assets/images/printer1.jpg"
            className="rounded-xl shadow-2xl"
          />

          <div className="text-white">
            <h4 className="text-brandOrange font-['Anton'] text-3xl sm:text-4xl md:text-5xl mb-2">
              Need Any Help?
            </h4>

            <h2 className="font-['Anton'] text-4xl md:text-5xl mb-6 leading-tight">
              Always Ready To Print Your Dream Works
            </h2>

            <p className="font-['Poppins'] leading-8 mb-6 text-white/90">
              We bring your ideas to life with precision and creativity. 
              Our expert printing team transforms your vision into tangible 
              objects with premium materials and professional finishing.
            </p>

            <Link to="/contact">
              <button className="bg-brandOrange px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition">
                CONTACT US →
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* SERVICES GRID */}
<section className="py-16 sm:py-20 lg:py-24 bg-gray-100">        <div className="max-w-7xl mx-auto px-6 text-center">

          <h4 className="text-brandOrange font-['Anton'] mb-3">
            Our Core Features
          </h4>

          <h2 className="font-['Anton'] text-3xl sm:text-4xl md:text-5xl mb-14">
            Explore Every Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {servicesData.map((service, index) => (
              <Link to={`/projects/${service.slug}`} key={index}>
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2">
                  
                  <img
                    src={service.image}
                    className="h-40 w-full object-cover rounded-lg mb-6"
                  />

                  <h3 className="font-['Anton'] text-xl sm:text-2xl mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600  text-sm sm:text-base leading-7">
                    {service.description.substring(0,100)}...
                  </p>

                  <span className="text-brandOrange mt-4 inline-block">
                    READ MORE →
                  </span>

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}

export default Services;