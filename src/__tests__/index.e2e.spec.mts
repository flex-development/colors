/**
 * @file E2E Tests - api
 * @module colors/tests/e2e/api
 */

import * as testSubject from '@flex-development/colors'

describe('e2e:colors', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
