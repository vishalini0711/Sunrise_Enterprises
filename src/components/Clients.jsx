import { motion } from "framer-motion";
import { credentials, images } from "../utils/data";
import SectionHeading from "./SectionHeading";

export default function Clients() {
  return (
    <section className="section-pad bg-[var(--color-mist)]">
      <div className="edge w-full grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <SectionHeading
          eyebrow="Trust & Credentials"
          title="A registered, verifiable manufacturing partner."
          description="Every engagement is backed by our formal registration as a partnership firm, our Udyog Aadhaar (MSME) registration, and a valid GSTIN — the same credentials our quotations and invoices carry."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] grid sm:grid-cols-2"
        >
          <div className="hidden sm:block h-full min-h-[280px] relative">
            <img
              src={images.transmissionTower}
              alt="Power transmission infrastructure"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/50 to-transparent" />
          </div>
          <div className="bg-white p-8">
            <div className="divide-y divide-line">
              {credentials.map((c) => (
                <div key={c.label} className="flex items-center justify-between py-3.5 gap-4">
                  <span className="text-xs uppercase tracking-wider text-slate-light font-medium">
                    {c.label}
                  </span>
                  <span className="font-mono text-sm text-[var(--color-ink)] text-right">{c.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
