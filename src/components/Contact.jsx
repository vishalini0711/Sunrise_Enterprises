import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { contactDetails, companyInfo } from "../utils/data";
import SectionHeading from "./SectionHeading";
import catalogueQr from "../assets/catalogue-qr.png";

// Google Maps — BIT Sindri Campus, Sindri, Dhanbad (23.654656, 86.473680)
const MAP_LAT = 23.654656;
const MAP_LNG = 86.473680;
const MAP_EMBED_SRC = "https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE";
const MAP_OPEN_URL ="https://www.google.com/maps/place/Sunrise+Enterprises+Sindri/@18.280666,81.988304,4z/data=!4m6!3m5!1s0x39f697b4ea456c31:0x4b0538872e9acced!8m2!3d23.6522872!4d86.4762138!16s%2Fg%2F11rf84ms8s?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D";

// Catalogue served from /public/catalogue — see README for how this is hosted
const CATALOGUE_URL = "/catalogue/sunrise-catalogue.pdf";

// EmailJS credentials — create a free account at emailjs.com, connect the
// sunriseenterprises0618@gmail.com inbox as the "service", and create a
// template with {{from_name}}, {{from_email}}, {{from_phone}}, {{message}}
// variables. Then set these three values as environment variables (see
// .env.example) — never hardcode real keys directly in source.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,15}$/;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!EMAIL_RE.test(form.email)) return "Please enter a valid email address.";
    if (!PHONE_RE.test(form.phone.trim())) return "Please enter a valid phone number.";
    if (!form.message.trim()) return "Please describe your requirement.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMsg(validationError);
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      setErrorMsg(
        "Email service isn't configured yet — add EmailJS credentials to .env (see .env.example)."
      );
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          message: form.message,
          to_email: companyInfo.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your message. Please try again or call us directly.");
      console.error("EmailJS send failed:", err);
    }
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
              {/* Google Map */}
              <a
                href={MAP_OPEN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Sunrise Enterprises location in Google Maps"
                className="group relative h-48 sm:h-full min-h-[180px] rounded-2xl overflow-hidden border border-line block"
              >
                <iframe
                  src={MAP_EMBED_SRC}
                  title="Sunrise Enterprises location — BIT Sindri Campus, Sindri, Dhanbad"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0 pointer-events-none"
                />
                <div className="absolute inset-0 bg-[var(--color-navy)]/0 group-hover:bg-[var(--color-navy)]/10 transition-colors flex items-end p-3">
                  <span className="text-[11px] font-semibold bg-white/95 text-primary rounded-full px-3 py-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Open in Google Maps
                  </span>
                </div>
              </a>

              {/* Catalogue QR code */}
              <a
                href={CATALOGUE_URL}
                download
                aria-label="Download the Sunrise Enterprises catalogue PDF"
                className="group relative h-48 sm:h-full min-h-[180px] rounded-2xl overflow-hidden border border-line bg-[var(--color-mist)] flex flex-col items-center justify-center gap-2 p-4"
              >
                <img
                  src={catalogueQr}
                  alt="QR code to download the Sunrise Enterprises catalogue"
                  className="w-20 h-20 rounded-md group-hover:scale-105 transition-transform"
                />
                <p className="text-xs text-slate text-center px-4">
                  Scan or tap to download our catalogue
                </p>
              </a>
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
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full px-6 py-3.5 transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent" : "Send Enquiry"}
              <HiOutlinePaperAirplane className="rotate-45" />
            </button>
            {status === "sent" && (
              <p className="text-sm text-primary text-center">
                Thanks — the works will get back to you shortly.
              </p>
            )}
            {status === "error" && errorMsg && (
              <p className="text-sm text-red-600 text-center">{errorMsg}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
