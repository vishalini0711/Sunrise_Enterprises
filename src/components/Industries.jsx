import { motion } from "framer-motion";
import { industries } from "../utils/data";
import SectionHeading from "./SectionHeading";

export default function Industries() {
  return (
    <section className="section-pad bg-white">
      <div className="edge w-full">
        <SectionHeading
          eyebrow="Industries Served"
          title="Experience across heavy industrial power distribution."
          description="Our founder's three decades of project execution span these sectors — the same expertise now shapes every transformer we manufacture and repair."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-line hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all h-72"
            >
              <img
                src={ind.img}
                alt={ind.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/55 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="font-display font-semibold text-white text-base mb-2">{ind.name}</h3>
                <p className="text-xs text-white/75 leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
