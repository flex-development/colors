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
 * @const config
 */
const config = [
  ...fldv.configs.node,
  {
    files: ['src/internal/*.browser.mts'],
    languageOptions: { globals: globals.browser }
  },
  {
    files: [
      'src/internal/styles.mts',
      'src/internal/wrap.mts',
      'src/lib/__tests__/strip-ansi.spec.mts'
    ],
    rules: {
      'unicorn/escape-case': 0
    }
  },
  {
    files: ['src/internal/styles.mts', 'src/internal/wrap.mts'],
    rules: {
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

export default config
