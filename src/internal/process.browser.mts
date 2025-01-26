/**
 * @file Internal - process
 * @module colors/internal/process/browser
 */

import type Process from '#interfaces/process'

/**
 * Information about the current Node.js process.
 *
 * @const {Required<Process>} process
 */
const process: Required<Process> = {
  argv: [],
  browser: true,
  env: {},
  platform: ''
}

export default process
