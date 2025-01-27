/**
 * @file Interfaces - ColorizerOptions
 * @module colors/interfaces/ColorizerOptions
 */

import type { Color, ColorConfig } from '@flex-development/colors'

/**
 * Options for creating a colorizer object.
 */
interface ColorizerOptions {
  /**
   * Color output enabled?
   *
   * @default isColorSupported()
   */
  color?: boolean | null | undefined

  /**
   * Color function config map.
   *
   * @see {@linkcode ColorConfig}
   * @see {@linkcode Color}
   */
  colors?: Partial<Record<Color, ColorConfig>> | null | undefined
}

export type { ColorizerOptions as default }
