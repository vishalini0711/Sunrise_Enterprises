import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineChevronDown } from "react-icons/hi2";
import { HiOutlineShieldCheck, HiOutlineBadgeCheck } from "react-icons/hi";
import { companyInfo, heroStats, certificationBadges, images } from "../utils/data";
import useCountUp from "../hooks/useCountUp";
import WaveDivider from "./WaveDivider";

function StatItem({ stat }) {
  if (stat.text) {
    return (
      <div className="flex flex-col items-start gap-1 border-l border-white/15 pl-5">
        <span className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
          {stat.text}
        </span>
      </div>
    );
  }

  const [ref, value] = useCountUp(stat.value, 1800);
  const display = Number.isInteger(stat.value) ? value : value.toFixed(1);

  return (
    <div ref={ref} className="flex flex-col items-start gap-1 border-l border-white/15 pl-5">
      <span className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
        {display}
        <span className="text-accent">{stat.suffix}</span>
      </span>
      <span className="text-xs sm:text-[13px] text-white/55 leading-snug">
        {stat.label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-x-hidden bg-[var(--color-navy)]"
    >
      <img
        src={images.heroTransformer}
        alt="Electrical transformer station"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)]/95 via-primary-dark/90 to-[var(--color-navy-light)]/85" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-accent/20 blur-[130px]" />
      <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-primary-light/25 blur-[130px]" />

      <div className="relative z-10 edge w-full pt-24 sm:pt-32 pb-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 xl:gap-20 items-center flex-1">
        {/* Left copy */}
        <div>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
         className="inline-flex flex-wrap sm:flex-nowrap items-center gap-2 glass rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 mb-6 sm:mb-8 max-w-full text-white"
        >
          <HiOutlineShieldCheck className="text-base flex-shrink-0" />

          <span className="text-white text-sm sm:text-base leading-snug">
            BIS Approved Transformer Manufacturer &middot; {companyInfo.location}
          </span>
        </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-[2.2rem] sm:text-5xl lg:text-[4.6rem] xl:text-[5.2rem] leading-[1.08] sm:leading-[1.02] text-white"
          >
            Power infrastructure
            <br />
            built to <span className="text-gradient">carry the load.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 sm:mt-7 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
          >
            We manufacture BIS-approved EEL-2 distribution transformers and
            rebuild oil-cooled transformers up to 2000 KVA — engineered, tested and
            dispatched from our own works in Sindri, Dhanbad and Jharkhand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#products"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-accent text-[var(--color-navy)] font-semibold rounded-full px-7 py-3.5 shadow-[var(--shadow-glow)] hover:brightness-105 hover:-translate-y-0.5 transition-all"
            >
              Explore Products
              <HiOutlineArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 glass text-white font-semibold rounded-full px-7 py-3.5 hover:bg-white/15 transition-all"
            >
              Request a Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 max-w-2xl"
          >
            {heroStats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </div>

        {/* Right: transformer illustration + floating certification cards */}
        <div className="relative hidden lg:block h-[420px] xl:h-[520px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="absolute inset-0 rounded-[28px] overflow-hidden shadow-2xl"
          >
            <img
              src={images.electricTransformerCloseup}
              alt="Distribution transformer unit"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-10 -right-6 glass rounded-2xl p-5 w-[240px]"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="kicker text-white/50">Certified</span>
              <HiOutlineBadgeCheck className="text-accent text-xl" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {certificationBadges.map((badge, i) => (
                <div
                  key={badge.title}
                  className={`glass-light rounded-xl p-3 ${i % 2 === 0 ? "float-anim" : "float-anim-delay"}`}
                >
                  <p className="font-display font-bold text-[var(--color-ink)] text-xs leading-tight">
                    {badge.title}
                  </p>
                  <p className="text-[10px] text-slate mt-1 leading-snug">{badge.subtitle}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="float-anim-delay-2 absolute -top-6 -left-6 glass rounded-2xl px-5 py-4"
          >
            <p className="kicker text-white/50">Oven Capacity</p>
            <p className="font-display font-bold text-xl text-white mt-1">Up to 2.5 MVA</p>
          </motion.div>
        </div>
      </div>

      <WaveDivider className="relative z-10" opacity={0.35} />

      <motion.a
        href="#about"
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-white/55 text-xs uppercase tracking-widest"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        Scroll
        <HiOutlineChevronDown className="text-lg" />
      </motion.a>
    </section>
  );
}
