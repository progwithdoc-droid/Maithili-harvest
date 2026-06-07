/**
 * Shared TypeScript types for the products system.
 * Import from here throughout the project for consistency.
 */

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  taste: string;
  price: number;
  unit?: string;
  image: string;
  zomatoRating: number;
  swiggyRating: number;
  description: string;
  badge?: string | null;
}
