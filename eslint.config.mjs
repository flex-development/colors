/**
 * @file eslint
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

import fldv from '@flex-development/eslint-config'
import globals from 'globals'

/**
 * eslint configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...fldv.configs.node,
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
