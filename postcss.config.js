const postcssPresetEnv = require('postcss-preset-env');
const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
    plugins: [
        [
            // require("autoprefixer"),
            purgecss({
                content: ['./src/**/*.html']
            }),
            postcssPresetEnv(),

        ],
    ],
};
