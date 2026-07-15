import Link from "next/link";

export type Crumb = { name: string; path: string };

type Props = { crumbs: Crumb[] };

export function Breadcrumbs({ crumbs }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] tracking-[0.18em] uppercase">
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        {crumbs.map((c, i) => (
          <li key={c.path} className="inline-flex items-center gap-3">
            {i > 0 && <span className="text-mist/50">·</span>}
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="text-charcoal">
                {c.name}
              </span>
            ) : (
              <Link
                href={c.path}
                className="text-mist hover:text-terracotta transition-colors"
              >
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
