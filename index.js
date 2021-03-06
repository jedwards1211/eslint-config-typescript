module.exports = {
  extends: [
    "@jedwards1211/eslint-config",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  env: {
    es6: true
  },
  rules: {
    "@typescript-eslint/member-delimiter-style": 0,
  }
}
