/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "shantell-sans": ["Shantell Sans", "cursive"],
                "poppins": ["Poppins", "sans-serif"],
             },
            
        },
    },
    plugins: [],
};
