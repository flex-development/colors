/**
 * @file createColors
 * @module colors/lib/createColors
 */

import styles from '#internal/styles'
import wrap from '#internal/wrap'
import isColorSupported from '#lib/is-color-supported'
import type { Color, ColorizerOptions, Colors } from '@flex-development/colors'

export default createColors

/**
 * Create a colorizer.
 *
 * @see {@linkcode Colors}
 * @see {@linkcode ColorizerOptions}
 *
 * @this {void}
 *
 * @param {ColorizerOptions | boolean | null | undefined} [options]
 *  Colorizer options or a boolean indicating if color output should be enabled
 * @return {Colors}
 *  Colorizer object
 */
function createColors(
  this: void,
  options?: ColorizerOptions | boolean | null | undefined
): Colors {
  if (options === null || typeof options !== 'object') {
    options = { color: options }
  }

  /**
   * Color output supported?
   *
   * @const {boolean} supported
   */
  const supported: boolean = isColorSupported()

  /**
   * Color output enabled?
   *
   * @var {boolean} color
   */
  let color: boolean = supported

  /**
   * Colorizer object.
   *
   * @const {Colors} colors
   */
  const colors: Colors = Object.defineProperties({
    color,
    styles: { ...styles, ...options.colors },
    supported
  } as Colors, {
    color: {
      /**
       * Color output enabled?
       *
       * @this {Colors}
       *
       * @return {boolean}
       *  `true` if color output is enabled, `false` otherwise
       */
      get(this: Colors): boolean {
        return color
      },
      /**
       * Enable or disable color output.
       *
       * @this {Colors}
       *
       * @param {boolean | null | undefined} enabled
       *  Color output enabled?
       * @return {undefined}
       */
      set(this: Colors, enabled: boolean | null | undefined): undefined {
        return void (color = !!enabled && this.supported)
      }
    },
    styles: {
      enumerable: true,
      writable: false
    },
    supported: {
      enumerable: true,
      writable: false
    }
  })

  for (const entry of Object.entries(colors.styles)) {
    const [color, [open, close, replace]] = entry

    colorizer.close = wrap(close)
    colorizer.open = wrap(open)

    Object.defineProperty(colors, color, {
      enumerable: true,
      value: colorizer.bind(colors)
    })

    Object.defineProperties(colors[color as Color], {
      close: { enumerable: true, value: colorizer.close },
      name: { value: color },
      open: { enumerable: true, value: colorizer.open },
      replace: { enumerable: true, value: replace }
    })

    /**
     * Colorize `input`.
     *
     * @this {Colors}
     *
     * @param {unknown} input
     *  The thing to colorize
     * @return {string}
     *  Colorized string `value`
     */
    function colorizer(this: Colors, input: unknown): string {
      /**
       * Stringified {@linkcode input}.
       *
       * @const {string} string
       */
      const string: string = String(input)

      if (this.color) {
        const { close, open } = colorizer

        /**
         * Index of closing sequence in {@linkcode string}.
         *
         * @const {number} index
         */
        const index: number = string.indexOf(close, open.length)

        return ~index
          ? open + replacer(string, close, replace ?? open, index) + close
          : open + string + close
      }

      return string
    }
  }

  return colors.color = options.color ?? supported, colors
}

/**
 * @internal
 *
 * @this {void}
 *
 * @param {string} target
 *  Input string
 * @param {string} close
 *  Reset sequence
 * @param {string} replace
 *  Replacement for reset sequence in `target`
 * @param {number} index
 *  Index of reset sequence in `target`
 * @return {string}
 *  `target` with reset sequence replaced
 */
function replacer(
  this: void,
  target: string,
  close: string,
  replace: string,
  index: number
): string {
  /**
   * Current index.
   *
   * @var {number} cursor
   */
  let cursor: number = 0

  /**
   * New input string.
   *
   * @var {string} result
   */
  let result: string = ''

  do {
    result += target.substring(cursor, index) + replace
    cursor = index + close.length
    index = target.indexOf(close, cursor)
  } while (~index)

  return result + target.substring(cursor)
}
