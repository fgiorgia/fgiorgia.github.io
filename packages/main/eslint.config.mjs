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
    ignores: ['node_modules', '.next', 'next-env.d.ts', 'out'],
  },
];

export default eslintConfig;
