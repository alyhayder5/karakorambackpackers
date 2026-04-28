import Image from "next/image";
import Link from "next/link";
import { contentWidthShell } from "@/lib/content-shell";
import { blogPostPreviews } from "@/lib/blog-posts";
import { buildBlogSectionJsonLd } from "@/lib/blog-schema";

export function BlogUpdates() {
  const jsonLd = buildBlogSectionJsonLd(blogPostPreviews);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section
        id="blog"
        className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
        aria-labelledby="blog-heading"
      >
        <div className={contentWidthShell}>
          <header>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Blog &amp; news
            </p>
            <h2
              id="blog-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Get every single update
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
              Trekking tips, packing lists, and trip news from{" "}
              <span className="text-zinc-300">Karakoram Backpackers</span>—
              written for travelers planning{" "}
              <span className="text-zinc-300">Hunza</span>,{" "}
              <span className="text-zinc-300">Skardu</span>, and wider{" "}
              <span className="text-zinc-300">Gilgit–Baltistan</span> routes.
            </p>
          </header>

          <ul
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {blogPostPreviews.map((post) => (
              <li key={post.id}>
                <article
                  id={`blog-post-${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface-elevated"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <time
                      className="absolute bottom-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow-lg"
                      dateTime={post.datePublished}
                    >
                      {post.dateLabel}
                    </time>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold leading-snug text-white">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                      {post.description}
                    </p>
                    <Link
                      href={`/#blog-post-${post.slug}`}
                      className="mt-auto pt-4 text-sm font-semibold text-accent hover:text-accent-hover"
                      aria-label={`Read more: ${post.title}`}
                    >
                      Read more
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
