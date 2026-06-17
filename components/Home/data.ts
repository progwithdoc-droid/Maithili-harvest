import { products } from "@/components/products/data";

/**
 * Hero background videos — drop MP4s in public/videos/ to override defaults.
 * poster: fallback image if video is missing or fails to load.
 */
export const hero1BackgroundImage = "/videos/bg.jpg";

export const heroVideos = {
  hero1: {
    src: "/videos/hero1.mp4",
    /** Remote fallback until you add hero1.mp4 locally */
    fallback:
      "https://videos.pexels.com/video-files/1526909/1526909-uhd_2560_1440_25fps.mp4",
  },
  hero3: {
    src: "/videos/hero3.mp4",
    fallback:
      "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
  },
  hero5: {
    src: "/videos/hero5.mp4",
      poster: "/videos/bg.jpg",
    fallback:
      "https://videos.pexels.com/video-files/6613146/6613146-uhd_2560_1440_25fps.mp4",
  },
} as const;

/** Demo video — Hero1 right-side player */
export const heroDemoVideo = {
  url: "https://youtu.be/9OquUp6x5IU?si=Z7vA5MfE4rEAY9-j",
  title: "See how Maithili Harvest is made",
};

export const trustedCompanies = [
  { name: "Amazon", logo: "/companies/amazones.jpg" },
  { name: "Blinkit", logo: "/companies/blinkit.png" },
  { name: "Flipkart", logo: "/companies/flipkart.jpg" },
  { name: "Swiggy", logo: "/companies/swiggy.png" },
  { name: "Zomato", logo: "/companies/zomato.png" },
  { name: "Amazon", logo: "/companies/amazones.jpg" },
  { name: "Blinkit", logo: "/companies/blinkit.png" },
  { name: "Flipkart", logo: "/companies/flipkart.jpg" },
    { name: "Swiggy", logo: "/companies/swiggy.png" },
  { name: "Zomato", logo: "/companies/zomato.png" },
];

export const featuredProducts = products.slice(0, 4);


export const kitchenTestimonials = [
  {
    quote:
      "The Handmade Thekua captures the taste of traditional Mithila recipes beautifully. The texture is crisp, the sweetness is balanced, and it feels genuinely handcrafted rather than factory-made. It's the closest I've found to homemade Thekua.",
    name: "Priya Jha",
    designation: "Home Cook · Darbhanga",
    src: "/testimonials/priya.avif",
  },

  {
    quote:
      "What stands out about Maithili Harvest products is their consistency. The Makhana is uniformly fresh, crunchy, and clean, making it ideal for both snacking and recipe development. Quality remains dependable across every order.",
    name: "Rahul Kumar",
    designation: "Culinary Consultant · Patna",
    src: "/testimonials/rajesh.svg",
  },

  {
    quote:
      "As someone who regularly creates food content, I pay close attention to ingredient quality. The dry fruits are exceptionally fresh, naturally flavorful, and packaged with care. The difference becomes obvious the moment you open the pack.",
    name: "Ananya Singh",
    designation: "Food Creator · Mumbai",
    src: "/testimonials/anaya.avif",
  },
];




export const customerReviews = [
  {
    id: 1,
    name: "Sunita Jha",
    location: "Darbhanga, Bihar",
    product: "Handmade Thekua",
    rating: 5,
    review:
      "The first bite instantly reminded me of the homemade Thekua prepared during Chhath Puja. Perfectly crisp, balanced sweetness, and no oily aftertaste. The freshness and traditional taste truly stand out.",
    initials: "SJ",
  },

  {
    id: 2,
    name: "Amit Kumar",
    location: "Patna, Bihar",
    product: "Premium Makhana",
    rating: 5,
    review:
      "The quality of the Makhana is exceptional. Every piece is large, crunchy, and naturally fresh. It has become my family's preferred evening snack over packaged alternatives.",
    initials: "AK",
  },

  {
    id: 3,
    name: "Priya Sharma",
    location: "New Delhi",
    product: "Roasted Dry Fruits",
    rating: 5,
    review:
      "The dry fruits arrived well-packed and tasted noticeably fresher than products I usually purchase from local stores. The almonds and cashews were crisp, flavorful, and premium in quality.",
    initials: "PS",
  },

  {
    id: 4,
    name: "Rahul Mishra",
    location: "Lucknow, Uttar Pradesh",
    product: "Traditional Thekua",
    rating: 5,
    review:
      "Finding authentic regional snacks online is rare, but Maithili Harvest delivered exactly what was promised. The texture, aroma, and taste felt genuinely homemade and traditional.",
    initials: "RM",
  },

  {
    id: 5,
    name: "Neha Verma",
    location: "Mumbai, Maharashtra",
    product: "Premium Makhana",
    rating: 5,
    review:
      "I ordered Makhana for healthy snacking and was impressed by the consistency and freshness. The packaging preserved the crunch perfectly, and the quality exceeded my expectations.",
    initials: "NV",
  },

  {
    id: 6,
    name: "Sanjay Thakur",
    location: "Madhubani, Bihar",
    product: "Assorted Mithila Collection",
    rating: 5,
    review:
      "What impressed me most was the authenticity of the products. The flavors reflect the food traditions of Mithila, and the attention to quality is evident from the moment you open the package.",
    initials: "ST",
  },
];



export const brandPillars = [
  {
    title: "Certified Food Safety",
    description:
      "Every Maithili Harvest product is prepared and packed in compliance with FSSAI food safety standards. Our processes are designed to ensure hygiene, quality, and consistency from sourcing to delivery, giving you confidence in every purchase.",
    tag: "FSSAI Registered",
    metric: "Food Safety Compliant",
    image: "/Hero/fssai-1.jpg",
  },

  {
    title: "Lab-Tested Quality",
    description:
      "Quality is verified through rigorous testing by NABL-accredited laboratories. Our products undergo quality and safety checks to ensure they meet established standards for purity, authenticity, and consumer trust.",
    tag: "NABL Tested",
    metric: "Quality Assured",
    image: "/Hero/nablapproved.png",
  },

  {
    title: "Rooted in Mithila",
    description:
      "We work closely with farmers, artisans, and producer groups across the Mithila region to bring authentic traditional foods to modern households. Every purchase supports rural livelihoods while preserving generations of culinary heritage.",
    tag: "Community First",
    metric: "Direct Rural Partnerships",
    image: "/products/thekua.jpg",
  },
];

