import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { temples } from "@/content/places";

/**
 * Editorial guide to the famous ancient temples: hairline list, no cards.
 * Lives on the sightseeing page; the temple-tour route page links here.
 */
export function TempleShowcase() {
  return (
    <section className="section-tight border-t border-line">
      <Container width="wide">
        <div className="grid-12">
          <div className="lg:col-span-4">
            <ScrollReveal>
              <p className="label-caps">Temple guide</p>
              <h2 className="mt-5 text-display-md text-ink">
                Six ancient temples worth{" "}
                <em className="editorial">planning around.</em>
              </h2>
              <p className="mt-6 text-[16px] text-ink-soft leading-[1.7] max-w-sm">
                Kashi is said to hold thousands of shrines, but these six
                anchor most first visits. All of them fit in one unhurried
                day with a driver who knows the darshan timings and the
                parking points.
              </p>
              <Link
                href="/routes/varanasi-local-temple-tour"
                className="mt-8 inline-flex items-center gap-2 text-[15px] text-ink hover:text-terracotta transition-colors"
              >
                <span className="border-b border-current pb-0.5">
                  See the temple tour route
                </span>
                <ArrowUpRight className="size-4" aria-hidden strokeWidth={1.5} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-line-strong">
              {temples.map((t, i) => (
                <li
                  key={t.name}
                  className="grid grid-cols-12 gap-x-6 py-7 lg:py-8 border-b border-line"
                >
                  <span className="col-span-2 lg:col-span-1 editorial-number">
                    0{i + 1}
                  </span>
                  <div className="col-span-10 lg:col-span-11">
                    <h3 className="font-serif text-[clamp(1.3rem,1.8vw,1.7rem)] text-ink leading-[1.15]">
                      {t.name}
                    </h3>
                    <p className="mt-1 font-serif italic text-[14.5px] text-terracotta">
                      {t.epithet}
                    </p>
                    <p className="mt-3 text-[15px] text-ink-soft leading-[1.65]">
                      {t.detail}
                    </p>
                    <p className="mt-3 text-[13.5px] text-mist leading-[1.6] pl-4 border-l-2 border-marigold">
                      {t.practical}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
