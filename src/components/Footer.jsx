import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { navLinks, footerProductLinks, companyInfo } from "../utils/data";
import WaveDivider from "./WaveDivider";
import logo from "../assets/logo.png";

const socials = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaWhatsapp, label: "WhatsApp", href: `https://wa.me/${companyInfo.phones[0].replace(/[^\d]/g, "")}` },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white relative overflow-hidden">
      <WaveDivider opacity={0.25} />
      <div className="edge w-full pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white overflow-hidden">
                <img src={logo} alt="Sunrise Enterprises logo" className="w-full h-full object-cover" />
              </span>
              <span className="font-display font-bold text-lg">{companyInfo.name}</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {companyInfo.tagline} — manufacturing, repair, testing and AMC
              services from our works in Sindri, Dhanbad.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/80 hover:text-accent hover:border-accent/50 transition-colors"
                >
                  <s.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-5">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {footerProductLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-5">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="text-accent flex-none mt-0.5" />
                {companyInfo.address}
              </li>
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="text-accent flex-none mt-0.5" />
                <span>{companyInfo.phones.join(", ")}</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineEnvelope className="text-accent flex-none mt-0.5" />
                {companyInfo.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved. Reg.
            No. {companyInfo.registrationNo} &middot; GSTIN {companyInfo.gstin}
          </p>
          <p className="text-xs text-white/40">Sindri &middot; Dhanbad &middot; Jharkhand</p>
        </div>
      </div>
    </footer>
  );
}
