/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#7f1d1d", // dark red
            muted: "#9f2a2a"
          },
          surface: "#121214",
          base: "#0b0b0c",
        },
        borderRadius: {
          xl: "1rem",
          '2xl': "1.25rem",
        },
        boxShadow: {
          soft: "0 10px 30px -12px rgba(0,0,0,0.6)",
        },
      },
    },
    plugins: [],
  };
  