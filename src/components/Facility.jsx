import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { HiOutlineWrenchScrewdriver, HiOutlineBeaker } from "react-icons/hi2";
import { manufacturingFacilities, testingFacilities, repairProcess, images } from "../utils/data";
import SectionHeading from "./SectionHeading";

function FacilityCard({ icon: Icon, title, items, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-white border border-line p-8 shadow-[var(--shadow-card)]"
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${gradient}`}>
        <Icon className="text-2xl text-white" />
      </div>
      <h3 className="font-display font-bold text-xl text-[var(--color-ink)] mb-5">{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate leading-relaxed">
            <HiOutlineCheckCircle className="text-primary text-lg flex-none mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Facility() {
  return (
    <section id="facility" className="bg-[var(--color-mist)]">
      {/* Full-bleed factory illustration banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative h-[38vh] min-h-[280px] w-full overflow-hidden"
      >
        <img
          src={images.substation}
          alt="Electrical infrastructure at the Sindri works"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-mist)] via-[var(--color-navy)]/50 to-[var(--color-navy)]/30" />
        <div className="absolute inset-0 flex items-end edge w-full pb-10">
          <div>
            <span className="kicker text-accent-soft">Our Setup</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
              Inside the Sindri works.
            </h2>
          </div>
        </div>
      </motion.div>

      <div className="section-pad edge w-full">
        <SectionHeading
          eyebrow="Infrastructure"
          title="Built for winding, drying and testing under one roof."
          description="A well-established SSI unit at Sindri, Dhanbad, adjacent to B.I.T Sindri, equipped for every stage from raw winding to final electrical test."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <FacilityCard
            icon={HiOutlineWrenchScrewdriver}
            title="Manufacturing Facilities"
            items={manufacturingFacilities}
            gradient="bg-gradient-to-br from-primary to-primary-dark"
          />
          <FacilityCard
            icon={HiOutlineBeaker}
            title="Testing Facilities"
            items={testingFacilities}
            gradient="bg-gradient-to-br from-[var(--color-navy)] to-primary"
          />
        </div>

        {/* Manufacturing process photo strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: images.weldingWork, alt: "Winding and fabrication work in progress" },
            { src: images.metalGrinding, alt: "Precision metal finishing on transformer parts" },
            { src: images.hardHatWork, alt: "Assembly and fitting work at the Sindri works" },
            { src: images.safetyJacketWork, alt: "Site testing and installation support" },
          ].map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-[4/3] rounded-xl overflow-hidden border border-line group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Repair process timeline */}
        <div className="mt-20">
          <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-2">
            Our Transformer Repair Process
          </h3>
          <p className="text-slate text-sm mb-8 prose-measure">
            Twelve stages, tank to test — every repair job follows the same
            sequence, ending in full electrical testing to IS 2026.
          </p>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1.15}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4.2 },
              1600: { slidesPerView: 5 },
            }}
            className="!pb-12"
          >
            {repairProcess.map((stage, i) => (
              <SwiperSlide key={stage.step}>
                <div className="h-full rounded-2xl bg-white border border-line p-6 flex flex-col gap-3 hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all">
                  <span className="font-display font-bold text-3xl text-primary/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-semibold text-[var(--color-ink)]">{stage.step}</h4>
                  <p className="text-sm text-slate leading-relaxed">{stage.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
