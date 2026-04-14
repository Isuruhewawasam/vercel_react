/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legalBlue: "#1a2a44",   // ගාම්භීර තද නිල්
        goldAccent: "#d4af37", // වටිනාකම පෙන්වන රන් පැහැය
        softGray: "#f8f9fa"    // ඇසට පහසු පසුබිම් පැහැය
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Heading වලට
        sans: ['Inter', 'sans-serif'],        // Body text එකට
      }
    },
  },
  plugins: [],
}