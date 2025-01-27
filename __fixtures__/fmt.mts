/**
 * @file Fixtures - fmt
 * @module fixtures/fmt
 */

import map from '#internal/map'
import type { Color, ColorConfig } from '@flex-development/colors'
import { entries } from '@flex-development/tutils'

/**
 * Color config entries.
 *
 * @const {[Color, ColorConfig][]} fmt
 */
const fmt: [Color, ColorConfig][] = entries(map)

export default fmt
