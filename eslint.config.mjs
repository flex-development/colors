/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

import globals from 'globals'

/**
 * Root eslint configuration object.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...(await import('./eslint.base.config.mjs')).default,
  {
    ignores: [
      '!**/__fixtures__/**/dist/',
      '!**/__fixtures__/node_modules/',
      '!**/typings/**/dist/',
      '**/*config.*.timestamp*',
      '**/.vitest-reports/',
      '**/.yarn/',
      '**/CHANGELOG.md',
      '**/LICENSE.md',
      '**/RELEASE_NOTES.md',
      '**/__fixtures__/**empty.json',
      '**/__tests__/reports/',
      '**/coverage/',
      '**/dist/',
      '**/tsconfig*temp.json'
    ]
  },
  {
    files: ['src/internal/*.browser.mts'],
    languageOptions: { globals: globals.browser }
  },
  {
    files: ['src/internal/map.mts', 'src/internal/wrap.mts'],
    rules: {
      'unicorn/escape-case': 0,
      'unicorn/no-hex-escape': 0
    }
  },
  {
    files: ['src/lib/create-colors.mts'],
    rules: {
      'unicorn/prefer-string-slice': 0
    }
  }
]
