/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './layouts/**/*.html',
        './content/**/*.md',
        './static/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    900: '#1e3a8a',
                    700: '#1e40af',
                    500: '#3b82f6',
                    300: '#93c5fd',
                    200: '#bfdbfe',  // ← 追加
                    100: '#dbeafe',
                    50: '#eff6ff',
                },
            },
            fontFamily: {
                sans: ['"DM Sans"', '"Inter"', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(20px)',
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                slideInRight: {
                    'from': {
                        opacity: '0',
                        transform: 'translateX(20px)',
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}