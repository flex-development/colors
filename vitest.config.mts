/**
 * @file Configuration - Vitest
 * @module config/vitest
 * @see https://vitest.dev/config
 */

import Notifier from '#tests/reporters/notifier'
import VerboseReporter from '#tests/reporters/verbose'
import pathe from '@flex-development/pathe'
import ci from 'is-ci'
import type { ConfigEnv, ViteUserConfig } from 'vitest/config'
import { BaseSequencer, type TestSpecification } from 'vitest/node'
import tsconfig from './tsconfig.test.json' with { type: 'json' }

/**
 * Create a vitest configuration.
 *
 * @see {@linkcode ConfigEnv}
 * @see {@linkcode ViteUserConfig}
 *
 * @param {ConfigEnv} env
 *  Configuration environment
 * @return {ViteUserConfig}
 *  Vitest configuration object
 */
function config(env: ConfigEnv): ViteUserConfig {
  /**
   * Notifier instance.
   *
   * @const {Notifier} notifier
   */
  const notifier: Notifier = new Notifier()

  /**
   * Verbose reporter instance.
   *
   * @const {VerboseReporter} reporter
   */
  const reporter: VerboseReporter = new VerboseReporter(env)

  return {
    ssr: {
      resolve: { conditions: tsconfig.compilerOptions.customConditions }
    },
    test: {
      allowOnly: !ci,
      chaiConfig: {
        includeStack: true,
        showDiff: true,
        truncateThreshold: 0
      },
      clearMocks: true,
      coverage: {
        all: true,
        clean: true,
        cleanOnRerun: true,
        exclude: [
          '**/*.d.mts',
          '**/__mocks__/',
          '**/__tests__/',
          '**/interfaces/',
          '**/types/',
          '**/index.mts',
          '!src/index.mts',
          'src/internal/*.browser.mts'
        ],
        extension: ['.mts'],
        include: ['src'],
        provider: 'v8',
        reportOnFailure: !ci,
        reporter: env.mode === 'reports'
          ? ['text']
          : [ci ? 'lcovonly' : 'html', 'json-summary', 'text'],
        reportsDirectory: './coverage',
        skipFull: false,
        thresholds: { 100: true, perFile: true }
      },
      environment: 'node',
      environmentOptions: {},
      globalSetup: [],
      globals: true,
      include: ['src/**/__tests__/*.spec.mts'],
      mockReset: true,
      outputFile: {
        blob: `.vitest-reports/${env.mode}.blob.json`,
        json: pathe.join('__tests__', 'reports', env.mode + '.json')
      },
      passWithNoTests: true,
      reporters: JSON.parse(process.env['VITEST_UI'] ?? '0')
        ? [notifier, reporter]
        : env.mode === 'reports'
        ? [reporter]
        : [ci ? 'github-actions' : notifier, 'blob', 'json', reporter],
      /**
       * Stores snapshots next to `file`'s directory.
       *
       * @param {string} file
       *  Path to test file
       * @param {string} extension
       *  Snapshot extension
       * @return {string}
       *  Custom snapshot path
       */
      resolveSnapshotPath(file: string, extension: string): string {
        return pathe.resolve(
          pathe.resolve(pathe.dirname(pathe.dirname(file)), '__snapshots__'),
          pathe.basename(file).replace(/\.spec.mts/, '') + extension
        )
      },
      restoreMocks: true,
      sequence: {
        /**
         * Sorting and sharding algorithm provider.
         *
         * @see {@linkcode BaseSequencer}
         *
         * @extends {BaseSequencer}
         */
        sequencer: class Sequencer extends BaseSequencer {
          /**
           * Determine test file execution order.
           *
           * @public
           * @override
           * @async
           *
           * @param {TestSpecification[]} specs
           *  List of test file specifications
           * @return {Promise<TestSpecification[]>}
           *  Sorted test files
           */
          public override async sort(
            specs: TestSpecification[]
          ): Promise<TestSpecification[]> {
            return new Promise(resolve => {
              return void resolve(specs.sort((a, b) => {
                return a.moduleId.localeCompare(b.moduleId)
              }))
            })
          }
        }
      },
      setupFiles: [],
      snapshotFormat: {
        callToJSON: true,
        min: false,
        printBasicPrototype: false,
        printFunctionName: true
      },
      typecheck: {
        allowJs: false,
        checker: 'tsc',
        ignoreSourceErrors: false,
        include: ['**/__tests__/*.spec-d.mts'],
        only: true,
        tsconfig: 'tsconfig.typecheck.json'
      },
      unstubEnvs: true,
      unstubGlobals: true
    }
  }
}

export default config
