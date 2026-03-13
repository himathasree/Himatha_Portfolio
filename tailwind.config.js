/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        panelSoft: "rgb(var(--color-panel-soft) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        brand: "rgb(var(--color-brand) / <alpha-value>)",
        brandAlt: "rgb(var(--color-brand-alt) / <alpha-value>)",
        borderSoft: "rgb(var(--color-border-soft) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(71, 112, 255, 0.35), 0 20px 60px rgba(40, 80, 220, 0.2)",
      },
      fontFamily: {
        sora: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
