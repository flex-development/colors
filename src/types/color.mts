/**
 * @file Type Aliases - Color
 * @module colors/types/Color
 */

import type { ColorFunctions } from '@flex-development/colors'

/**
 * Union of color names.
 *
 * To register custom colors, augment {@linkcode ColorFunctions}. They will be
 * added to this union automatically.
 */
type Color = Extract<keyof ColorFunctions, string>

export type { Color as default }
