"use client";
import { motion } from "framer-motion";

export default function Booking() {
  const whatsappNumber = "2348107588729";
  const message =
    "Hello Chef Marvv, I would like to inquire about your services (Chef/Baker/Catering) in Port Harcourt.";

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="booking"
      className="py-20 md:py-32 bg-[#1C1C1C] text-[#FDFCF8] overflow-hidden flex flex-col items-center"
    >
      <div className="container mx-auto px-6 text-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="font-[family-name:var(--font-inter)] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[10px] text-[#C6A76B] font-bold mb-6 md:mb-8 block">
            Now Booking in Port Harcourt
          </span>

          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-8xl mb-8 md:mb-10 leading-[1.1] md:leading-tight">
            Reserve Your <br /> <span className="italic">Chef's Table.</span>
          </h2>

          <p className="font-[family-name:var(--font-inter)] text-white/60 text-base md:text-lg mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed px-4 md:px-0">
            From private home dining and custom cakes to full event catering.
            Chef Marv is available for bookings across the Garden City.
          </p>

          {/* Buttons - Perfectly Seated */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-md md:max-w-none relative z-50">
            <button
              onClick={handleWhatsApp}
              className="bg-[#C6A76B] text-white px-10 md:px-12 py-4 md:py-5 font-[family-name:var(--font-inter)] text-[10px] md:text-xs uppercase tracking-widest font-bold hover:bg-[#FDFCF8] hover:text-[#1C1C1C] transition-all duration-500 w-full md:w-auto"
            >
              Inquire via WhatsApp
            </button>

            <a
              href="mailto:marvellousmn10@gmail.com"
              className="border border-white/20 px-10 md:px-12 py-4 md:py-5 font-[family-name:var(--font-inter)] text-[10px] md:text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-all duration-500 w-full md:w-auto text-center"
            >
              Send an Email
            </a>
          </div>
        </motion.div>

        {/* Decorative background text */}
        <div className="mt-16 md:mt-24 opacity-[0.03] select-none pointer-events-none">
          <h1 className="font-[family-name:var(--font-playfair)] text-[20vw] md:text-[25vw] leading-none uppercase tracking-tighter">
            P.H. CITY
          </h1>
        </div>
      </div>
    </section>
  );
}
