import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  js.configs.recommended,
  globalIgnores([
    "dist/**",
    "node_modules/**",
    "package/**",
    "*.d.ts"
  ]),
  {
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
    }
  }
]);

export default eslintConfig;
