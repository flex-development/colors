/**
 * @file isColorSupported
 * @module colors/lib/isColorSupported
 */

import isTTY from '#internal/is-tty'
import process from '#internal/process'
import supported from '#internal/supported'
import window from '#internal/window'

/**
 * Check if color output is supported.
 *
 * @this {void}
 *
 * @return {boolean}
 *  `true` if color output is supported, `false` otherwise
 */
function isColorSupported(this: void): boolean {
  return supported(isTTY, process, window)
}

export default isColorSupported
