import { motion } from "framer-motion";
import { HiOutlineEye, HiOutlineFlag, HiOutlineCheckCircle } from "react-icons/hi";
import { about, companyInfo, images } from "../utils/data";
import SectionHeading from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[110px]" />
      <div className="edge w-full relative">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.headline}
          description={`Founded by ${companyInfo.founder} — ${companyInfo.founderCredentials}.`}
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_0.9fr] gap-16 items-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 rounded-[28px] overflow-hidden shadow-[var(--shadow-card)] aspect-square lg:aspect-auto lg:h-[440px] relative"
          >
            <img
              src={images.engineersFactory}
              alt="Engineers at work on the factory floor"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/40 via-transparent to-transparent" />
          </motion.div>

          {/* History */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="order-1 lg:order-2 flex flex-col gap-5"
          >
            {about.history.map((para, i) => (
              <motion.p key={i} variants={fadeUp} className="text-slate leading-relaxed text-[15px]">
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Vision / Mission */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl p-8 bg-gradient-to-br from-primary to-primary-dark text-white shadow-[var(--shadow-card)]"
          >
            <HiOutlineFlag className="text-2xl text-accent-soft mb-3" />
            <h3 className="font-display font-bold text-lg mb-2">Our Mission</h3>
            <p className="text-white/80 text-sm leading-relaxed">{about.mission}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl p-8 border border-line shadow-[var(--shadow-card)]"
          >
            <HiOutlineEye className="text-2xl text-primary mb-3" />
            <h3 className="font-display font-bold text-lg mb-2 text-[var(--color-ink)]">Our Vision</h3>
            <p className="text-slate text-sm leading-relaxed">{about.vision}</p>
          </motion.div>
        </div>

        {/* Why choose us */}
        <div className="mt-20">
          <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-8">Why Choose Us</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-line p-7 hover:border-primary/40 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all bg-white"
              >
                <HiOutlineCheckCircle className="text-2xl text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">{item.title}</h4>
                <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
