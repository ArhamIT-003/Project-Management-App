import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["lofi"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],
};
