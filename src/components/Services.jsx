import { motion } from "framer-motion";
import {
  HiOutlineCog6Tooth,
  HiOutlineWrenchScrewdriver,
  HiOutlineTruck,
  HiOutlineClipboardDocumentCheck,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { services } from "../utils/data";
import SectionHeading from "./SectionHeading";

const icons = [
  HiOutlineCog6Tooth,
  HiOutlineWrenchScrewdriver,
  HiOutlineTruck,
  HiOutlineClipboardDocumentCheck,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[var(--color-mist)]">
      <div className="edge w-full">
        <SectionHeading
          eyebrow="What We Do"
          title="Services across the full transformer lifecycle."
          description="From first winding to on-site maintenance, every service below is delivered by our own engineers and technicians."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative bg-white p-8 hover:bg-white transition-colors"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/[0.04] to-accent/[0.06] transition-opacity" />
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="relative z-10 font-display font-semibold text-lg text-[var(--color-ink)] mb-2">
                  {s.title}
                </h3>
                <p className="relative z-10 text-sm text-slate leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
