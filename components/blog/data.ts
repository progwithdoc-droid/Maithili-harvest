import type { BlogPost, PostType } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "authentic-mithila-thekua",
    type: "blog",
    title: "Thekua: Mithila's Timeless Festive Delight",
    excerpt:
      "Handcrafted with jaggery, wheat flour, and tradition, Thekua is the soul of Chhath celebrations.",
    category: "Traditional Foods",
    date: "May 10, 2026",
    readTime: "4 min read",
    image: "/products/thekua.jpg",
    author: "Maithili Harvest",
    content: [
      "Thekua is one of Bihar's most cherished traditional sweets, especially during Chhath Puja. Made from whole wheat flour, jaggery, and aromatic fennel seeds, it carries a rich cultural heritage.",
      "Our Thekua is prepared using authentic recipes passed down through generations, ensuring every bite delivers the perfect balance of sweetness and crunch.",
      "Whether enjoyed with tea or offered during festivals, Thekua remains a symbol of Mithila's culinary traditions.",
    ],
  },
  {
    slug: "roasted-makhana-superfood",
    type: "blog",
    title: "Why Makhana is Bihar's Original Superfood",
    excerpt:
      "From the ponds of Mithila to your snack bowl, discover the nutritional power of fox nuts.",
    category: "Healthy Snacks",
    date: "May 05, 2026",
    readTime: "5 min read",
    image: "/products/makahana.webp",
    author: "Maithili Harvest",
    content: [
      "Makhana, also known as fox nuts or lotus seeds, has been cultivated in the Mithila region for centuries.",
      "Rich in protein, fiber, and antioxidants, makhana is a healthy snack suitable for all age groups.",
      "Our roasted and flavored makhana varieties—including Peri Peri, Cheese & Herbs, and Salt & Pepper—offer a delicious twist while preserving natural goodness.",
    ],
  },
  {
    slug: "crispy-phuchka-story",
    type: "blog",
    title: "The Story Behind Our Crispy Phuchka",
    excerpt:
      "Handcrafted shells that bring the authentic street-food experience home.",
    category: "Street Food",
    date: "Apr 20, 2026",
    readTime: "4 min read",
    image: "/products/puchka.jpeg",
    author: "Maithili Harvest",
    content: [
      "Phuchka, known across Bihar and Bengal as the king of street snacks, is loved for its crisp shell and tangy filling.",
      "Our phuchka shells are carefully prepared to achieve the perfect crunch while maintaining traditional taste and texture.",
      "Pair them with spicy tamarind water, mashed potatoes, and chickpeas for an unforgettable experience.",
    ],
  },
  {
    slug: "cold-coffee-refreshing-recipe",
    type: "recipe",
    title: "Creamy Cold Coffee at Home",
    excerpt:
      "A café-style cold coffee recipe made in minutes with simple ingredients.",
    category: "Beverages",
    date: "Apr 12, 2026",
    readTime: "3 min read",
    image: "/products/cofee.webp",
    author: "Maithili Harvest",
    prepTime: "5 min",
    cookTime: "0 min",
    servings: "2 glasses",
    ingredients: [
      "2 tsp instant coffee",
      "2 cups chilled milk",
      "2 tbsp sugar",
      "6-8 ice cubes",
      "1 scoop vanilla ice cream (optional)",
    ],
    steps: [
      "Add coffee, sugar, milk, and ice cubes to a blender.",
      "Blend for 30-40 seconds until frothy.",
      "Pour into tall glasses.",
      "Top with ice cream for extra richness.",
      "Serve immediately and enjoy chilled.",
    ],
    content: [
      "Cold coffee is the perfect refreshing beverage for warm days. Smooth, creamy, and energizing, it's loved by coffee enthusiasts of all ages.",
      "Using premium coffee and fresh milk creates a rich flavor that's both refreshing and satisfying.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByType(type: PostType): BlogPost[] {
  return blogPosts.filter((p) => p.type === type);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getCategories(): string[] {
  const seen = new Set<string>();
  return blogPosts
    .map((p) => p.category)
    .filter((cat) => {
      if (seen.has(cat)) return false;
      seen.add(cat);
      return true;
    });
}

function matchesSearch(post: BlogPost, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const haystack = [
    post.title,
    post.excerpt,
    post.category,
    post.author,
    post.type,
    ...post.content,
    ...(post.ingredients ?? []),
    ...(post.steps ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(q);
}

export function filterPosts(options: {
  query?: string;
  type?: PostType | "all";
  category?: string;
}): BlogPost[] {
  const { query = "", type = "all", category = "All" } = options;

  return blogPosts.filter((post) => {
    const typeMatch = type === "all" || post.type === type;
    const categoryMatch = category === "All" || post.category === category;
    const searchMatch = matchesSearch(post, query);
    return typeMatch && categoryMatch && searchMatch;
  });
}

export function getPostCounts() {
  return {
    all: blogPosts.length,
    blog: blogPosts.filter((p) => p.type === "blog").length,
    recipe: blogPosts.filter((p) => p.type === "recipe").length,
  };
}
