/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0D0D0E",
          dark: "#141416",
          charcoal: "#1C1C20",
          card: "#24242A",
          border: "#34343F",
          cream: "#F5F2EB",
          "cream-muted": "#DED9CE",
          red: "#E53935",
          "red-hover": "#D32F2F",
          gold: "#F5A623",
          amber: "#E07A5F",
          lime: "#2EC4B6",
          muted: "#9E9EAE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Outfit", "Cabinet Grotesk", "sans-serif"],
        script: ["var(--font-script)", "Caveat", "cursive"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 4s infinite ease-in-out",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};
