const bands = [
  { left: "0%", color: "#FF6F61", delay: "0s", cls: "animate-drift" },
  { left: "20%", color: "#6B5B95", delay: "-6s", cls: "animate-drift-slow" },
  { left: "40%", color: "#88B04B", delay: "-11s", cls: "animate-drift" },
  { left: "60%", color: "#F7CAC9", delay: "-3s", cls: "animate-drift-slow" },
  { left: "80%", color: "#92A8D1", delay: "-16s", cls: "animate-drift" },
];

/**
 * The site's signature backdrop: five soft, living color bands echoing the
 * brand palette, blurred into atmosphere rather than flat stripes.
 */
const GradientBackground = () => {
  return (
    <div className="aurora-backdrop" aria-hidden="true">
      {bands.map((band, i) => (
        <div
          key={i}
          className={`aurora-band ${band.cls}`}
          style={{
            left: band.left,
            background: `radial-gradient(circle at 50% ${30 + i * 8}%, ${band.color}, transparent 65%)`,
            animationDelay: band.delay,
          }}
        />
      ))}
      <div className="aurora-noise" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/40 to-ink" />
    </div>
  );
};

export default GradientBackground;
