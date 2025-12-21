import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zao: {
          bg: "#050b14", // Deep Void
          glass: "rgba(20, 30, 39, 0.6)", // Glass Dark
          text: "#e0ddaa",
          accent: "#49f3c3", // Neon Teal
          "accent-hover": "#3dd4a8",
          secondary: "#00f0ff", // Cyber Blue
          muted: "#8a9a8a",
          card: "#1a2832",
          border: "#2a3842",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "progress-fill": "progressFill 1s ease-out forwards",
      },
      keyframes: {
        progressFill: {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
