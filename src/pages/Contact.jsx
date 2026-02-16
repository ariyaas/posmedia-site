// import PageBanner from "../components/layout/PageBanner";
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";

// function Contact() {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       "service_d5bo04t",      // ⭐ YOUR SERVICE ID
//       "template_n43teab",     // ⭐ CHANGE to your Template ID
//       form.current,
//       "_0uVti2FLvoCDAsfS"       // ⭐ CHANGE to your Public Key
//     )
//     .then(
//       () => {
//         alert("Message Sent Successfully ✅");
//         form.current.reset();
//       },
//       (error) => {
//         alert("Failed to send ❌");
//         console.log(error.text);
//       }
//     );
//   };

//   return (
//     <>
//       {/* TOP BANNER */}
//       <PageBanner title="Contact Us" />

//       {/* CONTACT SECTION */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

//           {/* LEFT INFO */}
//           <div>

//             <p className="text-brandOrange font-semibold mb-3 font-['Poppins']">
//               Contact Us
//             </p>

//             <h2 className="font-['Anton'] text-5xl leading-tight mb-10">
//               Every Single Update <br/> To Contact Us
//             </h2>

//             {/* Location */}
//             <div className="flex gap-5 mb-8">
//               <div className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
//                 📍
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Locations</h4>
//                 <p className="text-gray-600">
//                   Warehouse No. S1, Al Qusais Industrial Area 4, Dubai UAE
//                 </p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex gap-5 mb-8">
//               <div className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
//                 ✉️
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Email Us</h4>
//                 <p className="text-gray-600">sales@posmediaglobal.com</p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex gap-5">
//               <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
//                 📞
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Phone Us</h4>
//                 <p className="text-gray-600">+971 4 258 9 258</p>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT FORM ⭐ */}
//           <div className="bg-white p-10 rounded-xl shadow-xl">

//             <form ref={form} onSubmit={sendEmail} className="space-y-6">

//               <input
//                 type="text"
//                 name="user_name"
//                 placeholder="Write Your Name"
//                 required
//                 className="w-full p-4 bg-gray-100 rounded-lg outline-none"
//               />

//               <input
//                 type="email"
//                 name="user_email"
//                 placeholder="Write Your Email"
//                 required
//                 className="w-full p-4 bg-gray-100 rounded-lg outline-none"
//               />

//               <input
//                 type="text"
//                 name="user_phone"
//                 placeholder="Write Your Phone Number"
//                 className="w-full p-4 bg-gray-100 rounded-lg outline-none"
//               />

//               <textarea
//                 name="message"
//                 placeholder="Write Your Message"
//                 rows="5"
//                 required
//                 className="w-full p-4 bg-gray-100 rounded-lg outline-none"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="bg-brandOrange text-white px-10 py-4 rounded-lg font-bold hover:scale-105 transition"
//               >
//                 SEND MESSAGE →
//               </button>

//             </form>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

// export default Contact;


import PageBanner from "../components/layout/PageBanner";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_d5bo04t",     // your service id
        "template_n43teab",    // your template id
        form.current,
        "_0uVti2FLvoCDAsfS"    // your public key
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        form.current.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch(() => {
        setLoading(false);
        alert("Email failed ❌");
      });
  };

  return (
    <div className="overflow-x-hidden">

      <PageBanner title="Contact Us" />

      {/* CONTACT SECTION */}
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">

    {/* LEFT INFO */}
    <div className="max-w-xl mx-auto lg:mx-0">
      <p className="text-brandOrange font-body font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
        Contact Us
      </p>

      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-10">
        Let’s Start A <br/> New Project Together
      </h2>

      {/* CARD */}
      {[
        {
          icon: <MapPin size={20}/>,
          color: "bg-red-500",
          title: "Office Address",
          text: "Warehouse No.S1, Al Qusais Industrial Area 4, Dubai UAE",
        },
        {
          icon: <Mail size={20}/>,
          color: "bg-blue-500",
          title: "Email Address",
          text: "sales@posmediaglobal.com",
        },
        {
          icon: <Phone size={20}/>,
          color: "bg-green-500",
          title: "Phone Number",
          text: "+971 4 258 9 258",
        },
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-4 bg-white p-4 sm:p-6 rounded-xl shadow mb-4 sm:mb-6 font-body">
          <div className={`${item.color} p-3 sm:p-4 rounded-full text-white shrink-0`}>
            {item.icon}
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg">{item.title}</h4>
            <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
          </div>
        </div>
      ))}
    </div>

    {/* FORM */}
    <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl shadow-xl w-full">
      <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl mb-5 sm:mb-6">
        Send Us Message
      </h3>

      {sent && (
        <div className="flex items-center gap-3 bg-green-100 text-green-700 p-3 sm:p-4 rounded-lg mb-5 font-body text-sm sm:text-base">
          <CheckCircle size={20}/> Message sent successfully!
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5 font-body">

        <input name="user_name" required placeholder="Your Name"
          className="w-full bg-gray-100 rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-brandOrange outline-none"/>

        <input type="email" name="user_email" required placeholder="Your Email"
          className="w-full bg-gray-100 rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-brandOrange outline-none"/>

        <input name="user_phone" placeholder="Phone Number"
          className="w-full bg-gray-100 rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-brandOrange outline-none"/>

        <textarea name="message" rows="5" required placeholder="Message"
          className="w-full bg-gray-100 rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-brandOrange outline-none resize-none"/>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brandOrange text-white py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition"
        >
          {loading ? "Sending..." : "SEND MESSAGE"} <Send size={18}/>
        </button>

      </form>
    </div>

  </div>
</section>

      {/* MAP SECTION */}
      <section className="pb-16 sm:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl overflow-hidden">

            <h3 className="font-heading text-2xl sm:text-3xl mb-6 text-center">
              Our Location
            </h3>

            <div className="w-full overflow-hidden rounded-xl">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Al%20Qusais%20Industrial%20Area%204%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[260px] sm:h-[320px] md:h-[380px] border-0"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;