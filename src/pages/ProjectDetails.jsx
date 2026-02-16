import { useParams } from "react-router-dom";
import { servicesData } from "../data/services";
import PageBanner from "../components/layout/PageBanner";

function ProjectDetails() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) return <h1>Project not found</h1>;

  return (
    <>
      {/* SAME GLOBAL BANNER */}
      <PageBanner title="Our Projects" />

      {/* TITLE + DESCRIPTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">

          {/* ORANGE SERVICE TITLE */}
          <h2 className="font-['Anton'] text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-brandOrange mb-6">
            {service.title}
          </h2>

          {/* SMALL ORANGE LINE */}
          <div className="w-20 h-[3px] bg-brandOrange mx-auto mb-8 rounded-full"></div>

          {/* DESCRIPTION */}
         <p className="font-['Poppins'] text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 max-w-2xl mx-auto">
            {service.description}
          </p>

        </div>
      </section>

      {/* GALLERY */}
<section className="pb-16 sm:pb-20 lg:pb-24 bg-white">        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {service.gallery.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md group cursor-pointer"
            >
              <img
                src={img}
                loading="lazy"
                alt=""
                className="w-full h-[260px] sm:h-[300px] object-cover 
                           group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default ProjectDetails;