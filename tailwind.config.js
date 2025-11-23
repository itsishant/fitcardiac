/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Medical Red Theme
        primary: {
          teal: "#D62839", // Cardiac red
          "teal-dark": "#A4161A", // Deep cardiac red
          green: "#1F4E79", // Medical navy blue
          "green-light": "#E9EFF9", // Soft medical blue
        },
        secondary: {
          gray: "#0F172A", // Professional dark
          "gray-light": "#6B7280", // Subtle gray
        },
        // Additional Medical Colors
        medical: {
          red: "#D62839",
          "red-light": "#FDE8E9",
          blue: "#1F4E79",
          "blue-light": "#E3F2FD",
          navy: "#0D3B66",
          white: "#FFFFFF",
          cream: "#FAF9F6",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        medical:
          "0 4px 6px -1px rgba(214, 40, 57, 0.1), 0 2px 4px -1px rgba(214, 40, 57, 0.06)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "10%": { transform: "scale(1.1)" },
          "20%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.1)" },
          "40%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
