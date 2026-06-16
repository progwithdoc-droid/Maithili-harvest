import { products } from "@/components/products/data";

/**
 * Hero background videos — drop MP4s in public/videos/ to override defaults.
 * poster: fallback image if video is missing or fails to load.
 */
export const hero1BackgroundImage = "/videos/bg.jpg";

export const heroVideos = {
  hero1: {
    src: "/videos/hero1.mp4",
    poster: "/videos/bg.jpg",
    /** Remote fallback until you add hero1.mp4 locally */
    fallback:
      "https://videos.pexels.com/video-files/1526909/1526909-uhd_2560_1440_25fps.mp4",
  },
  hero3: {
    src: "/videos/hero3.mp4",
    poster: "/videos/bg.jpg",
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
      "We use Maithili Harvest spices in our kitchen. Guests notice the depth in every dal and sabzi.",
    name: "Rajesh Kumar",
    designation: "Caterer · Delhi",
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
      "Every jar and packet can be traced back to farms and artisan groups in Mithila. We share where it was grown, when it was harvested, and who made it.",
    tag: "Traceability",
    metric: "Farm-mapped sourcing",
    image: "/Hero/fssai-1.jpg",
  },
  {
    title: "Harvested at peak",
    description:
      "Spices are sun-dried at the right season. Oils are cold-pressed within days of harvest. Makhana and grains are picked when flavour is at its best.",
    tag: "Freshness",
    metric: "48hr cold-press",
    image: "/products/makahana.webp",
  },
  {
    title: "No shortcuts",
    description:
      "No artificial colours, no fillers, no blending tricks. What you open is what was grown — stone-ground, slow-cooked, and hand-packed.",
    tag: "Purity",
    metric: "Zero additives",
    image: "/Hero/nablapproved.png",
  },
  {
    title: "Fair to farmers",
    description:
      "We pay producers above market rates and invest in farming skills and women's cooperatives across rural Bihar.",
    tag: "Community",
    metric: "Direct partnerships",
    image: "/products/thekua.jpg",
  },
];
