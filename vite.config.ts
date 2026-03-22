import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  lint: {
    ignorePatterns: ['dist/**', '.astro/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  fmt: {
    singleQuote: true,
    bracketSameLine: true,
    arrowParens: 'always',
    printWidth: 100,
    tabWidth: 2,
    trailingComma: 'es5',
    semi: true,
  },
});
