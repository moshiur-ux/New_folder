/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fceb7e",
        
"secondary": "#f7b4c7",
        
"accent": "#cb22e5",
        
"neutral": "#191c1f",




        
"base-100": "#ffffff",
        





"info": "#40a3c4",
        
"success": "#24a875",
        
"warning": "#fad933",
        
"error": "#e35973",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

