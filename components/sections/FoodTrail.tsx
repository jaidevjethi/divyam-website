import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { foodStops } from "@/content/places";

/**
 * The Banarasi food trail: image rail + hairline list of famous dishes and
 * the independent institutions known for them. Suggestions only; the named
 * shops are unaffiliated and the driver simply works stops into the day.
 */
export function FoodTrail() {
  return (
    <section id="food" className="section-tight bg-cream-deep scroll-mt-24">
      <Container width="wide">
        <div className="grid-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <ScrollReveal>
                <div className="img-wrap relative aspect-[3/4] w-full rounded-2xl border border-line shadow-md overflow-hidden">
                  <Image
                    src="/images/food-lassi.webp"
                    alt="Malai lassi in a clay kulhad topped with cream, saffron and pistachio"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-serif italic text-[14px] text-mist leading-[1.5]">
                  Malai lassi in a kulhad: the old-city lassi houses serve it
                  under a cap of clotted cream.
                </p>
              </ScrollReveal>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <ScrollReveal>
              <p className="label-caps">Eat like a local</p>
              <h2 className="mt-5 text-display-md text-ink">
                The Banarasi food trail,{" "}
                <em className="editorial">between the temples.</em>
              </h2>
              <p className="mt-5 text-[16px] text-ink-soft leading-[1.7] max-w-2xl">
                Banaras takes food as seriously as it takes faith. Most of
                the famous institutions sit in the old-city lanes near the
                ghats, so two or three stops slot naturally into a
                sightseeing day. Tell the driver what you want to try and
                the route bends around it.
              </p>
            </ScrollReveal>

            <ul className="mt-10 border-t border-line-strong">
              {foodStops.map((f) => (
                <li
                  key={f.dish}
                  className="grid grid-cols-12 gap-x-6 py-6 lg:py-7 border-b border-line"
                >
                  <div className="col-span-12 lg:col-span-4">
                    <h3 className="font-serif text-[clamp(1.2rem,1.6vw,1.45rem)] text-ink leading-[1.15]">
                      {f.dish}
                    </h3>
                    <p className="mt-1.5 label-caps text-terracotta">{f.where}</p>
                  </div>
                  <p className="col-span-12 lg:col-span-8 mt-2 lg:mt-0 text-[15px] text-ink-soft leading-[1.65]">
                    {f.note}
                  </p>
                </li>
              ))}
            </ul>

            <div className="img-wrap relative aspect-[16/9] w-full rounded-2xl border border-line shadow-sm overflow-hidden mt-10">
              <Image
                src="/images/food-kachori.webp"
                alt="Kachori with sabzi in a leaf bowl, jalebis and kulhad chai on a brass counter"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <p className="mt-6 text-[13px] text-mist italic leading-[1.6]">
              The shops named here are independent Varanasi institutions,
              listed as suggestions only. Timings vary by season; the
              coordinator confirms what fits your day.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
