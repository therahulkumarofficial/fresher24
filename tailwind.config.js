// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 5px 40px -10px rgba(0, 0, 0, 0.57)',
      },
      letterSpacing: {
        wider: '.05em',
      },
    },
  },
  plugins: [],
}
