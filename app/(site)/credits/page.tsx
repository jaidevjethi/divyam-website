import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { photoCredits } from "@/content/credits";

export const metadata: Metadata = buildMetadata({
  title: "Photo Credits | Divyam Tours",
  description: "Photographer credits for imagery used on the Divyam Tours website.",
  path: "/credits",
  noindex: true,
});

export default function CreditsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Photography"
        title="Image credits."
        lede="Imagery on this site is AI-generated illustrative photography prepared for Divyam Tours. Real operator photography will replace these over time."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Credits", path: "/credits" },
        ]}
        compact
      />

      <section className="pb-20 sm:pb-28">
        <Container width="wide">
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 border-t border-line-strong pt-10">
            {photoCredits.map((c) => (
              <li key={c.file}>
                <div className="img-wrap relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={`/images/${c.file}`}
                    alt={c.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-serif italic text-[15.5px] text-ink leading-[1.45]">
                  {c.caption}
                </p>
                {c.source === "unsplash" ? (
                  <>
                    <p className="mt-3 text-[12px] text-mist tracking-wide">
                      Photographer · <span className="text-ink">{c.photographer}</span>
                    </p>
                    <a
                      href={`https://unsplash.com/photos/${c.unsplashSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-[12px] text-mist hover:text-terracotta transition-colors"
                    >
                      <span className="border-b border-current pb-0.5">View on Unsplash</span>
                      <ExternalLink className="size-3" aria-hidden strokeWidth={1.5} />
                    </a>
                  </>
                ) : (
                  <p className="mt-3 text-[12px] text-mist tracking-wide">
                    AI-generated illustrative image · Divyam Tours
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
