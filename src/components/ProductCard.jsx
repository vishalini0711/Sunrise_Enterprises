import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineBoltSlash } from "react-icons/hi2";

export default function ProductCard({ product, index = 0, onLearnMore }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="group flex flex-col rounded-2xl bg-white border border-line overflow-hidden hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-[var(--color-mist)]">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/50 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase bg-white/95 text-primary rounded-full px-3 py-1 shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-2">{product.name}</h3>
        <p className="text-sm text-slate leading-relaxed flex-1">{product.desc}</p>

        <button
          onClick={() => onLearnMore?.(product)}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark group/btn w-fit"
        >
          Learn More
          <HiOutlineArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center gap-3 py-16 text-slate">
      <HiOutlineBoltSlash className="text-4xl" />
      <p className="text-sm">No products found in this category.</p>
    </div>
  );
}
