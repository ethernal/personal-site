/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn'],
  trailingComma: 'all',
};
