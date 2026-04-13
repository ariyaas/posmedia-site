import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
<footer className="relative text-white mt-16 sm:mt-20">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
  src="/images/footer.png"
  alt="Footer background"
  className="w-full h-full object-cover opacity-70"
/>
        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/90 to-black/90"></div>
      </div>

      {/* CONTENT */}
<div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-14 grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 font-body">
        {/* LOGO + ABOUT */}
        <div>
          <img src="/logo/logo.png" className="w-32 mb-6"/>

          <p className="text-gray-300 leading-7">
            Through our dedicated efforts and commitment to quality,
            we have become trusted partners to several international brands
            by delivering custom-made branding solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-heading text-2xl mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
           <li><Link to="/about" className="hover:text-brandOrange">About Us</Link></li>
<li><Link to="/services" className="hover:text-brandOrange">Services</Link></li>
<li><Link to="/projects" className="hover:text-brandOrange">Projects</Link></li>
<li><Link to="/contact" className="hover:text-brandOrange">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-heading text-2xl mb-6">Services</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Design & Branding</li>
            <li>3D Design & Printing</li>
            <li>Offset Printing</li>
            <li>Business Printing</li>
            <li>Corporate Printing</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-heading text-2xl mb-6">Contact Us</h3>

          <p className="text-gray-300 mb-4 leading-7">
            Warehouse No. S1, Al Qusais Industrial Area 4,
            Dubai, UAE
          </p>

          {/* PHONE */}
          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <Phone size={16}/> Tel: +971 4 258 9 258
          </p>

          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <Phone size={16}/> Fax: +971 4 258 9 259
          </p>

          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <Phone size={16}/> +971 52 692 3321 (WhatsApp)
          </p>

          {/* EMAIL */}
          <p className="flex items-center gap-2 text-gray-300">
            <Mail size={16}/> sales@posmediaglobal.com
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            <div className="bg-white/20 p-3 rounded-full hover:bg-brandOrange cursor-pointer transition">
              <Facebook size={18}/>
            </div>
            <div className="bg-white/20 p-3 rounded-full hover:bg-brandOrange cursor-pointer transition">
              <Instagram size={18}/>
            </div>
            <div className="bg-white/20 p-3 rounded-full hover:bg-brandOrange cursor-pointer transition">
              <Youtube size={18}/>
            </div>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="relative border-t border-white/20 text-center py-6 text-gray-300 font-body">
        © Copyright 2026 All Rights Reserved — Design by 
        <span className="text-brandOrange"> ECS</span>
      </div>

    </footer>
  );
}

export default Footer;