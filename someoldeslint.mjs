import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: { prettier: eslintPluginPrettier }, // Додаємо плагін Prettier
    rules: {
      'prettier/prettier': 'error', // Включаємо правила Prettier
    },
  },
  {
    ...eslintConfigPrettier,
  },
];

export default eslintConfig;
