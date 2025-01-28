/**
 * @file Internal - supported
 * @module colors/internal/supported
 */

import type Process from '#interfaces/process'
import bool from '#internal/bool'

/**
 * Check if color output is supported.
 *
 * @see https://no-color.org
 *
 * @internal
 *
 * @this {void}
 *
 * @param {boolean} tty
 *  Running inside terminal?
 * @param {Partial<Process> | null | undefined} process
 *  Info about the current Node.js process
 * @param {Partial<Window> | null | undefined} window
 *  Browser window
 * @return {boolean}
 *  `true` if color output is supported, `false` otherwise
 */
function supported(
  this: void,
  tty: boolean,
  process: Partial<Process> | null | undefined,
  window: Partial<Window> | null | undefined
): boolean {
  const {
    argv = [],
    browser,
    env = {},
    platform
  } = process ?? { argv: [], browser: true, env: {}, platform: '' }

  /**
   * Color support disabled?
   *
   * @const {boolean} disabled
   */
  const disabled: boolean = 'NO_COLOR' in env && env.NO_COLOR !== '' ||
    argv.includes('--no-color') ||
    bool(env.NODE_DISABLE_COLORS) ||
    bool(env.FORCE_COLOR, ['0'])

  /**
   * Color supported in Node?
   *
   * @const {boolean} node
   */
  const node: boolean = !disabled && (
    bool(env.FORCE_COLOR, ['1', '2', '3']) ||
    argv.includes('--color') ||
    platform === 'win32' ||
    (tty && !bool(env.TERM, ['dumb'])) ||
    bool(env.CI)
  )

  return node || (!!browser && !!window && !!window.chrome)
}

export default supported
