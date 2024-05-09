/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,json}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      height: {
        112: "26rem",
        128: "32rem",
      },

      colors: {
        PriBlue: "#2F80ED",
        PriGray: "#4F4F4F",
        PriSilver: "#828282",
        PriWhite: "#E0E0E0",

        IndOrange: "#F8B76B",
        IndPurple: "#8785FF",
        IndRed: "#EB5757",
        IndYellow: "#F2C94C",

        ChtOrange: {
          default: "#E5A443",
          100: "#FCEED3",
          500: "#E5A443",
        },

        ChtPurple: {
          default: "#9B51E0",
          100: "#EEDCFF",
          500: "#9B51E0",
        },

        ChtGreen: {
          default: "#43B78D",
          100: "#D2F2EA",
          500: "#43B78D",
        },

        StkBlue: "#E9F3FF",
        StkOrange: "#FDCFA4",
        StkYellow: "#F9E9C3",
        StkTosca: "#AFEBDB",
        StkGreen: "#CBF1C2",
        StkPurple: "#CFCEF9",
        StkPink: "#F9E0FD",
      },
    },
  },
  plugins: [],
};
