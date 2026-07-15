/**
 * Inline JSON-LD injector.
 * Use one per schema object — passes through Next's static optimization.
 */
type Props = { data: unknown };

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
