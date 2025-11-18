/**
 * @file Unit Tests - wrap
 * @module colors/internal/tests/unit/wrap
 */

import styles from '#internal/styles'
import testSubject from '#internal/wrap'

describe('unit:internal/wrap', () => {
  it('should return escape sequence', () => {
    expect(testSubject(styles.reset[0])).toMatchSnapshot()
  })
})
