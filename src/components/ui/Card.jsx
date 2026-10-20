// A simple box with a title and description. Used in the Services section.

export default function Card({ title, description }) {
  return (
    <div className="rounded-2xl border border-foreground/10 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-foreground/70">{description}</p>
    </div>
  );
}
