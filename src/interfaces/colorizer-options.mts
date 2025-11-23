/**
 * @file Interfaces - ColorizerOptions
 * @module colors/interfaces/ColorizerOptions
 */

import type { ColorConfigs } from '@flex-development/colors'

/**
 * Options for creating a colorizer.
 */
interface ColorizerOptions {
  /**
   * Whether color output should be enabled.
   *
   * @default isColorSupported()
   */
  color?: boolean | null | undefined

  /**
   * Record, where each key is a the name of a color or style and each value is
   * the configuration for that color or style.
   *
   * @see {@linkcode ColorConfigs}
   */
  colors?: Partial<ColorConfigs> | null | undefined
}

export type { ColorizerOptions as default }
