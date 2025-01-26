/**
 * @file Type Tests - Process
 * @module colors/interfaces/tests/unit-d/Process
 */

import type TestSubject from '#interfaces/process'
import type { EmptyString } from '@flex-development/pathe'
import type { Nilable, ReadonlyKeys } from '@flex-development/tutils'

describe('unit-d:interfaces/Process', () => {
  it('should match [argv: string[]]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('argv').toEqualTypeOf<string[]>()
  })

  it('should match [browser?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('browser')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [env: NodeJS.ProcessEnv]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('env')
      .toEqualTypeOf<NodeJS.ProcessEnv>()
  })

  it('should match [readonly platform: EmptyString | NodeJS.Platform]', () => {
    // Arrange
    type K = ReadonlyKeys<TestSubject>
    type T = EmptyString | NodeJS.Platform

    // Expect
    expectTypeOf<K>().extract<'platform'>().not.toBeNever()
    expectTypeOf<TestSubject>().toHaveProperty('platform').toEqualTypeOf<T>()
  })
})
