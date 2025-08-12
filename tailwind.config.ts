import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          950: "#003F41"
        },
        accent: "#A0C9E9",
        offwhite: "#F0F4F8"
      },
      borderRadius: {
        "2xl": "1.5rem"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
export default config
