import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      'main': "url('/images/bg.png')",
    }
  },
  plugins: [],
} satisfies Config;
