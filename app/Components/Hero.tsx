"use client";
import { motion } from "framer-motion";

export default function Hero() {
  // --- FUNCTION TO HANDLE THE SCROLL ---
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] w-full bg-[#FDFCF8] overflow-hidden flex items-center pt-20 md:pt-0">
      
      {/* 1. BACKGROUND TEXT */}
      <div className="absolute top-10 md:top-20 left-4 md:left-10 opacity-[0.03] select-none pointer-events-none">
        <h1 className="font-[family-name:var(--font-playfair)] text-[30vw] md:text-[20vw] leading-none">
          Marvv
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* 2. TEXT CONTENT */}
        <div className="order-2 md:order-1 md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="font-[family-name:var(--font-inter)] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] text-[#C6A76B] font-bold mb-4 md:mb-6 block">
              Private Chef • Artisan Baker
            </span>
            
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[1.1] md:leading-[0.9] text-[#1C1C1C] mb-6 md:mb-8">
              The Art of <br className="hidden md:block" />
              <span className="italic md:ml-12 text-[#56332B]">Flavour.</span>
            </h1>

            <p className="font-[family-name:var(--font-inter)] text-[#4A5D4E] max-w-sm text-sm md:text-base leading-relaxed mb-8 md:mb-10 border-l-0 md:border-l border-[#C6A76B] md:pl-6">
              Your go-to for private dining, artisan breads, and luxury catering. Chef Marvv handles the food, so you can enjoy the moment
            </p>

            {/* UPDATED BUTTON WITH CLICK HANDLER */}
            <button 
              onClick={scrollToBooking}
              className="group relative flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1C1C1C] flex items-center justify-center group-hover:bg-[#1C1C1C] transition-all duration-500">
                <span className="text-[#1C1C1C] group-hover:text-white">→</span>
              </div>
              <span className="font-[family-name:var(--font-inter)] uppercase tracking-widest text-[10px] md:text-xs font-bold">
                Book an Experience
              </span>
            </button>
          </motion.div>
        </div>

        {/* 3. IMAGES SECTION */}
        <div className="order-1 md:order-2 md:col-span-7 relative h-[400px] sm:h-[500px] md:h-[700px] w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-[90%] md:w-4/5 h-[90%] md:h-[80%] z-0 rounded-t-full overflow-hidden shadow-xl"
          >
            <img 
              src="/cooking-hero.jpg" 
              className="w-full h-full object-cover grayscale-[20%]"
              alt="Gourmet Dish"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-4 md:bottom-10 left-0 w-2/5 md:w-1/2 h-[40%] md:h-1/2 z-20 border-[6px] md:border-[12px] border-[#FDFCF8] shadow-2xl overflow-hidden"
          >
            <img 
              src="/baking-hero.jpg" 
              className="w-full h-full object-cover"
              alt="Pastry Detail"
            />
          </motion.div>

          <div className="absolute top-1/2 -right-2 md:right-[10%] -translate-y-1/2 z-30 bg-[#C6A76B] text-[#FDFCF8] w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center text-[8px] md:text-[10px] font-bold text-center p-2 rotate-12 shadow-xl border-4 border-[#FDFCF8]">
            ESTD <br /> 2026 <br /> • <br /> PH
          </div>
        </div>
      </div>
    </section>
  );
}