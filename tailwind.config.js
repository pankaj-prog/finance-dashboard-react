/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-gray": "var(--primary-gray)",
        "secondary-gray": "var(--secondory-gray)",
        "secondary-gray-dark": "var(--secondar-gray-dark)",
        "customer-gray-400": "var(--customer-gray-400)",
        "custom-gray-600": "var(--custom-gray-600)",
        "customer-green": "var(--customer-green)",
        "primary-gray-light": "var(--primary-gray-light)",
        "primary-blue": "var(--primary-blue)",
        "primary-orange": "var(--primary-orange)",
      },
    },
  },
  plugins: [],
};
