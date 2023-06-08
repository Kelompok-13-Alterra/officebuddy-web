/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-body": "#FDFBFF",
        "bg-button": "#0074E5",
        "bg-second": "#AAC7FF",
        "bg-secondRounded": "#D6E3FF",
        "bg-fourth": "#7BACFF",
      },
      screens: {
        phone: "360px",
        tablet: "768px",
        desktop: "1024px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
