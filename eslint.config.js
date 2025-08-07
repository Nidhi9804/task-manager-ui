import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.config({
    extends: ['plugin:import/recommended'],
    rules: {
      'import/no-unresolved': 'off', // ✅ Disable unresolved imports (like index.css)
    },
  }),
  {
    files: ['*.js', '*.jsx'],
    rules: {
      // any JS-specific rules
    },
  },
];
