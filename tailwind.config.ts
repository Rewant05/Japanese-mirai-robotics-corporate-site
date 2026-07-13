import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mist-blue': '#f0f4f8',
        'silver': '#cdd5e0',
        'soft-teal': '#4bc0c8',
        'dark-navy': '#1e293b',
        'medical-blue': '#2563eb',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s infinite alternate',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { opacity: '0.6', filter: 'drop-shadow(0 0 5px rgba(75, 192, 200, 0.4))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(75, 192, 200, 0.8))' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
