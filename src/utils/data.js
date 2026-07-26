// Content sourced from the Sunrise Enterprises company catalogue (sunrise.pdf).
// Copy has been rewritten to remove repetition across sections while
// preserving the catalogue's original meaning and facts.
//
// Images: curated, free-to-use Unsplash photographs (Unsplash License —
// free for commercial use, no attribution required), served directly from
// Unsplash's CDN. Swap any `img` field for your own photography at any time.

import { label } from "framer-motion/client";

const UNSPLASH = (id, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const images = {
  heroTransformer: UNSPLASH("photo-1744113511604-235e7010981f", 2400),
  substation: UNSPLASH("photo-1509390221805-d1c887a72a00", 2000),
  transmissionTower: UNSPLASH("photo-1574173799345-e672ea143892", 2000),
  transformerUnit: UNSPLASH("photo-1509390144018-eeaf65052242", 1600),
  industrialMachine1: UNSPLASH("photo-1509389807183-f0fbe962761a", 1600),
  industrialMachine2: UNSPLASH("photo-1629754085858-b8f545b7c5aa", 1600),
  industrialMachine3: UNSPLASH("photo-1629754093005-410efa256407", 1600),
  engineersFactory: UNSPLASH("photo-1581091212991-8891c7d4bd9b", 1800),
  weldingWork: UNSPLASH("photo-1504328345606-18bbc8c9d7d1", 1600),
  metalGrinding: UNSPLASH("photo-1528953030358-b0c7de371f1f", 1600),
  hardHatWork: UNSPLASH("photo-1646082276009-bb35409086ed", 1600),
  safetyJacketWork: UNSPLASH("photo-1681812508281-7589b75b2e46", 1600),
  factoryTeam: UNSPLASH("photo-1652211955967-99c892925469", 1800),
  electricTransformerCloseup: UNSPLASH("photo-1556205435-e94d9c12be26", 1600),
};

export const companyInfo = {
  name: "Sunrise Enterprises",
  tagline: "BIS Approved Distribution Transformers",
  founded: 2018,
  founder: "P. K. Singh",
  founderCredentials:
    "Degree in Electrical Engineering from BIT, Sindri – Dhanbad",
  registrationNo: "396/2018",
  type: "Partnership",
  udyogAadhaar: "JH20A0023757",
  gstin: "20ADSFS5547F1ZW",
  address:
    "S-4, SIRTDO, BIT Sindri Campus, PO – Sindri Institute, Sindri, Dhanbad, Jharkhand – 828123",
  phones: ["+91-8770804337", "+91-8982039267", "+91-7974301505"],
  email: "sunriseenterprises0618@gmail.com",
  location: "Sindri, Dhanbad, Jharkhand",
};

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Facility", href: "#facility" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 250, suffix: " KVA", label: "Manufactured up to" },
  { value: 2000, suffix: " KVA", label: "Repaired up to" },
  { text: "Electrical Panels", label: "Electrical Panels" },
  { value: 2018, label: "Est. in Sindri" },
];

export const certificationBadges = [
  { title: "MSME", subtitle: "Govt. of India" },
  { title: "ISO 14001:2015", subtitle: "Environmental Mgmt." },
  { title: "BIS Approved", subtitle: "Indian Standards" },
  { title: "BEE 4 Star", subtitle: "Energy Efficiency" },
];

// ABOUT — history kept distinct from the Hero's product-line framing;
// this section focuses on the founder, the firm's formation and its people.
export const about = {
  eyebrow: "About Us",
  headline: "Built to Perform. Designed to Last",
  history: [
    `Sunrise Enterprises was founded in 2018 by P. K. Singh, an electrical engineering graduate of BIT Sindri carrying more than three decades of hands-on experience in electrical and automation work.`,
    `That experience was built on live sites — high-voltage switchyards, thermal power plant commissioning, and power distribution inside rolling mills, sponge iron plants and pellet plants — before it was turned into a manufacturing business of its own.`,
    `Today the firm combines a core team of experienced engineers and technicians with a younger partnership of mechanical engineers who bring hands-on manufacturing know-how, together running a self-contained works at Sindri, adjacent to B.I.T Sindri.`,
  ],
  mission:
    "To deliver responsive, technically accurate service at a fair value — so every client gets a transformer or panel that performs the first time and every time after.",
  vision:
    "To be the manufacturing partner industries in Jharkhand turn to first for transformers and electrical infrastructure — trusted for standards compliance as much as for speed of response.",
  whyChooseUs: [
    {
      title: "Three Decades in the Field",
      desc: "A founder-led team with direct experience across HV switchyards, thermal plants and heavy industrial power distribution.",
    },
    {
      title: "One Roof, Full Lifecycle",
      desc: "Winding, oven-drying, tank fabrication, oil filtration and electrical testing all happen inside the same Sindri works — nothing is outsourced.",
    },
    {
      title: "Standards, Not Shortcuts",
      desc: "IS 2026 testing and BIS approval on every unit before it's cleared to leave the factory floor.",
    },
    {
      title: "Built for Uptime",
      desc: "AMC contracts and rapid repair turnaround are designed around one goal: keeping your line running.",
    },
  ],
};

