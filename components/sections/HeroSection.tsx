"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/Images/hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-white/85 via-white/60 to-transparent dark:from-gray-900/85 dark:via-gray-900/60 dark:to-transparent transition-colors"></div>
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 pt-20">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="text-4xl md:text-6xl font-bold text-[#3b5b81] mb-4 dark:text-[#c07e2b]"
          >
            Discover Your Style
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-gray-700 text-lg mb-6 dark:text-gray-300"
          >
            Modern fashion that fits your lifestyle. Clean, elegant and made for
            you.
          </motion.p>
          {/* Shop Now Button with Animation */}
          <motion.a
            href="http://localhost:5173/"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="inline-block bg-[#c07e2b] text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition dark:bg-[#c07e2b] dark:hover:bg-[#b06c26]"
          >
            Shop Now
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
