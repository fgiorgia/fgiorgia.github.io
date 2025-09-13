// @ts-check
import { eslintBaseConfig } from '@swiftpost/config/eslintBaseConfig.mjs';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...eslintBaseConfig,
  ...compat.config({
    extends: ['plugin:@next/next/recommended'],
  }),
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/no-unescaped-entities': 'warn',
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
    },
  },
  {
    ignores: ['node_modules', '.next', 'next-env.d.ts', 'out', 'old-files'],
  },
];

export default eslintConfig;
