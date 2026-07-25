import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
  HiOutlineQrCode,
} from "react-icons/hi2";
import { contactDetails, companyInfo } from "../utils/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="edge w-full">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to the works."
          description="For manufacturing enquiries, repair jobs, AMC contracts or site testing, reach the Sindri office directly."
        />

        <div className="mt-14 grid lg:grid-cols-[0.95fr_1.05fr] gap-10">
          {/* Left: info + map + QR */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-line p-7 bg-[var(--color-mist)]"
            >
              <div className="flex items-start gap-4 mb-5">
                <HiOutlineMapPin className="text-2xl text-primary flex-none mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-light mb-1">
                    Factory Address
                  </p>
                  {contactDetails.addressLines.map((line) => (
                    <p key={line} className="text-[var(--color-ink)] text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4 mb-5">
                <HiOutlinePhone className="text-2xl text-primary flex-none mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-light mb-1">Phone</p>
                  <p className="text-[var(--color-ink)] text-sm">
                    {contactDetails.phones.map((p, i) => (
                      <a key={p} href={`tel:${p}`} className="hover:text-primary">
                        {p}
                        {i < contactDetails.phones.length - 1 ? ", " : ""}
                      </a>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HiOutlineEnvelope className="text-2xl text-primary flex-none mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-light mb-1">Email</p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-[var(--color-ink)] text-sm hover:text-primary"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-48 sm:h-full min-h-[180px] rounded-2xl overflow-hidden border border-line bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-grid-dark opacity-40" />
                <HiOutlineMapPin className="relative z-10 text-3xl text-primary" />
                <p className="relative z-10 text-xs text-slate text-center px-4">
                  Google Map — BIT Sindri Campus, Dhanbad
                </p>
              </motion.div>

              {/* QR placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative h-48 sm:h-full min-h-[180px] rounded-2xl overflow-hidden border border-line bg-[var(--color-mist)] flex flex-col items-center justify-center gap-2"
              >
                <HiOutlineQrCode className="text-5xl text-primary/70" />
                <p className="text-xs text-slate text-center px-4">
                  Scan to save {companyInfo.name} contact
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line p-8 bg-white shadow-[var(--shadow-card)] flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-light">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-light">
                  Phone
                </label>
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  className="rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-light">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-light">
                Requirement
              </label>
              <textarea
                required
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about the transformer rating, repair job, or AMC requirement..."
                className="rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full px-6 py-3.5 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              {status === "sent" ? "Message Sent" : "Send Enquiry"}
              <HiOutlinePaperAirplane className="rotate-45" />
            </button>
            {status === "sent" && (
              <p className="text-sm text-primary text-center">
                Thanks — the works will get back to you shortly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
