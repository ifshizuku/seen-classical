const ys = require('js-yaml')

module.exports = {
    content: {
        files: [
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
            "./config/**/*.{js, jsx, yml}",
        ],
        transform: {
            yml: (content) => {
                return ys.load(content)
            }
        },
    },
    theme: {
        extend: {},
    },
    plugins: [],
};
