// eslint.config.js
import {defineConfig} from "eslint/config";
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

export default defineConfig([
  {
    ignores: [
      'projects/**/*',
      'dist/**/*',
      'out-tsc/**/*',
      'coverage/**/*'
    ]
  },
  {
    files: ['**/*.ts'],
    extends: [
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-class-suffix': 'warn',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          style: 'kebab-case'
        }
      ],
      eqeqeq: 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'PropertyDefinition[definite=true]',
          message: 'Non-null property assertions are forbidden'
        }
      ]
    }
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended
    ],
    rules: {
      '@angular-eslint/template/eqeqeq': 'warn'
    }
  }]);
