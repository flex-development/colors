/**
 * @file E2E Tests - utils
 * @module colors/tests/e2e/utils/api
 */

import * as testSubject from '@flex-development/colors/utils'

describe('e2e:colors/utils', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