// SERVICES — the catalogue's "What We Do" list, phrased around the
// customer's outcome rather than restating the Products section.
export const services = [
  {
    title: "New Transformer Manufacturing",
    desc: "EEL-2 distribution transformers manufactured to order, up to 250 KVA, ready for BIS-standard commissioning.",
  },
  {
    title: "Repair & Remanufacturing",
    desc: "Oil-cooled and special-purpose transformers up to 2000 KVA brought back to full working condition.",
  },
  {
    title: "On-Site Field Support",
    desc: "Engineers deployed to your location for installation support, inspection and troubleshooting.",
  },
  {
    title: "Testing & Commissioning",
    desc: "Independent testing and commissioning carried out at your site before a unit is handed over.",
  },
  {
    title: "Annual Maintenance Contracts",
    desc: "Scheduled inspections that extend service life and catch faults before they cause breakdown.",
  },
  {
    title: "HV/LV Consultancy",
    desc: "Advisory support on power distribution layout, switchgear selection and plant electrical automation.",
  },
];

// PRODUCTS — each description written to be distinct from its Services
// counterpart, focused on the physical product rather than the service model.
export const products = [
  {
    id: "eel2-transformer",
    name: "EEL-2 Distribution Transformer",
    category: "Manufacturing",
    desc: "Our core product line — oil-immersed distribution transformers built in-house up to 250 KVA and finished to IS 2026 tolerances.",
    img: images.transformerUnit,
  },
  {
    id: "transformer-repair",
    name: "Transformer Repair",
    category: "Repair",
    desc: "A structured rebuild covering rewinding, insulation, tanking and oil work for units up to 2000 KVA — see our 12-stage process below.",
    img: images.electricTransformerCloseup,
  },
  {
    id: "lt-control-panel",
    name: "LT Control Panel",
    category: "Panels",
    desc: "Low-tension distribution and control panels sized to your feeder and load configuration.",
    img: images.industrialMachine1,
  },
  {
    id: "pcc-panel",
    name: "PCC Panel",
    category: "Panels",
    desc: "Power Control Center assemblies for centralized low-voltage switching and metering.",
    img: images.industrialMachine2,
  },
  {
    id: "mcc-panel",
    name: "MCC Panel",
    category: "Panels",
    desc: "Motor Control Center panels that group starter and protection gear for multiple motor loads.",
    img: images.industrialMachine3,
  },
  {
    id: "dg-panel",
    name: "DG Panel",
    category: "Panels",
    desc: "Diesel generator control and synchronizing panels built for dependable standby power.",
    img: images.hardHatWork,
  },
  {
    id: "apfc-panel",
    name: "APFC Panel",
    category: "Panels",
    desc: "Automatic power factor correction panels that trim reactive losses and avoid penalty charges.",
    img: images.safetyJacketWork,
  },
  {
    id: "transformer-testing-panel",
    name: "Transformer Testing Panel",
    category: "Panels",
    desc: "In-house test panel infrastructure used to validate every transformer before dispatch.",
    img: images.weldingWork,
  },
  {
    id: "dvdf-panel",
    name: "DVDF Panel",
    category: "Panels",
    desc: "Dynamic voltage-drop test panels supporting our HV testing line at the Sindri works.",
    img: images.metalGrinding,
  },
];

