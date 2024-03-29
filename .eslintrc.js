module.exports = {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    ignorePatterns: [
        "sum.test.js",
        "index.js",
        "playwrigth.config.js",
        "tests",
        ""
    ],
    plugins: [
      'react',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-unused-vars': 'error',
    },
  };
  