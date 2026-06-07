import { products } from "@/components/products/data";

export const trustedCompanies = [
  { name: "FreshMart", logo: "/companies/freshmart.svg" },
  { name: "HarvestCo", logo: "/companies/harvestco.svg" },
  { name: "PureFoods", logo: "/companies/purefoods.svg" },
  { name: "FarmDirect", logo: "/companies/farmdirect.svg" },
  { name: "SpiceRoute", logo: "/companies/spiceroute.svg" },
  { name: "GreenBasket", logo: "/companies/greenbasket.svg" },
];

export const featuredProducts = products.slice(0, 4);

export const kitchenTestimonials = [
  {
    quote:
      "The mustard oil has that sharp, honest pungency I remember from my grandmother's kitchen in Madhubani.",
    name: "Priya Sharma",
    designation: "Home Chef · Patna",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "We switched our restaurant's base spices to Maithili Harvest. Guests notice the depth immediately.",
    name: "Rajesh Kumar",
    designation: "Restaurant Owner · Delhi",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "The ghee is unlike anything on supermarket shelves — granular, fragrant, and worth every rupee.",
    name: "Ananya Devi",
    designation: "Food Blogger · Mumbai",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Finally, spices that taste like the Mithila I grew up in. The turmeric colour alone tells the story.",
    name: "Vikram Jha",
    designation: "Physician · Kolkata",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Our family orders the thekua every Chhath. It arrives fresh, crisp, and exactly like the ones from home.",
    name: "Meera Sinha",
    designation: "Teacher · Darbhanga",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
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
    image: "/hero/traceability.svg",
  },
  {
    title: "Harvested at peak",
    description:
      "We work with farmers who harvest at botanical peak. Spices are sun-dried, not machine-dehydrated. Oils are cold-pressed within 48 hours.",
    tag: "Freshness",
    metric: "48hr cold-press",
    image: "/hero/freshness.svg",
  },
  {
    title: "No shortcuts",
    description:
      "No artificial colours, no anti-caking agents, no blended fillers. What you receive is what was grown — stone-ground and hand-packed.",
    tag: "Purity",
    metric: "Zero additives",
    image: "/hero/purity.svg",
  },
  {
    title: "Fair to farmers",
    description:
      "We pay above-market rates directly to producers. A portion of every sale funds agricultural training and women's cooperatives in rural Bihar.",
    tag: "Community",
    metric: "2× market price",
    image: "/hero/community.svg",
  },
];
