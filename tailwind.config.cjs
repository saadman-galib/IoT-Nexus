/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "shantell-sans": ["Shantell Sans", "cursive"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
        screens: {
            "mobile-s": "320px",
            "mobile-m": "375px",
            "mobile-l": "425px",
            sm: "640px",
            tablet: "768px",
            "laptop": "1024px",
            "laptop-l": "1440px",
        },
    },
    plugins: [],
};
