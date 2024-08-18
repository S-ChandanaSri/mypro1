import type { Config } from "tailwindcss";
import { COLORS, FONT_SIZES } from "./src/constants";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...COLORS,
      },
      fontSize: {
        ...FONT_SIZES,
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-poppins)"],
        display: ["var(--font-helvetica)"],
      },
    },
  },
  plugins: [],
};
export default config;
