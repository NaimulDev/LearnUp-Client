/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-=serif"],
    },
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      colors: {
        "color-btn": "#FF3811",
        primary: "#0e113d",
        secondary: "#21225f",
        accent: "#08a9e6",
        red: "#ec272e",
        info: "#08a9e6",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
