"use client";
import { motion } from "framer-motion";

export default function AboutChef() {
  return (
    <section className="py-16 md:py-24 bg-[#FDFCF8] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          
          {/* 1. THE PORTRAIT */}
          <motion.div 
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 h-[450px] md:h-[600px] relative mb-8 md:mb-0"
          >
            <div className="absolute -inset-2 md:-inset-4 border border-[#C6A76B]/30 z-0 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8" />
            
            <img 
              src="/cooking-hero.jpg" 
              alt="Chef Marvv"
              className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm"
            />
          </motion.div>

          {/* 2. THE TEXT - Simplified for Clarity */}
          <div className="w-full md:w-3/5 space-y-6 md:space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-7xl text-[#1C1C1C] leading-tight">
                The Man Behind <br /> 
                <span className="italic">The Menu.</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6 font-[family-name:var(--font-inter)] text-[#4A5D4E] text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              <p>
                Based in <strong>Port Harcourt</strong>, Chef Marvv has spent over 8 years 
                perfecting the balance between professional kitchen service and the 
                art of artisan baking.
              </p>
              <p className="text-sm md:text-base text-[#1C1C1C]/70">
                Whether he is catering a large event, baking a custom cake, or 
                preparing a private dinner at home, his focus remains: 
                <span className="text-[#56332B] font-bold italic ml-1 italic">Quality ingredients, expert technique.</span>
              </p>
            </motion.div>

            {/* 3. SIGNATURE DETAIL - Updated Specialties */}
            <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.1 }} // 0.1 means it triggers as soon as it barely enters the screen
  transition={{ duration: 0.8 }}
>
  {/* The rest of your Main Skills content */}
            
              <div className="inline-block w-full md:w-auto p-5 md:p-6 border border-[#C6A76B]/20 bg-white/50 backdrop-blur-sm">
                <div className="flex justify-around md:justify-start md:gap-12">
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#C6A76B] font-bold">Main Skills</p>
                    <p className="font-[family-name:var(--font-playfair)] italic text-lg md:text-xl">Cooking & Baking</p>
                  </div>
                  <div className="w-[1px] h-10 bg-[#C6A76B]/30" />
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#C6A76B] font-bold">Experience</p>
                    <p className="font-[family-name:var(--font-playfair)] italic text-lg md:text-xl">8+ Years</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}