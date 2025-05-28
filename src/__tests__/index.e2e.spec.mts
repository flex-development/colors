/**
 * @file E2E Tests - api
 * @module colors/tests/e2e/api
 */

import * as testSubject from '@flex-development/colors'
import { alphabetize, identity } from '@flex-development/tutils'

describe('e2e:colors', () => {
  it('should expose public api', () => {
    expect(alphabetize(Object.keys(testSubject), identity)).toMatchSnapshot()
  })
})
