/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08080c",
          900: "#0b0b11",
          800: "#111118",
          700: "#191922",
          600: "#22222e",
        },
        coral: "#FF6F61",
        violet: "#6B5B95",
        moss: "#88B04B",
        blush: "#F7CAC9",
        sky: "#92A8D1",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "brand-line":
          "linear-gradient(90deg, #FF6F61, #6B5B95, #88B04B, #F7CAC9, #92A8D1)",
        "brand-radial-1":
          "radial-gradient(circle at 30% 20%, rgba(255,111,97,0.55), transparent 60%)",
        "brand-radial-2":
          "radial-gradient(circle at 70% 30%, rgba(107,91,149,0.55), transparent 60%)",
        "brand-radial-3":
          "radial-gradient(circle at 20% 70%, rgba(136,176,75,0.45), transparent 60%)",
        "brand-radial-4":
          "radial-gradient(circle at 80% 75%, rgba(247,202,201,0.4), transparent 60%)",
        "brand-radial-5":
          "radial-gradient(circle at 50% 95%, rgba(146,168,209,0.5), transparent 60%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        "glow-coral": "0 0 60px rgba(255,111,97,0.25)",
        "glow-violet": "0 0 60px rgba(107,91,149,0.3)",
        "glow-sky": "0 0 60px rgba(146,168,209,0.28)",
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        "drift-slow": "drift 34s ease-in-out infinite reverse",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        marquee: "marquee 26s linear infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(4%,-6%) scale(1.08)" },
          "66%": { transform: "translate(-3%,4%) scale(0.96)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
