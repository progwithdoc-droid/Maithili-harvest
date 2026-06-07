import ProductCard from "@/components/ProductCard";


export default function ProductsPage() {
  const products = [
    {
      id: "1",
      slug: "pani-phuchka",

      name: "Pani Phuchka",

      category: "Phuchka",

      taste: "Spicy",

      price: 40,

      image: "/products/product-1.jpg",

      zomatoRating: 4.8,

      swiggyRating: 4.7,

      description:
        "Traditional Kolkata style pani phuchka with spicy tamarind water.",
    },

    {
      id: "2",

      slug: "dahi-phuchka",

      name: "Dahi Phuchka",

      category: "Phuchka",

      taste: "Sweet",

      price: 60,

      image: "/products/product-1.jpg",

      zomatoRating: 4.9,

      swiggyRating: 4.8,

      description:
        "Crunchy phuchka served with creamy dahi and masala.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="mb-8 text-4xl font-bold">
        Our Products
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </section>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — Maithili Harvest",
  description:
    "Browse our full range of authentic artisan food products from Mithila — spices, rice, oils, and traditional sweets. Sourced directly from Bihar's farmers.",
};

const products = [
  {
    category: "Spices",
    name: "Stone-Ground Turmeric",
    description: "Traditionally milled from single-origin Mithila rhizomes. Deep colour, earthy fragrance.",
    price: "₹ 180",
    unit: "200g",
    badge: "Bestseller",
  },
  {
    category: "Oils",
    name: "Cold-Pressed Mustard Oil",
    description: "Kachi ghani extraction. Pungent, pure, and preservative-free.",
    price: "₹ 320",
    unit: "1 Litre",
    badge: null,
  },
  {
    category: "Rice & Grains",
    name: "Sona Masuri Rice",
    description: "Heirloom variety grown on the Darbhanga plains. Low glycaemic, soft-cooking.",
    price: "₹ 140",
    unit: "1 kg",
    badge: null,
  },
  {
    category: "Sweets",
    name: "Handmade Thekua",
    description: "Festive fried wheat pastry with jaggery and fennel. Made the old way.",
    price: "₹ 220",
    unit: "500g",
    badge: "Seasonal",
  },
  {
    category: "Spices",
    name: "Black Cardamom Pods",
    description: "Smoked large cardamom. Intense, resinous aroma for biryanis and dals.",
    price: "₹ 260",
    unit: "100g",
    badge: null,
  },
  {
    category: "Oils",
    name: "Cultured Desi Ghee",
    description: "Slow-simmered from grass-fed cow milk curd. Golden, granular texture.",
    price: "₹ 680",
    unit: "500ml",
    badge: "New",
  },
];

// /*
// export default function ProductsPage() {
//   return (
//     <main style={{ backgroundColor: "var(--color-linen-white)" }}>

//       {/* ── Page header ── */}
//       <section
//         style={{
//           backgroundColor: "var(--color-deep-cacao)",
//           paddingTop: "5rem",
//           paddingBottom: "5rem",
//           borderBottom: "0.5px solid var(--color-rich-walnut)",
//         }}
//       >
//         <div className="section-container">
//           <p className="brand-tag" style={{ color: "var(--color-aged-gold)", marginBottom: "1.25rem" }}>
//             Our Products
//           </p>
//           <h1
//             style={{
//               fontFamily: "var(--font-display)",
//               fontWeight: 400,
//               fontSize: "clamp(2rem, 5vw, 3.5rem)",
//               letterSpacing: "0.05em",
//               color: "var(--color-ivory-cream)",
//               lineHeight: 1.2,
//               maxWidth: "560px",
//             }}
//           >
//             The pantry of Mithila, curated for you.
//           </h1>
//           <p
//             style={{
//               fontFamily: "var(--font-editorial)",
//               fontWeight: 300,
//               fontSize: "1.05rem",
//               fontStyle: "italic",
//               letterSpacing: "0.03em",
//               lineHeight: 1.8,
//               color: "rgba(196,164,106,0.7)",
//               marginTop: "1.25rem",
//               maxWidth: "480px",
//             }}
//           >
//             Every item is traceable, FSSAI-registered, and sourced with intention from Bihar's farming communities.
//           </p>
//         </div>
//       </section>

//       {/* ── Product grid ── */}
//       <section
//         style={{
//           paddingTop: "5rem",
//           paddingBottom: "6rem",
//         }}
//       >
//         <div className="section-container">
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//               gap: "1px",
//               border: "0.5px solid var(--color-border-gold)",
//             }}
//           >
//             {products.map((p) => (
//               <div
//                 key={p.name}
//                 style={{
//                   backgroundColor: "var(--color-linen-white)",
//                   borderRight: "0.5px solid var(--color-border-gold)",
//                   borderBottom: "0.5px solid var(--color-border-gold)",
//                   padding: "2.25rem 2rem",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "0.75rem",
//                   transition: "background-color 0.2s ease",
//                 }}
//               >
//                 {/* Category tag */}
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                   <p
//                     style={{
//                       fontFamily: "var(--font-body)",
//                       fontWeight: 500,
//                       fontSize: "10px",
//                       letterSpacing: "0.28em",
//                       textTransform: "uppercase",
//                       color: "var(--color-aged-gold)",
//                     }}
//                   >
//                     {p.category}
//                   </p>
//                   {p.badge && (
//                     <span
//                       style={{
//                         fontFamily: "var(--font-body)",
//                         fontWeight: 500,
//                         fontSize: "10px",
//                         letterSpacing: "0.2em",
//                         textTransform: "uppercase",
//                         color: "var(--color-ivory-cream)",
//                         backgroundColor: "var(--color-spice-mahogany)",
//                         padding: "3px 10px",
//                         borderRadius: "2px",
//                       }}
//                     >
//                       {p.badge}
//                     </span>
//                   )}
//                 </div>

//                 {/* Name */}
//                 <h2
//                   style={{
//                     fontFamily: "var(--font-display)",
//                     fontWeight: 400,
//                     fontSize: "1.15rem",
//                     letterSpacing: "0.03em",
//                     color: "var(--color-deep-cacao)",
//                     lineHeight: 1.3,
//                   }}
//                 >
//                   {p.name}
//                 </h2>

//                 {/* Description */}
//                 <p
//                   style={{
//                     fontFamily: "var(--font-body)",
//                     fontWeight: 300,
//                     fontSize: "0.875rem",
//                     letterSpacing: "0.04em",
//                     lineHeight: 1.85,
//                     color: "var(--color-text-muted)",
//                     flex: 1,
//                   }}
//                 >
//                   {p.description}
//                 </p>

//                 {/* Price row */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     paddingTop: "1rem",
//                     borderTop: "0.5px solid var(--color-border-gold)",
//                     marginTop: "0.5rem",
//                   }}
//                 >
//                   <div>
//                     <span
//                       style={{
//                         fontFamily: "var(--font-editorial)",
//                         fontWeight: 500,
//                         fontSize: "1.2rem",
//                         letterSpacing: "0.02em",
//                         color: "var(--color-aged-gold)",
//                       }}
//                     >
//                       {p.price}
//                     </span>
//                     <span
//                       style={{
//                         fontFamily: "var(--font-body)",
//                         fontWeight: 300,
//                         fontSize: "11px",
//                         letterSpacing: "0.08em",
//                         color: "var(--color-text-muted)",
//                         marginLeft: "6px",
//                       }}
//                     >
//                       / {p.unit}
//                     </span>
//                   </div>
//                   <button
//                     style={{
//                       fontFamily: "var(--font-body)",
//                       fontWeight: 400,
//                       fontSize: "10px",
//                       letterSpacing: "0.16em",
//                       textTransform: "uppercase",
//                       backgroundColor: "var(--color-deep-cacao)",
//                       color: "var(--color-ivory-cream)",
//                       border: "none",
//                       padding: "10px 18px",
//                       borderRadius: 0,
//                       cursor: "pointer",
//                       transition: "background-color 0.2s ease",
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Coming soon notice */}
//           <div
//             style={{
//               marginTop: "4rem",
//               padding: "2rem",
//               border: "0.5px solid var(--color-border-gold)",
//               display: "flex",
//               alignItems: "center",
//               gap: "1.5rem",
//               flexWrap: "wrap",
//             }}
//           >
//             <div style={{ flex: 1 }}>
//               <p className="brand-tag" style={{ marginBottom: "0.5rem" }}>
//                 More Coming Soon
//               </p>
//               <p
//                 style={{
//                   fontFamily: "var(--font-editorial)",
//                   fontWeight: 300,
//                   fontSize: "1rem",
//                   fontStyle: "italic",
//                   letterSpacing: "0.03em",
//                   lineHeight: 1.7,
//                   color: "var(--color-text-primary)",
//                 }}
//               >
//                 We're expanding our catalogue with seasonal and rare regional products. Subscribe to be the first to know.
//               </p>
//             </div>
//             <Link href="/contact" className="btn-secondary" style={{ color: "var(--color-spice-mahogany)", borderColor: "var(--color-spice-mahogany)", whiteSpace: "nowrap" }}>
//               Notify Me
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
// */