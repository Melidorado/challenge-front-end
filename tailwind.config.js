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
        main: "0px -1px 8px 0px rgba(30,133,189,0.3);",
      },
    },
  },
  plugins: [],
};
