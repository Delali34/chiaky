/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      "2lg": "1180px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#1D5B79",
        secondary: "#2EC0BB",
        heading: "#233036",
        body: "#667074",
        light: "#F6F6F6",
        yellowLight: "#FFF3D9",
        greenLight: "#CCF0EE",
        purpleLight: "#AEA3E1",
      },
      fontFamily: {
        hero: ['"Ultra"', "serif"],
        maintext: ['"Almarai"', "sans-serif"],
        header: ['"Acme"', " sans-serif"],
        mont: ['"Montserrat","sans-serif"'],
      },
      plugins: [],
    },
  },
};
