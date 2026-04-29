

// import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

// function TopBar() {
//   return (
// <div className="w-full bg-gradient-to-r from-[#0f2f6b] to-[#112b72] text-white text-[12px] md:text-[14px] sticky top-0 z-[9999]">      
// <div className="w-full px-3 sm:px-4 lg:px-[5%] py-1.5 md:py-2 grid grid-cols-2 lg:grid-cols-3 items-center font-heading tracking-wide">
//         {/* LEFT : ADDRESS (ONLY DESKTOP/LAPTOP) */}
//         <div className="hidden lg:flex items-center gap-2 opacity-95">
//           <MapPin size={14} strokeWidth={2.2} />
//           <span>
//             WARE HOUSE NO. S1, 170-AL QUSAIS INDUSTRIAL AREA 4. DUBAI, UAE. POST BOX NO. 118231.
//           </span>
//         </div>

//         {/* CENTER : EMAIL + PHONE (ALWAYS VISIBLE) */}
// <div className="flex items-center justify-start lg:justify-center w-full gap-2 sm:gap-4 md:gap-8 opacity-95 whitespace-nowrap">     
//          <div className="flex items-center gap-2">
//             <Mail className="w-[13px] h-[13px] md:w-[15px] md:h-[15px]" strokeWidth={2.2} />
//             <span className="lowercase text-[12px] md:text-[14px]">
//               sales@posmediaglobal.com
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Phone className="w-[13px] h-[13px] md:w-[15px] md:h-[15px]" strokeWidth={2.2} />
//             <span className="text-[12px] md:text-[14px]">
//   +971 4 258 9 258
// </span>
//           </div>
//         </div>

//         {/* RIGHT : SOCIAL (ONLY DESKTOP/LAPTOP) */}
//         <div className="hidden lg:flex items-center justify-end gap-4 opacity-95">
//           <Facebook className="cursor-pointer hover:scale-110 hover:text-orange-300 transition" size={16} />
//           <Instagram className="cursor-pointer hover:scale-110 hover:text-orange-300 transition" size={16} />
//           <Linkedin className="cursor-pointer hover:scale-110 hover:text-orange-300 transition" size={16} />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default TopBar;

import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#0f2f6b] to-[#112b72] text-white text-[11px] sm:text-[12px] md:text-[13px] sticky top-0 z-[9999]">

      <div className="w-full px-3 sm:px-4 lg:px-[5%] py-1.5 md:py-2 
      grid grid-cols-1 lg:grid-cols-3 items-center font-body tracking-normal">

        {/* LEFT (DESKTOP ONLY) */}
        {/* <div className="hidden xl:flex  items-center gap-2 opacity-95">
          <MapPin size={14} strokeWidth={2.2} />
          <span className="whitespace-nowrap">
            WARE HOUSE NO. S1, AL QUSAIS INDUSTRIAL AREA 4, DUBAI,UAE. POST BOX NO. 118231.
          </span>
        </div> */}

        <div className="hidden xl:flex items-center gap-2 opacity-95 overflow-hidden">
  <MapPin size={14} strokeWidth={2.2} />
  <span className="truncate max-w-[550px]">
    WARE HOUSE NO. S1, AL QUSAIS INDUSTRIAL AREA 4, DUBAI, UAE. POST BOX NO. 118231.
  </span>
</div>

        {/* CENTER (MOBILE FIXED) */}
        <div className="flex items-center justify-center w-full gap-3 sm:gap-4 md:gap-6 opacity-95 whitespace-nowrap text-[10px] sm:text-[12px] md:text-[13px]">

  <div className="flex items-center gap-1">
    <Mail size={12} />
    <span className="lowercase">
      sales@posmediaglobal.com
    </span>
  </div>

  <div className="flex items-center gap-1">
    <Phone size={12} />
    <span>
      +971 4 258 9 258
    </span>
  </div>

</div>

        {/* RIGHT (DESKTOP ONLY) */}
        <div className="hidden lg:flex items-center justify-end gap-4 opacity-95">

  <a
    href="https://www.facebook.com/profile.php?id=61559099493937"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Facebook className="cursor-pointer hover:scale-110 hover:text-orange-300 transition" size={16} />
  </a>

  <a
    href="https://www.instagram.com/posmedia_ae?igsh=MTJzMWhrejRkbXRhcA=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="cursor-pointer hover:scale-110 hover:text-orange-300 transition" size={16} />
  </a>

  <a
    href="https://www.linkedin.com/company/pos-media-llc/?viewAsMember=true"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="cursor-pointer hover:scale-110 hover:text-orange-300 transition" size={16} />
  </a>

</div>

      </div>
    </div>
  );
}

export default TopBar;