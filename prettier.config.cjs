// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Options} */
const config = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    plugins: ["prettier-plugin-astro"],
};

module.exports = config;
