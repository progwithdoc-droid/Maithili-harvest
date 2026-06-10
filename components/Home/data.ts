import { products } from "@/components/products/data";

/**
 * Background video for Hero1 & Hero3 only.
 * MP4: "/videos/background.mp4"  |  YouTube URL also supported.
 */
export const heroBackgroundVideo =
  "https://youtu.be/hWVJucr3Il8?si=RpVZyeMgaFzj4zsI";

/** Demo video — Hero1 right-side player only */
export const heroDemoVideo = {
  url: "https://youtu.be/9OquUp6x5IU?si=Z7vA5MfE4rEAY9-j",
  title: "See Maithili Harvest in action",
};

export const trustedCompanies = [
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
      "The mustard oil has that sharp, honest pungency I remember from my grandmother's kitchen in Madhubani.",
    name: "Priya Sharma",
    designation: "Home Chef · Patna",
    src: "/testimonials/priya.avif",
  },
  {
    quote:
      "We switched our restaurant's base spices to Maithili Harvest. Guests notice the depth immediately.",
    name: "Rajesh Kumar",
    designation: "Restaurant Owner · Delhi",
    src: "/testimonials/rajesh.svg",
  },
  {
    quote:
      "The ghee is unlike anything on supermarket shelves — granular, fragrant, and worth every rupee.",
    name: "Ananya Devi",
    designation: "Food Blogger · Mumbai",
    src: "/testimonials/anaya.avif",
  },
  {
    quote:
      "Finally, spices that taste like the Mithila I grew up in. The turmeric colour alone tells the story.",
    name: "Vikram Jha",
    designation: "Physician · Kolkata",
    src: "/products/Achar-1.webp",
  },
  {
    quote:
      "Our family orders the thekua every Chhath. It arrives fresh, crisp, and exactly like the ones from home.",
    name: "Meera Sinha",
    designation: "Teacher · Darbhanga",
    src: "/products/thekua.jpg",
  },
];

export const customerReviews = [
  {
    id: 1,
    name: "Sunita Devi",
    location: "Madhubani",
    product: "Stone-Ground Turmeric",
    rating: 5,
    review:
      "The colour is so deep and the aroma fills the whole kitchen. This is real haldi, not the pale powder from stores.",
    initials: "SD",
  },
  {
    id: 2,
    name: "Arjun Mishra",
    location: "Patna",
    product: "Cold-Pressed Mustard Oil",
    rating: 5,
    review:
      "Sharp, clean, and absolutely pure. I use it for pickles and the flavour is unmatched.",
    initials: "AM",
  },
  {
    id: 3,
    name: "Kavita Rai",
    location: "Delhi",
    product: "Handmade Thekua",
    rating: 5,
    review:
      "Crisp, not oily, with the perfect jaggery sweetness. Tastes exactly like my mother's recipe.",
    initials: "KR",
  },
  {
    id: 4,
    name: "Deepak Yadav",
    location: "Ranchi",
    product: "Cultured Desi Ghee",
    rating: 5,
    review:
      "Granular texture, rich aroma — you can tell it's made the traditional way. Worth every penny.",
    initials: "DY",
  },
  {
    id: 5,
    name: "Neha Kapoor",
    location: "Mumbai",
    product: "Sona Masuri Rice",
    rating: 4,
    review:
      "Soft, fragrant rice that cooks perfectly every time. My family noticed the difference immediately.",
    initials: "NK",
  },
  {
    id: 6,
    name: "Ramesh Thakur",
    location: "Darbhanga",
    product: "Pani Phuchka",
    rating: 5,
    review:
      "The pani has that perfect tang and spice. Brings back memories of street corners in Mithila.",
    initials: "RT",
  },
];

export const brandPillars = [
  {
    title: "Know your source",
    description:
      "Every product is traceable to a specific farm or artisan collective in Mithila. We publish sourcing notes, harvest dates, and farmer profiles.",
    tag: "Traceability",
    metric: "100% farm-mapped",
    image: "/Hero/fssai-1.jpg",
  },
  {
    title: "Harvested at peak",
    description:
      "We work with farmers who harvest at botanical peak. Spices are sun-dried, not machine-dehydrated. Oils are cold-pressed within 48 hours.",
    tag: "Freshness",
    metric: "48hr cold-press",
    image: "/products/makahana.webp",
  },
  {
    title: "No shortcuts",
    description:
      "No artificial colours, no anti-caking agents, no blended fillers. What you receive is what was grown — stone-ground and hand-packed.",
    tag: "Purity",
    metric: "Zero additives",
    image: "/Hero/nablapproved.png",
  },
  {
    title: "Fair to farmers",
    description:
      "We pay above-market rates directly to producers. A portion of every sale funds agricultural training and women's cooperatives in rural Bihar.",
    tag: "Community",
    metric: "2× market price",
    image: "/products/thekua.jpg",
  },
];
