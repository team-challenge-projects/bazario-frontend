import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: ["prettier"], // Додаємо плагін Prettier
    rules: {
      "prettier/prettier": "error", // Включаємо правила Prettier
    },
  },
  {
    // Вимикаємо правила ESLint, які конфліктують з Prettier
    extends: ["plugin:prettier/recommended"],
  },
];

export default eslintConfig;
