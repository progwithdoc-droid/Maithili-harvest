import type { BlogPost, PostType } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "trace-turmeric-to-farm",
    type: "blog",
    title: "Why we trace every turmeric rhizome to its farm",
    excerpt:
      "From soil testing to sun-drying — a look at how Mithila farmers preserve colour and potency.",
    category: "Sourcing",
    date: "May 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop",
    author: "Amit Kumar",
    content: [
      "Turmeric from Mithila is prized for its deep saffron colour and earthy aroma. But that quality doesn't happen by accident — it begins in the soil of Darbhanga and Madhubani districts, where farmers have cultivated haldi for generations.",
      "We partner directly with smallholder farms that follow traditional sun-drying methods. After harvest, rhizomes are boiled, sliced, and laid out on bamboo mats — never machine-dehydrated. This preserves curcumin content and gives our powder its signature warmth.",
      "Every batch carries a farm code you can look up on our website. Transparency isn't a marketing line for us — it's how we honour the farmers who grow our food.",
    ],
  },
  {
    slug: "thekua-chhath-recipe",
    type: "recipe",
    title: "Thekua at Chhath: a recipe unchanged for generations",
    excerpt:
      "Jaggery, fennel, and whole wheat — the three ingredients that define a true Mithila thekua.",
    category: "Recipes",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558961363-fa8ccfccae00?q=80&w=800&auto=format&fit=crop",
    author: "Meera Sinha",
    prepTime: "20 min",
    cookTime: "25 min",
    servings: "24 pieces",
    ingredients: [
      "2 cups whole wheat flour (atta)",
      "1 cup grated jaggery (gur)",
      "3 tbsp Maithili Harvest cold-pressed mustard oil",
      "1 tsp fennel seeds (saunf)",
      "1/2 tsp cardamom powder",
      "Warm water, as needed",
      "Oil for deep frying",
    ],
    steps: [
      "Dissolve jaggery in warm water and strain to remove impurities.",
      "Mix flour, fennel, and cardamom. Add mustard oil and rub into the flour until crumbly.",
      "Pour in jaggery water gradually and knead into a firm dough. Rest 15 minutes.",
      "Shape into small discs using a thekua mould or fork pattern.",
      "Deep fry on medium heat until golden brown and crisp. Cool completely before storing.",
    ],
    content: [
      "Thekua is the sacred offering of Chhath Puja — crisp, jaggery-sweet, and deeply aromatic. In Mithila households, the recipe passes from grandmother to granddaughter without written notes.",
      "The secret is mustard oil in the dough — it gives thekua its signature pungency and helps it stay crisp for days. Our cold-pressed oil from Darbhanga is what makes this recipe taste like home.",
    ],
  },
  {
    slug: "women-phuchka-collective",
    type: "blog",
    title: "Meet the women who hand-roll our phuchka shells",
    excerpt:
      "In Darbhanga's old quarter, a small collective keeps a street-food tradition alive.",
    category: "Community",
    date: "Apr 03, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    author: "Priya Sharma",
    content: [
      "Every phuchka shell we sell is rolled by hand — no machines, no shortcuts. In a lane off Darbhanga's main market, twelve women work in a cooperative that Maithili Harvest helped establish in 2024.",
      "They start at 4 AM, rolling semolina dough into perfect spheres, then frying them until they puff into hollow shells. The work is rhythmic, skilled, and deeply rooted in Mithila's street-food culture.",
      "When you bite into our pani phuchka, you're tasting a tradition that supports these women's livelihoods directly — we pay 2× the market rate for every batch.",
    ],
  },
  {
    slug: "mustard-oil-pickle-guide",
    type: "recipe",
    title: "Grandmother's mango pickle with cold-pressed mustard oil",
    excerpt:
      "A step-by-step guide to making raw mango achaar the Mithila way — sharp, tangy, and long-lasting.",
    category: "Recipes",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    author: "Sunita Devi",
    prepTime: "30 min",
    cookTime: "10 min",
    servings: "1 kg jar",
    ingredients: [
      "500g raw mangoes, cut into pieces",
      "1/2 cup Maithili Harvest mustard oil",
      "3 tbsp salt",
      "2 tbsp red chilli powder",
      "1 tbsp fenugreek seeds (methi)",
      "1 tbsp fennel seeds",
      "1/2 tsp turmeric powder",
      "1/2 tsp asafoetida (hing)",
    ],
    steps: [
      "Sun-dry mango pieces for 2 hours until surface moisture is gone.",
      "Heat mustard oil until smoking point, then cool to room temperature.",
      "Mix all spices with salt. Toss mangoes in the spice mix.",
      "Pack into a sterilised glass jar. Pour cooled mustard oil to cover completely.",
      "Keep in sunlight for 3 days, shaking daily. Ready in 7 days, best after 2 weeks.",
    ],
    content: [
      "Mustard oil is the soul of Mithila pickles. Its sharp pungency acts as a natural preservative and gives achaar that unmistakable kick.",
      "Use only kachi ghani, cold-pressed oil — refined oils won't give the same flavour or shelf life. Our mustard oil is pressed within 48 hours of harvest.",
    ],
  },
  {
    slug: "sona-masuri-heirloom-rice",
    type: "blog",
    title: "Why we chose Sona Masuri from the Darbhanga plains",
    excerpt:
      "Heirloom rice varieties are disappearing. Here's why we committed to this one.",
    category: "Sourcing",
    date: "Feb 20, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
    author: "Rajesh Kumar",
    content: [
      "Sona Masuri grown on the alluvial plains of Darbhanga has a softness and fragrance that hybrid varieties can't replicate. We source from three farms that have refused to switch to high-yield hybrids.",
      "The rice is aged for 60 days after milling — a step most commercial brands skip. Aging reduces moisture and improves cooking texture.",
      "Every bag lists the harvest month and farm name. When you cook our rice, you're supporting farmers who chose tradition over volume.",
    ],
  },
  {
    slug: "desi-ghee-ladoo-recipe",
    type: "recipe",
    title: "Cultured desi ghee ladoos for festivals",
    excerpt:
      "Four ingredients, one pan, and the richest aroma you'll ever pull from a kitchen.",
    category: "Recipes",
    date: "Jan 08, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1606312619070-d48f4d6a2d6b?q=80&w=800&auto=format&fit=crop",
    author: "Ananya Devi",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "12 ladoos",
    ingredients: [
      "1 cup whole wheat flour (atta)",
      "1/2 cup Maithili Harvest cultured desi ghee",
      "1/2 cup powdered jaggery",
      "1/4 tsp cardamom powder",
      "2 tbsp chopped almonds (optional)",
    ],
    steps: [
      "Heat ghee in a heavy pan. Add flour and roast on low heat, stirring constantly, until golden and fragrant (8–10 min).",
      "Remove from heat. Let cool slightly, then mix in jaggery and cardamom.",
      "Shape into round ladoos while still warm. Garnish with almonds.",
      "Store in an airtight container. Best enjoyed within 2 weeks.",
    ],
    content: [
      "Ghee ladoos are the simplest celebration sweet in Mithila — and the most satisfying. The quality of ghee makes or breaks this recipe.",
      "Our cultured desi ghee is made from A2 cow milk, slow-churned and grainy. That texture translates directly into ladoos that hold their shape and melt on the tongue.",
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
