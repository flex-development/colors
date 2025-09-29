# \:rainbow: colors

[![github release](https://img.shields.io/github/v/release/flex-development/colors.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/colors/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/colors.svg)](https://npmjs.com/package/@flex-development/colors)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/colors.svg)](https://www.npmcharts.com/compare/@flex-development/colors?interval=30)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/colors)](https://packagephobia.now.sh/result?p=@flex-development/colors)
[![codecov](https://codecov.io/github/flex-development/colors/graph/badge.svg?token=n4qiZ2g5nb)](https://codecov.io/github/flex-development/colors)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/colors.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

Colorize messages in the terminal and browser

## Contents

- [What is this?](#what-is-this)
  - [Features](#features)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`colors`](#colors)
  - [`createColors([options])`](#createcolorsoptions)
  - [`isColorSupported`](#iscolorsupported)
  - [`stripAnsi(value[, toString])`](#stripansivalue-tostring)
- [Types](#types)
  - [`ColorConfig`](#colorconfig)
  - [`ColorConfigs`](#colorconfigs)
  - [`ColorFunction`](#colorfunction)
  - [`ColorFunctions`](#colorfunctions)
  - [`Color`](#color)
  - [`ColorizerOptions`](#colorizeroptions)
  - [`Colors`](#colors-1)
  - [`ToString`](#tostring)
- [Contribute](#contribute)

## What is this?

This is a small, but useful, library for creating colorful messages in the terminal and browser consoles that
support ANSI colors.

### Features

- `FORCE_COLOR`, [`NO_COLOR`][no-color], and `NODE_DISABLE_COLORS` friendly
- automatic color support detection
- no dependencies
- [typescript][] support

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/colors
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { colors } from 'https://esm.sh/@flex-development/colors'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { createColors } from 'https://esm.sh/@flex-development/colors'
</script>
```

## Use

```ts
import c from '@flex-development/colors'

console.log(c.red(c.bold('Hello World!')))
```

## API

This package exports the following identifiers:

- [`colors`](#colors)
- [`createColors`](#createcolorsoptions)
- [`isColorSupported`](#iscolorsupported)
- [`stripAnsi`](#stripansivalue-tostring)

The default export is [`colors`](#colors).

### `colors`

([`Colors`](#colors-1)) The default colorizer.

### `createColors([options])`

Create a colorizer.

#### Parameters

- `options` ([`ColorizerOptions`](#colorizeroptions) | `boolean`, optional) —
  boolean indicating if color output should be enabled, or an options object to create a custom colorizer
  - **default**: [`isColorSupported()`](#iscolorsupported)

#### Returns

([`Colors`](#colors-1)) Colorizer object

### `isColorSupported`

Check if color output is supported.

#### Returns

(`boolean`) `true` if color output is supported, `false` otherwise

### `stripAnsi(value[, toString])`

Remove ANSI escape codes from `value`.

#### Parameters

- `value` (`unknown`) — the string or value to remove escape codes from
- `toString` ([`ToString`](#tostring), optional) — convert `value` to a string
  - **default**: `String`

#### Returns

(`string`) Stringified `value` with ANSI escape codes removed

## Types

This package is fully typed with [TypeScript][].

### `ColorConfig`

List, where the first value is the numeric code for an ANSI escape sequence, and the second is the numeric code for the
reset sequence. The last value is an optional replacement for the reset sequence (used in complex cases to nest styles
without breaking existing color sequences).

```ts
type ColorConfig = [
  open: number,
  close: number,
  replace?: string | null | undefined
]
```

### `ColorConfigs`

Record, where each key is a [`Color`](#color) and each value is the configuration for a color function.

```ts
type ColorConfigs = Record<Color, ColorConfig>
```

### `ColorFunction`

Colorize `value` (TypeScript interface).

#### Parameters

- `value` (`unknown`) — the thing to colorize

#### Properties

- `close` (`string`) — reset sequence
- `open` (`string`) — sequence used to set colors
- `replace` (`string`, optional) — reset sequence replacement

#### Returns

(`string`) Colorized string `value`

### `ColorFunctions`

Registry of color functions (TypeScript interface).

### `Color`

Union of color names.

```ts
type Color = keyof ColorFunctions
```

To register custom colors, augment [`ColorFunctions`](#colorfunctions). They will be added to this union automatically.

```ts
declare module '@flex-development/colors' {
 interface ColorFunctions {
   blink: ColorFunction
 }
}
```

### `ColorizerOptions`

Options for creating a colorizer (TypeScript interface).

#### Properties

- `color` (`boolean`, optional) — color output enabled?
- `colors` ([`Partial<ColorConfigs>`](#colorconfigs), optional) — color function config map

### `Colors`

> also exported as `Colorizer`

A colorizer (TypeScript interface).

Colorizers contain [`Color`](#color) functions. Each function corresponds to a terminal color or style. The `color`
property is an accessor that can be used to disable or enable color output.

#### Extends

- [`ColorFunctions`](#colorfunctions)

#### Properties

- `get color(): boolean` — color output enabled?
- `set color(color: boolean | null | undefined)` - enable or disable color output\
  👉 **note**: color output will be disabled if not supported
- `supported` (`boolean`) — color output supported? (`readonly`)

### `ToString`

Convert `value` to a string (TypeScript type).

#### Parameters

- `value` (`unknown`) — the thing to stringify

#### Returns

(`string`) Stringified `value`

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[no-color]: https://no-color.org

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
