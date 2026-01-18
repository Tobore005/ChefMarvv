"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FDFCF8] pt-20 pb-10 border-t border-[#1C1C1C]/5 flex flex-col items-center">
      {/* 1. Main Content Wrapper */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left mb-16 md:mb-24">
          {/* Brand Identity - Focused in the middle on mobile */}
          <div className="max-w-sm flex flex-col items-center md:items-start">
            <h3 className="font-[family-name:var(--font-playfair)] text-4xl mb-4 italic text-[#1C1C1C]">
              Chef Marv.
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#4A5D4E] leading-relaxed">
              Chef, Baker, and Caterer. Professional culinary services for
              private dining and events across <strong>Port Harcourt.</strong>
            </p>
          </div>

          {/* Links Section - Symmetrical on mobile */}
          <div className="grid grid-cols-2 gap-12 md:gap-24 w-full md:w-auto">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.4em] font-bold text-[#C6A76B] mb-6">
                Explore
              </h4>
              <ul className="font-[family-name:var(--font-inter)] text-[11px] space-y-4 uppercase tracking-[0.2em] text-[#1C1C1C]">
                <li className="hover:text-[#C6A76B] cursor-pointer transition-colors">
                  Experience
                </li>
                <li className="hover:text-[#C6A76B] cursor-pointer transition-colors">
                  Bakery
                </li>
                <li
                  className="hover:text-[#C6A76B] cursor-pointer transition-colors"
                  onClick={() =>
                    document
                      .getElementById("booking")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Booking
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.4em] font-bold text-[#C6A76B] mb-6">
                Social
              </h4>
              <ul className="font-[family-name:var(--font-inter)] text-[11px] space-y-4 uppercase tracking-[0.2em] text-[#1C1C1C]">
                <li className="hover:text-[#C6A76B] cursor-pointer transition-colors">
                  <a
                    href="https://www.instagram.com/crown_prince.marv/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="hover:text-[#C6A76B] cursor-pointer transition-colors">
                  <a
                    href="https://wa.me/2348107588729"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Bottom Bar */}
        <div className="w-full pt-10 border-t border-[#1C1C1C]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
            <p className="font-[family-name:var(--font-inter)] text-[9px] text-[#1C1C1C]/40 uppercase tracking-[0.3em]">
              © {currentYear} Chef Marv. All Rights Reserved.
            </p>

            {/* Minimalist Signature */}
            <div className="flex items-center gap-4 justify-center">
              <div className="w-8 h-[1px] bg-[#C6A76B]/30" />
              <p className="font-[family-name:var(--font-inter)] text-[9px] text-[#1C1C1C]/40 uppercase tracking-[0.3em] italic">
                Built by Tobore
              </p>
              <div className="w-8 h-[1px] bg-[#C6A76B]/30" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
