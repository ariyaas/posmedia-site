import { Star } from "lucide-react";

function Testimonials() {

  const reviews = [
    {
      name: "Dalwin Prasad",
      role: "Assistant Facility Manager",
      company: "Al Futtaim Engineering",
      text: "POS MEDIA provides exceptional sign board, wall graphics, fit-out and maintenance work without compromising quality. Their team is professional, cost-effective and always delivers projects on time.",
    },
    {
      name: "Abdul",
      role: "Sales Team",
      company: "Murfa Trading Dubai",
      text: "The POS team went above and beyond executing our promotional activities. Their exceptional efforts and professionalism make them our trusted branding partner.",
    },
    {
      name: "Happy Client",
      role: "Marketing Manager",
      company: "Retail Brand UAE",
      text: "Best advertisement solutions in the whole universe. We absolutely love your work and creativity. Highly recommended for branding and signage projects.",
    },
  ];

  return (
<section className="py-16 sm:py-20 lg:py-24 bg-[#f6f6f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
<div className="text-center mb-16 opacity-0 animate-fadeUp">
              <h2 className="font-['Anton'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-brandOrange tracking-wider">
            What Our Clients Say
          </h2>

          <div className="w-24 h-[3px] bg-brandOrange mx-auto mt-4 rounded-full"></div>

        <p className="font-['Poppins'] text-gray-600 text-sm sm:text-base mt-6 max-w-xl mx-auto">
            Real feedback from our happy customers
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, i) => (
            <div
  key={i}
  style={{ animationDelay: `${i * 0.2}s` }}
className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-out opacity-0 animate-fadeUp">
              {/* Stars */}
              <div className="flex gap-1 mb-5 text-brandOrange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="font-['Poppins'] text-gray-600 text-sm sm:text-base leading-7 mb-6">
                {review.text}
              </p>

              {/* Person */}
              <div>
                <h4 className="font-semibold text-gray-800">
                  {review.name}
                </h4>

                <p className="text-sm text-brandOrange font-medium">
                  {review.role}
                </p>

                <p className="text-xs text-gray-400">
                  {review.company}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;