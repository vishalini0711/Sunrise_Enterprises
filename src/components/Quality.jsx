import { motion } from "framer-motion";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { qualityStandards, qualityStatement } from "../utils/data";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

export default function Quality() {
  return (
    <section
      id="quality"
      className="section-pad bg-gradient-to-b from-[var(--color-navy)] to-primary-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-accent/10 blur-[130px] rounded-full" />

      <div className="edge w-full relative z-10">
        <SectionHeading
          eyebrow="Quality Control"
          light
          title="Certified, standard by standard."
          description={qualityStatement}
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityStandards.map((std, i) => (
            <motion.div
              key={std.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass rounded-2xl p-7 hover:bg-white/10 hover:-translate-y-1 transition-all"
            >
              <HiOutlineShieldCheck className="text-2xl text-accent mb-4" />
              <h3 className="font-display font-bold text-white text-lg mb-2">{std.code}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{std.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <WaveDivider opacity={0.3} />
      </div>
    </section>
  );
}
