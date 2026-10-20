// Keeps content centred with a max width and side padding.
// Wrap any section's content in this so everything lines up.

export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
