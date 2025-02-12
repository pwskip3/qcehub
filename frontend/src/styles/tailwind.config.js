/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,svelte}", // Ensures Tailwind is applied to all necessary files
      "./public/index.html",
    ],
    darkMode: "class", // Enables dark mode toggle
    theme: {
      extend: {
        colors: {
          primary: "#3b82f6",
          secondary: "#2563eb",
          background: "#1a1a2e",
          foreground: "#ffffff",
          accent: "#facc15",
          warning: "#f97316",
          error: "#ef4444",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          mono: ["Fira Code", "monospace"],
        },
        animation: {
          fadeIn: "fadeIn 0.5s ease-in-out",
          bounceSlow: "bounce 2s infinite",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        },
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
    ],
  };
  