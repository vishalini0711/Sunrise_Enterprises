import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  size = "default",
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleSize =
    size === "large"
      ? "text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem]"
      : "text-3xl sm:text-4xl md:text-5xl";

  return (
    <motion.div
      className={`flex flex-col gap-5 max-w-3xl ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <span
          className={`kicker inline-flex items-center gap-3 ${
            light ? "text-accent" : "text-primary"
          }`}
        >
          <span className={`h-px w-8 ${light ? "bg-accent" : "bg-primary"}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-bold leading-[1.05] ${titleSize} ${
          light ? "text-white" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed prose-measure ${light ? "text-white/70" : "text-slate"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
