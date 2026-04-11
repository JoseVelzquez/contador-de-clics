/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glass:
          "0 10px 40px -18px rgba(15, 23, 42, 0.55), 0 0 0 1px rgba(255,255,255,0.06) inset"
      },
      keyframes: {
        pulseScale: {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        pulseScale: "pulseScale 260ms ease-out"
      }
    }
  },
  plugins: []
};
