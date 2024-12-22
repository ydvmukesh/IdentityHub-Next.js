import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, 
        padding: '1rem', 
        screens: {
          sm: '600px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        },
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)', // Ensure --primary is defined in your global styles
        },
        secondary: {
          DEFAULT: 'var(--secondary)', // Ensure --secondary is defined in your global styles
        },
        slate: {
          300: '#CAD1E9', 
          900: '#0e0c15',
        },
        blue: {
          300: '#131369',
          400: '#1E21E9', 
        },
        lime: {
          300: '#098709',
        },
        violet: {
          300: '#7950FF',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
