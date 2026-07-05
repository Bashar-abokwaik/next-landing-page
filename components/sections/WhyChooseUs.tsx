"use client";

import { motion } from "framer-motion";
import { FaShippingFast, FaGem, FaUndo, FaLock } from "react-icons/fa";

// Define the features to be displayed in the "Why Choose Us" section
const features = [
  {
    icon: <FaShippingFast size={30} />,
    title: "Fast Shipping",
    description: "Get your favorite styles delivered quickly and safely.",
  },
  {
    icon: <FaGem size={30} />,
    title: "Premium Quality",
    description: "We provide high-quality clothing made to last.",
  },
  {
    icon: <FaUndo size={30} />,
    title: "Easy Returns",
    description: "Not satisfied? Return items easily and hassle-free.",
  },
  {
    icon: <FaLock size={30} />,
    title: "Secure Payment",
    description: "Your payment information is safe and encrypted.",
  },
];

// Define the animation variants for the container and individual cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[var(--bg3)] py-20 transition-colors dark:bg-slate-950"
    >
      <motion.div
        className="mx-auto max-w-7xl px-6 text-center md:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="mb-14 text-4xl font-bold text-[#3b5b81] dark:text-white md:text-5xl">
          Why Choose NovaStyle?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="
                group
                rounded-2xl
                border
                border-transparent
                bg-white
                dark:bg-slate-900
                p-8
                shadow-md

                transition-all
                duration-200
                ease-out

                hover:-translate-y-2
                hover:scale-[1.02]
                hover:border-[#c07e2b]/30
                hover:shadow-2xl
              "
            >
              <div
                className="
                  mx-auto
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full

                  bg-[#3b5b81]/10
                  text-[#c07e2b]

                  transition-all
                  duration-200

                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:bg-[#c07e2b]/15
                "
              >
                {feature.icon}
              </div>

              <h3
                className="
                  mb-3
                  text-xl
                  font-semibold
                  text-[#3b5b81]
                  dark:text-white

                  transition-colors
                  duration-200

                  group-hover:text-[#c07e2b]
                "
              >
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WhyChooseUs;