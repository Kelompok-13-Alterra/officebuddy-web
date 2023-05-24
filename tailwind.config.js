/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-body": "#FDFBFF",
        "bg-button": "#0074E5",
        "bg-second": "#AAC7FF",
        "bg-secondRounded": "#D6E3FF",
        "bg-fourth": "#7BACFF",
      },
    },
  },
  plugins: [],
};
