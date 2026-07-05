"use client";
import Image from "next/image";
import { aboutSections } from "../../Data/aboutData";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-slate-950 py-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3b5b81] dark:text-white mb-16">
          About NovaStyle
        </h2>

        <div className="space-y-20">
          {aboutSections.map((item, index) => {
            const isMiddle = index === 1;

            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                key={index}
                className={`
                  flex flex-col md:flex-row items-center gap-10
                  p-6 md:p-10 rounded-xl transition-colors
                  ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
                  ${
                    isMiddle
                      ? "bg-[#3b5b81]"
                      : "bg-white dark:bg-slate-900"
                  }
                `}
              >
                <div className="w-full md:w-1/2 relative h-75 md:h-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl shadow-lg"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <h3
                    className={`
                      text-2xl md:text-3xl font-semibold mb-4
                      ${
                        isMiddle
                          ? "text-white"
                          : "text-[#3b5b81] dark:text-white"
                      }
                    `}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`
                      text-lg leading-relaxed mb-6
                      ${
                        isMiddle
                          ? "text-gray-200"
                          : "text-gray-600 dark:text-slate-300"
                      }
                    `}
                  >
                    {item.description}
                  </p>

                  <div className="w-16 h-1 bg-[#c07e2b]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;