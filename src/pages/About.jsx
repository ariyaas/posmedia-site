import PageBanner from "../components/layout/PageBanner";

function About() {
  return (
    <>
      {/* 🔵 PAGE BANNER */}
      <PageBanner title="About Us" />

      {/* ============================= */}
      {/* ABOUT COMPANY SECTION */}
      {/* ============================= */}
<section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative group">
            <img
              src="/src/assets/images/aboutteam.png"
              className="rounded-xl shadow-2xl w-fullgroup-hover:scale-105 transition duration-700 ease-out"
            />

            {/* small orange shape */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brandOrange/20 rounded-xl blur-xl"></div>
          </div>

          {/* RIGHT TEXT */}
          <div className="space-y-6">
            <h2 className="font-['Anton'] text-3xl sm:text-4xl md:text-5xl text-brandOrange uppercase">
              About Our Company
            </h2>

            <p className="font-['Poppins'] text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
              POS Media LLC is a well-established leader in promotional activities,
              specializing in signboard manufacturing, in-store branding and high
              quality flex & vinyl graphic printing.
            </p>

            <p className="font-['Poppins'] text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
              With over 20 years of experience across the Middle East including
              an established branch in Saudi Arabia, we continue to expand our
              reach serving clients across the region.
            </p>

            <p className="font-['Poppins'] text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
              Our highly skilled team specializes in design, assembly and
              installation, delivering creative ideas that exceed client
              expectations and ensure premium quality output.
            </p>
          </div>

        </div>
      </section>

      {/* ============================= */}
      {/* WHAT WE OFFER */}
      {/* ============================= */}
<section className="py-16 sm:py-20 lg:py-24 bg-gray-50 text-center">
       <p className="font-['Poppins'] text-brandOrange font-semibold tracking-widest mb-2">
  WHAT WE OFFER
</p>

        <h2 className="font-['Anton'] text-3xl sm:text-4xl md:text-5xl mb-16">
          We Provide Complete Branding Solutions
        </h2>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:-translate-y-3 transition-all duration-700 ease-out">
            <img src="/src/assets/images/img_01.jpg" className="rounded-lg mb-6"/>
            <h3 className="font-semibold text-xl mb-3">Company History</h3>
            <p className= " font-['Poppins'] text-gray-600 text-sm leading-7">
              Established in 2004, we began with flex and vinyl printing and
              quickly gained recognition for premium signage solutions.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:-translate-y-3 transition-all duration-700 ease-out">
            <img src="/src/assets/images/custmsoln_02.png" className="rounded-lg mb-6"/>
            <h3 className="font-semibold text-xl mb-3">Custom Made Solutions</h3>
            <p className=" font-['Poppins'] text-gray-600 text-sm leading-7">
              We deliver tailored branding solutions aligned perfectly with
              each client's unique vision and business goals.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:-translate-y-3 transition-all duration-700 ease-out">
            <img src="/src/assets/images/custmsatisy_03.png" className="rounded-lg mb-6"/>
            <h3 className="font-semibold text-lg sm:text-xl mb-3">Customer Satisfaction</h3>
            <p className= " font-['Poppins'] text-gray-600 text-sm leading-7">
              Our commitment to quality and after-sales service has made us a
              trusted partner for clients across UAE.
            </p>
          </div>

        </div>
      </section>

      {/* ============================= */}
      {/* TEAM SECTION */}
      {/* ============================= */}
<section className="py-16 sm:py-20 lg:py-24 bg-white text-center">
        <h2 className="font-['Anton'] text-3xl sm:text-4xl text-brandOrange mb-6">
          Our Team
        </h2>

        <p className=" font-['Poppins'] max-w-3xl mx-autotext-gray-600 text-sm sm:text-base mb-12 sm:mb-16">
          Our leadership team drives consistent growth and success with
          innovation, creativity and dedication to excellence.
        </p>

        <div className="max-w-5xl mx-auto px-4">
          <img
            src="/src/assets/images/our_team.png"
            className="rounded-xl shadow-2xl hover:scale-105 transition duration-700"
          />
        </div>

      </section>
    </>
  );
}

export default About;