export const manufacturingFacilities = [
  "7-tonne loading/unloading bay with direct road access for truck movement",
  "Semi-automatic HV & LV winding machines",
  "PID-controlled drying oven, rated up to 2.5 MVA",
  "High-vacuum transformer oil filtration plant",
  "Dedicated transformer oil storage tank",
  "Full complement of tools & tackles for assembly work",
  "Tank fabrication - Shearing machine, Bending machine, Power Press, Rolling machine"
];

export const testingFacilities = [
  "Power analyzer",
  "Automatic turns ratio meter",
  "Transformer testing panel with DVDF & HV test capability",
  "5 KV insulation resistance tester",
  "Micro ohm meter",
  "BDV tester",
  "Clamp meter",
  "True RMS multimeter",
  "Paint thickness gauge"
];

export const repairProcess = [
  { step: "Detanking", desc: "Core and windings removed from the tank for direct inspection." },
  { step: "Joint Verification Report", desc: "A joint, open inspection records the exact extent of damage." },
  { step: "Rewinding", desc: "HV and LV windings rebuilt on our semi-automatic machines." },
  { step: "Core Service", desc: "Core cleaned, checked for faults and reassembled." },
  { step: "Insulation Renewal", desc: "All insulation material replaced in full." },
  { step: "Tank Overhaul", desc: "Tank overhauled with every seal and gasket replaced." },
  { step: "Bushings & Fittings", desc: "New bushings and metal fittings installed where needed." },
  { step: "Tap Changer Service", desc: "Tap switch assessed and serviced for reliable operation." },
  { step: "Oil Treatment", desc: "Oil replaced or filtered through our vacuum plant, based on condition." },
  { step: "Oven Drying", desc: "CCA(Core Coil Assembly) dried in the PID-controlled oven before tanking." },
  { step: "Reassembly & Finish", desc: "Unit reassembled and repainted to a dispatch-ready standard." },
  { step: "Final Testing", desc: "Complete electrical testing to IS 2026 before the transformer leaves the works." },
];

export const qualityStandards = [
  { code: "IS 2026", desc: "The core standard every transformer is manufactured and tested against." },
  { code: "IS 1180 (Part 1):2014", desc: "Manufactured to Level 2 energy-efficiency requirements." },
  { code: "BEE 4 Star", desc: "Rated 4 Star for energy efficiency by the Bureau of Energy Efficiency." },
  { code: "OHSAS 18001:2007", desc: "Occupational health & safety management framework." },
  { code: "ISO 14001:2015", desc: "Environmental management system certification." },
  { code: "ISO 9001:2015", desc: "Quality management system certification." },
];

export const qualityStatement =
  "Quality control starts at sourcing: raw materials are bought only from reliable suppliers, and every finished unit is tested in-house across a range of electrical parameters before it clears for delivery — the same discipline that keeps our products compliant with both Indian and international standards.";

// Industries — drawn from the founder's stated project experience
export const industries = [
  { name: "Thermal Power Plants", desc: "Direct experience in power distribution execution within thermal plant environments.", img: images.substation },
  { name: "High Voltage Switchyards", desc: "HV switchyard project execution forms the founding experience behind the firm.", img: images.transmissionTower },
  { name: "Rolling Mills", desc: "Power distribution work delivered inside live rolling mill operations.", img: images.industrialMachine1 },
  { name: "Sponge Iron Plants", desc: "Electrical distribution experience across sponge iron production environments.", img: images.industrialMachine2 },
  { name: "Pellet Plants", desc: "Project experience in power distribution within pellet plant facilities.", img: images.industrialMachine3 },
];

export const credentials = [
  { label: "Firm Name", value: companyInfo.name },
  { label: "Location", value: companyInfo.location },
  { label: "Firm Registration No.", value: companyInfo.registrationNo },
  { label: "Entity Type", value: companyInfo.type },
  { label: "Udyog Aadhaar Number", value: companyInfo.udyogAadhaar },
  { label: "GSTIN", value: companyInfo.gstin },
];

export const contactDetails = {
  addressLines: [
    "S-4, SIRTDO, BIT Sindri Campus,",
    "PO – Sindri Institute, Sindri,",
    "Dhanbad – 828123, Jharkhand",
  ],
  phones: companyInfo.phones,
  email: companyInfo.email,
};

export const footerProductLinks = products.slice(0, 6).map((p) => ({
  label: p.name,
  href: "#products",
}));
