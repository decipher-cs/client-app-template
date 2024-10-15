import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import react from "eslint-plugin-react"
import reactA11y from "eslint-plugin-jsx-a11y"
import tseslint from "typescript-eslint"
import removeConflictingRules from "eslint-config-prettier"

export default tseslint.config(
   { ignores: ["dist"] },

   {
      settings: { react: { version: "18.3" } },

      extends: [
         js.configs.recommended,
         ...tseslint.configs.strictTypeChecked,
         ...tseslint.configs.stylisticTypeChecked,
         reactA11y.flatConfigs.strict,
         removeConflictingRules,
      ],

      files: ["**/*.{ts,tsx}"],

      languageOptions: {
         ecmaVersion: 2020,
         globals: globals.browser,
         parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
         },
      },

      plugins: {
         "react-hooks": reactHooks,
         "react-refresh": reactRefresh,
         react,
      },

      rules: {
         ...reactHooks.configs.recommended.rules,
         ...react.configs.flat.recommended.rules,
         ...react.configs.flat["jsx-runtime"].rules,
         "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
         "@typescript-eslint/no-unused-expressions": "off",
         "@typescript-eslint/no-unused-vars": "off",
      },
   }
)
