/** Fixed ambient layer: two faint gradient glows, a fading grid and film grain. Fully static, so it costs nothing on scroll. */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-[30vh] left-1/2 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.16),transparent)]" />
      <div className="absolute -bottom-[30vh] right-[-10vw] h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent-2)/0.08),transparent)]" />
      <div className="bg-grid absolute inset-0" />
      <div className="noise absolute inset-0" />
    </div>
  );
}
