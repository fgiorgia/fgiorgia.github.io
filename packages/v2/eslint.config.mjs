// @ts-check

import eslint from '@eslint/js';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslint.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslintPluginPrettierRecommended,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/no-unescaped-entities': 'warn',
    },
  },
  {
    ignores: ['node_modules', '.next', 'next-env.d.ts', 'out'],
  },
];

export default eslintConfig;
