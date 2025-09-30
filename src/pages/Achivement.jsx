import { motion } from "framer-motion";
import { awards } from "../data/awards"; 

// Example awards (grouped by category, can include all 27)


export default function Achievement() {
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center w-full mb-16">
          <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-white">
            ACHIEVEMENTS
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A collection of awards, recognitions, and accomplishments highlighting innovation, dedication, and excellence in research and professional contributions over the years.
          </p>
        </div>

        {/* Category Sections */}
        {Object.entries(awards).map(([category, items], catIdx) => (
          <div key={catIdx} className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-400 mb-6 text-center">{category} Awards</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {items.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-center shadow-xl hover:scale-105 transition-transform duration-300 p-6 w-64"
                >
                  <img src={award.img} alt="medal" className="h-28 w-28 object-contain mx-auto mb-4" />
                  <h3 className="tracking-widest text-lg font-bold text-gray-200 mb-2">{award.title}</h3>
                  <p className="leading-relaxed text-purple-900 font-bold mb-2">{award.desc}</p>
                  <p className="leading-relaxed text-gray-400">{award.place}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
