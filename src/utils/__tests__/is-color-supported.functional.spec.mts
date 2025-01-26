/**
 * @file Functional Tests - isColorSupported
 * @module colors/utils/tests/functional/isColorSupported
 */

import isTTY from '#internal/is-tty'
import process from '#internal/process'
import supported from '#internal/supported'
import window from '#internal/window'
import testSubject from '#utils/is-color-supported'

vi.mock('#internal/supported', async i => {
  return { default: vi.fn((await i<{ default: typeof supported }>()).default) }
})

describe('functional:utils/isColorSupported', () => {
  it('should call `supported` with internals', () => {
    // Act
    testSubject()

    // Expect
    expect(supported).toHaveBeenCalledExactlyOnceWith(isTTY, process, window)
  })
})
