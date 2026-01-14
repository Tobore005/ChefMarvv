"use client";
import { motion } from "framer-motion";

const specialties = [
  {
    title: "Private Chef Service",
    desc: "Professional multi-course dining served in the comfort of your home.",
    tag: "Chef",
    size: "md:col-span-8", // Large horizontal box
    img: "/private-chef.jpg" 
  },
  {
    title: "Artisan Bakery",
    desc: "Freshly baked sourdough, brioche, and specialty loaves made daily.",
    tag: "Baker",
    size: "md:col-span-4", // Tall vertical box
    img: "/artisan-bread.jpg"
  },
  {
    title: "Custom Cakes",
    desc: "Bespoke celebration cakes and luxury treats for your special moments.",
    tag: "Baker",
    size: "md:col-span-4",
    img: "/luxury-cakes.jpg"
  },
  {
    title: "Event Catering",
    desc: "Premium food service for weddings, corporate events, and home parties.",
    tag: "Caterer",
    size: "md:col-span-8",
    img: "/event-catering.jpg"
  }
];

export default function Specialties() {
  return (
    <section className="py-24 bg-[#FDFCF8] px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#1C1C1C] mb-4">
            Signature <span className="italic text-[#56332B]">Creations.</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#C6A76B]" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.size} relative h-[400px] overflow-hidden group cursor-pointer`}
            >
              {/* Image with Dark Overlay */}
              <img 
                src={item.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Text Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[#C6A76B] font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                  {item.tag}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-white mb-2 italic">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-white/70 text-sm max-w-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}