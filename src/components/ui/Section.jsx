// The standard wrapper for a page section: full-width background, centred content, consistent spacing.
// spacing="full" adds space above and below; spacing="bottom" only below (for sections that follow on closely).

import Container from "@/components/ui/Container";

const spacings = {
  full: "py-28 lg:py-40",
  bottom: "pb-28 lg:pb-40",
};

export default function Section({ id, className = "", innerClassName = "", spacing = "full", children }) {
  return (
    <section id={id} className={className}>
      <Container className={`${spacings[spacing]} ${innerClassName}`}>{children}</Container>
    </section>
  );
}
