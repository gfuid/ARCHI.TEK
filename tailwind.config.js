/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'houzz-gold': '#C5A059', // Client branding gold
                'houzz-dark': '#1A1A1A',
            },
        },
    },
    plugins: [],
}