import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";
import { products } from "../utils/data";
import SectionHeading from "./SectionHeading";
import ProductCard, { EmptyState } from "./ProductCard";

export default function Products() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="section-pad bg-white">
      <div className="edge w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Our Products"
            title="Manufactured, repaired, tested — in-house."
            description="Every product below is manufactured or repaired at our Sindri works and tested before it leaves the factory."
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  active === cat
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/25"
                    : "border-line text-slate hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.length === 0 && <EmptyState />}
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} onLearnMore={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[var(--color-navy)]/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl bg-white overflow-hidden shadow-2xl"
            >
              <div className="h-44 relative bg-[var(--color-mist)]">
                {selected && (
                  <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-white"
                >
                  <HiOutlineX />
                </button>
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {selected.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mt-2 mb-3">
                  {selected.name}
                </h3>
                <p className="text-slate leading-relaxed text-sm">{selected.desc}</p>
                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="mt-6 inline-flex items-center gap-2 bg-primary text-white font-semibold rounded-full px-6 py-3 hover:bg-primary-dark transition-colors"
                >
                  Request a Quote
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
