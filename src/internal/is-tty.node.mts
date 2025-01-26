/**
 * @file Internal - isTTY
 * @module colors/internal/isTTY/node
 */

import bool from '#internal/bool'
import process from '#internal/process'
import { isatty } from 'node:tty'

export default bool(process.env.FORCE_TTY) || isatty(1)
