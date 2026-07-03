/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        base: "#0B0D12",
        surface: "#12141C",
        "surface-light": "#191C27",
        border: "#242836",
        accent: "#7C5CFC",
        "accent-light": "#9B82FF",
        teal: "#22D3B8",
        muted: "#9CA3AF",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #7C5CFC 0%, #22D3B8 100%)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 92, 252, 0.25)",
      },
    },
  },
  plugins: [],
};
