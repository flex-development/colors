/**
 * @file Unit Tests - supported
 * @module colors/internal/tests/unit/supported
 */

import isTTY from '#internal/is-tty'
import isTTYBrowser from '#internal/is-tty.browser'
import processBrowser from '#internal/process.browser'
import testSubject from '#internal/supported'
import windowNode from '#internal/window.node'

describe('unit:internal/supported', () => {
  it.each<Parameters<typeof testSubject>>([
    [isTTY, { argv: ['--no-color'] }, windowNode],
    [isTTY, { env: { FORCE_COLOR: '0' } }, windowNode],
    [isTTY, { env: { NO_COLOR: '1' } }, windowNode],
    [isTTYBrowser, null, windowNode],
    [isTTYBrowser, processBrowser, windowNode],
    [true, { env: { TERM: 'dumb' } }, null]
  ])('should return `false` if color output is not supported (%#)', (
    tty,
    process,
    window
  ) => {
    expect(testSubject(tty, process, window)).to.be.false
  })

  it.each<Parameters<typeof testSubject>>([
    [false, processBrowser, { chrome: true }],
    [isTTY, { argv: ['--color'] }, windowNode],
    [isTTY, { env: { CI: 'true' } }, null],
    [isTTY, { platform: 'win32' }, windowNode],
    [true, { env: { TERM: 'xterm-256color' } }, null]
  ])('should return `true` if color output is supported (%#)', (
    tty,
    process,
    window
  ) => {
    expect(testSubject(tty, process, window)).to.be.true
  })
})
