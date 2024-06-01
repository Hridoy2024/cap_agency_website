/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },

      backgroundImage: {
        homeBanner: "url('/banner.png')",
        chooseBg: "url('/choosebg.png')",
        conactbg: "url('/contactbg.png')",
        teamsbg: "url('/teams.png')",
        hirebg: "url('/hire.png')",
        footerbg: "url('/footer.png')",
        lenearOne: "linear-gradient(90deg, #FE651B -0.02%, #FFAA52 100.06%)",
      },

      colors: {
        primary: "#3661FC",
        orange: "#FE681E",
        maintext: "#1A1A1A",
        secondarytext: "#6B6161",
      },

      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
