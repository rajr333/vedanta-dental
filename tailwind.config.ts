import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        teal: "var(--teal)",
        "teal-bright": "var(--teal-bright)",
        "teal-pale": "var(--teal-pale)",
        mint: "var(--mint)",
        stone: "var(--stone)",
        cloud: "var(--cloud)",
        "gold-accent": "var(--gold-accent)",
        success: "var(--success)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
        xl3: "24px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(15,32,39,0.06)",
        "soft-lg": "0 12px 40px rgba(15,32,39,0.10)",
        "teal-glow": "0 12px 32px rgba(30,138,138,0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "float-gentle": "floatGentle 7s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
