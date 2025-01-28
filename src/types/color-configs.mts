/**
 * @file Type Aliases - ColorConfigs
 * @module colors/types/ColorConfigs
 */

import type { Color, ColorConfig } from '@flex-development/colors'

/**
 * Record, where each key is a color and each value is the configuration for a
 * color function.
 *
 * @see {@linkcode ColorConfig}
 * @see {@linkcode Color}
 */
type ColorConfigs = Record<Color, ColorConfig>

export type { ColorConfigs as default }
