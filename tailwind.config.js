/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,jsx}',
        './src/components/**/*.{js,jsx}',
        './src/app/**/*.{js,jsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                primary: {
                    50: '#f0fdf7',
                    100: '#dcfceb',
                    200: '#bbf7d6',
                    300: '#67ea94',
                    400: '#47e584',
                    500: '#67ea94',
                    600: '#2bba6c',
                    700: '#27955a',
                    800: '#24774c',
                    900: '#1f6141',
                },
                dark: {
                    50: '#18191E',
                    100: '#1E1F25',
                    200: '#252730',
                }
            }
        },
    },
    plugins: [],
} 