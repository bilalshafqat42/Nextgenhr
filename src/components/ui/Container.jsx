// Keeps content centred with a max width and side padding.
// Wrap any section's content in this so everything lines up.

export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1360px] px-5 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}
