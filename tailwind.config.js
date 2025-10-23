/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          maharlika: ['Maharlika', 'sans-serif'], // 👈 this must match your @font-face
        },
      },
    },
    plugins: [],
  }
  