/**
 * @file Fixtures - fmt
 * @module fixtures/fmt
 */

import styles from '#internal/styles'
import type { Color, ColorConfig } from '@flex-development/colors'
import { entries } from '@flex-development/tutils'

/**
 * Color config entries.
 *
 * @const {[Color, ColorConfig][]} fmt
 */
const fmt: [Color, ColorConfig][] = entries(styles)

export default fmt
