import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-s': '320px',

        'mobile-m': '375px',

        'mobile-l': '425px',
        
        '2xl': '1900px',
      },
    },
  },
  plugins: [],
};
export default config;
