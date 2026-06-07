export type PostType = "blog" | "recipe";

export interface BlogPost {
  slug: string;
  type: PostType;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
  /** Recipe-only fields */
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  ingredients?: string[];
  steps?: string[];
}
