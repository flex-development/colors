/**
 * @file Interfaces - Colors
 * @module colors/interfaces/Colors
 */

import type { Color, ColorFunctions } from '@flex-development/colors'

/**
 * A colorizer.
 *
 * Colorizer objects contain functions for coloring text and other values.
 *
 * Each {@linkcode Color} function corresponds to a terminal color.
 * {@linkcode Colors.colorize} can also be used to apply different colors.
 *
 * {@linkcode Colors.color} can be used to disable or enable color output. If
 * color output is not supported when enabled, it'll be disabled.
 *
 * @see {@linkcode ColorFunctions}
 *
 * @extends {ColorFunctions}
 */
interface Colors extends ColorFunctions {
  /**
   * Color output enabled?
   *
   * @return {boolean}
   *  `true` if color is enabled, `false` otherwise
   */
  get color(): boolean

  /**
   * Enable or disable color output.
   *
   * > 👉 **Note**: Even if color output is enabled, it will be disabled if it
   * > is not supported.
   *
   * @param {boolean | null | undefined} color
   *  Color output enabled?
   */
  set color(color: boolean | null | undefined)

  /**
   * Color output supported?
   *
   * @readonly
   */
  readonly supported: boolean
}

export type { Colors as default }
