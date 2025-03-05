/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '0.6rem'
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#1d4ed8",          
          "secondary": "#4f46e5",
          "accent": "#2563eb",
          "neutral": "#2b3440",
          "base-100": "#ffffff",        
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}