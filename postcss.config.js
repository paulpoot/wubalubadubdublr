// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylelint = require('stylelint');

module.exports = {
    plugins: {
        'postcss-css-variables': {
            variables: {
                '--acid-vat-green': '#aacc00',
                '--acid-vat-green-lighter': '#eeef20',
                '--black': '#0b132b',
                '--black-lighter': '#1c2541',
                '--black-lightest': '#3a506b',
                '--grey': '#f9f9f9',
                '--white': '#fff',
                '--font-body': '"Poppins", sans-serif',
                '--font-heading': '"UnicaOne", sans-serif',
                '--box-shadow-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                '--box-shadow-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            },
        },
        'postcss-custom-media': {
            importFrom: './base/_media.css',
        },
        'postcss-import': {
            plugins: [stylelint()],
        },
        'postcss-nested': {},
        'postcss-preset-env': {},
        'postcss-color-function': {},
        'postcss-global-import': {},
    },
};
