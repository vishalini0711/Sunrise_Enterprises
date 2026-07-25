import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineSearch, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { navLinks, companyInfo } from "../utils/data";
import useActiveSection from "../hooks/useActiveSection";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    const matches = {
      transformer: "products",
      panel: "products",
      repair: "services",
      amc: "services",
      about: "about",
      quality: "quality",
      contact: "contact",
      facility: "facility",
    };
    const key = Object.keys(matches).find((k) => q.includes(k));
    const target = document.getElementById(key ? matches[key] : "products");
    target?.scrollIntoView({ behavior: "smooth" });
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-light shadow-[var(--shadow-glass)]" : "bg-transparent"
      }`}
    >
      <div className="edge w-full flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <span
            className={`flex items-center justify-center w-11 h-11 rounded-full border overflow-hidden transition-colors ${
              scrolled ? "border-primary/25 bg-white" : "border-white/40 bg-white/95"
            }`}
          >
            <img src={logo} alt="Sunrise Enterprises logo" className="w-full h-full object-cover" />
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span
              className={`font-display font-bold text-lg tracking-tight transition-colors ${
                scrolled ? "text-[var(--color-ink)]" : "text-white"
              }`}
            >
              Sunrise Enterprises
            </span>
            <span
              className={`text-[10px] tracking-[0.2em] uppercase mt-1 transition-colors ${
                scrolled ? "text-slate-light" : "text-white/60"
              }`}
            >
              {companyInfo.tagline}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[13.5px] font-medium tracking-wide uppercase transition-colors ${
                  scrolled
                    ? isActive
                      ? "text-primary"
                      : "text-[var(--color-ink)]/75 hover:text-primary"
                    : isActive
                    ? "text-accent"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-2 left-0 right-0 h-[2px] rounded-full ${
                      scrolled ? "bg-primary" : "bg-accent"
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${
              scrolled
                ? "border-line text-[var(--color-ink)] hover:border-primary hover:text-primary"
                : "border-white/30 text-white hover:border-accent hover:text-accent"
            }`}
          >
            <HiOutlineSearch className="text-lg" />
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary hover:bg-accent hover:text-[var(--color-navy)] text-white text-sm font-semibold px-6 py-3 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Request a Quote
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${
              scrolled ? "border-line text-[var(--color-ink)]" : "border-white/30 text-white"
            }`}
          >
            {mobileOpen ? <HiOutlineX className="text-xl" /> : <HiOutlineMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Search bar drop-down */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden glass-light border-t border-line"
          >
            <form onSubmit={handleSearchSubmit} className="edge w-full flex items-center gap-3 py-4">
              <HiOutlineSearch className="text-xl text-slate" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search transformers, panels, services..."
                className="flex-1 bg-transparent outline-none text-[var(--color-ink)] placeholder:text-slate-light text-sm"
              />
              <button type="submit" className="text-sm font-semibold text-primary hover:text-primary-dark">
                Go
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-light border-t border-line overflow-hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="edge py-4 text-sm font-medium text-[var(--color-ink)] border-b border-line hover:bg-primary/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="m-4 text-center rounded-full bg-primary text-white text-sm font-semibold px-5 py-3"
              >
                Request a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
