import Image from "next/image";
import Link from "next/link";
import { Product } from "@/components/products/types";

// ProductCardProps ensures TypeScript knows the exact shape of `product`,
// eliminating the "implicitly has 'any' type" error.
interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/products/${product.slug}`}>
            <div className="rounded-2xl border p-4 transition hover:shadow-lg">

                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="rounded-xl"
                />

                <h3 className="mt-4 text-xl font-semibold">
                    {product.name}
                </h3>

                <p className="text-sm text-gray-500">
                    {product.category}
                </p>

                <div className="mt-2 flex justify-between">
                    <span>₹{product.price}</span>

                    <span>
                        ⭐ {product.zomatoRating}
                    </span>
                </div>

            </div>
        </Link>
    );
}
