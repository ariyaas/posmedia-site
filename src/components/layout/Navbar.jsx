

import { useState } from "react";
import { Menu, X, ArrowRight,  Facebook, Instagram, Linkedin, Youtube  } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

  return (
    <>
      {/* NAVBAR */}
<nav className="sticky top-[27px] sm:top-[35px] w-full z-30 bg-white border-b border-gray-200 py-1 xl:py-1.5  font-body relative">     <div className="w-full px-[5%] flex items-center justify-between">          {/* LOGO + BADGE (FINAL OPTIMIZED IMAGES) */}
         <div className="flex items-center gap-2 justify-start">
            <img
              src="/logo/nposlogo.jpg"
              alt="POS Media Logo"
             className="h-[50px] sm:h-[60px] lg:h-[75px] w-auto"
            />

            <img
              src="/logo/badge.png"
              alt="20 Years Experience"
className="h-[45px] sm:h-[55px] xl:h-[65px] w-auto"            />
          </div>

        {/* CENTER MENU */}
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
  <ul className="flex gap-6 xl:gap-14 text-[15px] xl:text-[17px] tracking-wide font-medium text-brandBlack">
    {navLinks.map((item, index) => (
  <NavLink
    key={index}
    to={item.path}
    className={({ isActive }) =>
      `relative group cursor-pointer ${
        isActive ? "text-brandOrange" : "text-brandBlack"
      }`
    }
  >
    {({ isActive }) => (
      <>
        {item.name}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-brandOrange transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
      </>
    )}
  </NavLink>
))}
  </ul>
</div>
          {/* CTA BUTTON */}
         <div className="flex justify-end">
  <Link
  to="/contact"
  className="hidden md:flex items-center gap-2 bg-brandOrange hover:bg-brandOrangeHover text-white px-5 xl:px-8 py-2 xl:py-3.5 text-sm xl:text-base rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
>
  Get Quote <ArrowRight size={18} />
</Link>
</div>
          {/* MOBILE ICON */}
          <div className="md:hidden text-black">
            {menuOpen ? (
              <X size={26} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
            ) : (
              <Menu size={26} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {/* OVERLAY */}
{menuOpen && (
<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
    onClick={() => setMenuOpen(false)}
  />
)}

{/* PREMIUM MOBILE MENU */}
<div
  className={`fixed inset-0 h-screen  bg-[#0b1d4d] text-white transform transition-transform duration-500 z-[9999] ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
 <div className="p-6 flex flex-col h-full font-body">

    {/* TOP LOGO + CLOSE */}
    <div className="flex items-center justify-between mb-10">
      <img src="/logo/nposlogo.jpg" alt="logo" className="h-12" />
      <X size={28} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
    </div>

    {/* MENU LINKS */}
<div className="flex flex-col gap-5 text-lg font-medium">      {navLinks.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          className="border-b border-white/20 pb-3"
        >
          {item.name}
        </Link>
      ))}
    </div>

    {/* SOCIAL SECTION */}
    <div className="mt-12">
      <p className="text-lg mb-4">Follow Us</p>
     <div className="flex gap-4">

  <a
    href="https://www.facebook.com/profile.php?id=61559099493937"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#0b1d4d] p-3 rounded-full"
  >
    <Facebook size={18} />
  </a>

  <a
    href="https://www.instagram.com/posmedia_ae?igsh=MTJzMWhrejRkbXRhcA=="
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#0b1d4d] p-3 rounded-full"
  >
    <Instagram size={18} />
  </a>

  <a
    href="https://www.linkedin.com/company/pos-media-llc/?viewAsMember=true"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#0b1d4d] p-3 rounded-full"
  >
    <Linkedin size={18} />
  </a>

  <a
    href="https://youtube.com/@posmedia-l8t?si=DrTYTpE0i23Nljhb"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#0b1d4d] p-3 rounded-full"
  >
    <Youtube size={18} />
  </a>

</div>
    </div>

    {/* CTA BUTTON */}
    <div className="mt-2">
      <Link
  to="/contact"
  onClick={() => setMenuOpen(false)}
  className="block text-center w-full bg-brandOrange hover:bg-brandOrangeHover text-white py-2 rounded-lg text-lg mt-8"
>
  Get Quote →
</Link>
    </div>

  </div>
</div>
    </>
  );
}

export default Navbar;
