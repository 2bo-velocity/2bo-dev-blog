module.exports = {
    content: [
        "./layouts/**/*.html",
        "./content/**/*.md",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#1E40AF', // Main Blue
                    light: '#3B82F6',   // Hover/Accent Blue
                },
                gray: {
                    100: '#F3F4F6',
                    700: '#374151',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
