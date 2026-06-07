import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChefHat, Clock, Users } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/components/blog/data";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const isRecipe = post.type === "recipe";

  return (
    <main className="bg-[var(--color-cream)]">
      {/* Hero image */}
      <div className="relative h-[40vh] min-h-[280px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-maroon)]/80 via-[var(--color-maroon)]/30 to-transparent" />
        <div className="section-container absolute inset-x-0 bottom-0 pb-10">
          <Link
            href="/blog"
            className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] no-underline hover:text-[var(--color-cream)]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Journal
          </Link>
          <span className="brand-badge--gold mb-3 inline-flex">
            {isRecipe ? "Recipe" : post.category}
          </span>
          <h1 className="font-editorial max-w-3xl text-[clamp(1.8rem,4vw,3rem)] leading-tight text-[var(--color-cream)]">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--color-beige)]">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <article className="section-container py-12">
        <div className="mx-auto max-w-2xl">
          {/* Recipe meta */}
          {isRecipe && (
            <div className="mb-10 grid grid-cols-3 gap-4 rounded-2xl border border-[var(--color-beige)] bg-white p-6">
              {post.prepTime && (
                <div className="text-center">
                  <Clock className="mx-auto mb-2 h-5 w-5 text-[var(--color-gold)]" />
                  <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Prep</p>
                  <p className="font-display font-semibold text-[var(--color-maroon)]">{post.prepTime}</p>
                </div>
              )}
              {post.cookTime && (
                <div className="text-center">
                  <ChefHat className="mx-auto mb-2 h-5 w-5 text-[var(--color-gold)]" />
                  <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Cook</p>
                  <p className="font-display font-semibold text-[var(--color-maroon)]">{post.cookTime}</p>
                </div>
              )}
              {post.servings && (
                <div className="text-center">
                  <Users className="mx-auto mb-2 h-5 w-5 text-[var(--color-gold)]" />
                  <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Serves</p>
                  <p className="font-display font-semibold text-[var(--color-maroon)]">{post.servings}</p>
                </div>
              )}
            </div>
          )}

          {/* Body paragraphs */}
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="mb-6 text-base leading-relaxed text-[var(--color-text-secondary)]"
            >
              {paragraph}
            </p>
          ))}

          {/* Recipe ingredients & steps */}
          {isRecipe && post.ingredients && (
            <div className="mb-10 rounded-2xl border border-[var(--color-beige)] bg-[var(--color-beige-light)]/50 p-6">
              <h2 className="font-display mb-4 text-xl text-[var(--color-maroon)]">
                Ingredients
              </h2>
              <ul className="space-y-2">
                {post.ingredients.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isRecipe && post.steps && (
            <div className="mb-10">
              <h2 className="font-display mb-4 text-xl text-[var(--color-maroon)]">
                Method
              </h2>
              <ol className="space-y-4">
                {post.steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-maroon)] text-xs font-bold text-[var(--color-cream)]">
                      {i + 1}
                    </span>
                    <p className="pt-0.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
