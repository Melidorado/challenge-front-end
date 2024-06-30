/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "Montserrat-Bold": ["Montserrat-Bold"],
      "Montserrat-Medium": ["Montserrat-Medium"],
      "Montserrat-SemiBold": ["Montserrat-SemiBold"],
      "Montserrat-Light": ["Montserrat-Light"],
    },
    extend: {
      colors: {
        textGrey: "#687382",
        actionButton: "#0ba1ff",
      },
      boxShadow: {
        main: "0px 22px 35px -11px rgba(39,58,87,0.45);",
      },
    },
  },
  plugins: [],
};
