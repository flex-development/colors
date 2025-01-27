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
   * Opening sequence used to set color or styles.
   */
  open: string

  /**
   * Replacement sequence.
   */
  replace?: string | null | undefined
}

export type { ColorFunction as default }
