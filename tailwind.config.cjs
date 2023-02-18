/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'rye': ['Rye'],
                'bree': ['Bree Serif'],
                'noto': ['Noto Sans'],
                'aot': ['AotFont'],
                'pop': ['Poppins']
            },
            colors: {
                'main': '#F0E4B4',
                'button': '#402622',
                'cardname': '#43201B',
                'buttonHover': '#341814',
                'cardtext': '#9B6913',
                'tokenbg': '#E7BB70',
                'myblack': '#161616',
                'neworange': '#C4B05E',
                'line': '#625318',
                'bottombg': '#523531',

            },
            boxShadow: {
                upper: '0px 2px 18px 15px rgba(64,38,34,1)',
                road: '0px 28px 33px 0px rgb(22, 22, 22,1) inset',

            },
            backgroundImage: {
                hero: "url('/wallnew.webp')",
                paper: "url('/papercut.webp')",
                topog: "url('/topog.webp')",
                contact: "url('/contact.webp')"
            }
        },
    },
    plugins: [],
}
