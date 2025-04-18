/**
 * @file Interfaces - ColorFunction
 * @module colors/interfaces/ColorFunction
 */

/**
 * Function that colorizes a value.
 */
interface ColorFunction {
  /**
   * Colorize `value`.
   *
   * @this {void}
   *
   * @param {unknown} value
   *  The thing to colorize
   * @return {string}
   *  Colorized string `value`
   */
  (this: void, value: unknown): string

  /**
   * Reset sequence.
   */
  close: string

  /**
   * Sequence used to set colors.
   */
  open: string

  /**
   * Reset sequence replacement.
   */
  replace?: string | null | undefined
}

export type { ColorFunction as default }
