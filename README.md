<p align="center">
  <img width="300px" src="https://avatars.githubusercontent.com/u/107077279">
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/unplugin-bootstrap-vue-plus">
    <img src="https://img.shields.io/npm/v/unplugin-bootstrap-vue-plus.svg">
  </a>
  <a href="https://npmcharts.com/compare/unplugin-bootstrap-vue-plus?minimal=true">
    <img src="https://img.shields.io/npm/dm/unplugin-bootstrap-vue-plus.svg">
  </a>
  <br>
</p>

# unplugin-bootstrap-vue-plus

[![Unit Test](https://github.com/bootstrap-vue-plus/unplugin-bootstrap-vue-plus/actions/workflows/unit-test.yml/badge.svg)](https://github.com/bootstrap-vue-plus/unplugin-bootstrap-vue-plus/actions/workflows/unit-test.yml)

[English](README.md) | [中文](README.zh-CN.md)

This repo is for `Bootstrap Vue Plus` related [unplugin](https://github.com/unjs/unplugin). Thanks [@antfu](https://github.com/antfu).

###### Features

- 💚 On-demand import style for Bootstrap Vue Plus.
- 🌎 Replace default locale.
- ⚡️ Supports Vite, Webpack, Vue CLI, Rollup, esbuild and more, powered by <a href="https://github.com/unjs/unplugin">unplugin</a>.

## Installation

```bash
npm i unplugin-bootstrap-vue-plus -D
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import BootstrapVuePlus from 'unplugin-bootstrap-vue-plus/vite'

export default {
  plugins: [
    BootstrapVuePlus({
      // options
    }),
  ],
}
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import BootstrapVuePlus from 'unplugin-bootstrap-vue-plus/rollup'

export default {
  plugins: [
    BootstrapVuePlus({
      // options
    }),
  ],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [
    require('unplugin-bootstrap-vue-plus/esbuild')({
      // options
    }),
  ],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-bootstrap-vue-plus/webpack')({
      // options
    }),
  ],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-bootstrap-vue-plus/webpack')({
        // options
      }),
    ],
  },
}
```

<br></details>

## Usage

It will automatically transform:

```javascript
import { BvButton } from 'bootstrap-vue-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { BvButton } from 'bootstrap-vue-plus'
import 'bootstrap-vue-plus/es/components/button/style/css'
```

## Options

### `useSource`

```ts
type UseSource = boolean
```

default: `false`

```javascript
// useSource: false
import { BvButton } from 'bootstrap-vue-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { BvButton } from 'bootstrap-vue-plus'
import 'bootstrap-vue-plus/es/components/button/style/css'

// useSource: true
import { BvButton } from 'bootstrap-vue-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { BvButton } from 'bootstrap-vue-plus'
import 'bootstrap-vue-plus/es/components/button/style/index'
```

### `lib`

Normally you wouldn't use this option but as a general option we exposed it anyway.
When using this your bundle structure should be the same as BootstrapVuePlus.
See [unpkg.com](https://unpkg.com/bootstrap-vue-plus) for more information.

```ts
type Lib = string
```

default: 'bootstrap-vue-plus'

```javascript
// lib: 'other-lib'
import { BvButton } from 'other-lib'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { BVButton } from 'other-lib'
import 'other-lib/es/components/button/style/css'
```

### `format`

```ts
type Format = 'esm' | 'cjs'
```

default: 'esm'

`esm` for `bootstrap-vue-plus/es/components/*`

`cjs` for `bootstrap-vue-plus/lib/components/*`

- `/es` for ES Module
- `/lib` for CommonJS

This option is for which format to use

```javascript
// format: 'cjs'
import { BvButton } from 'bootstrap-vue-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { BvButton } from 'bootstrap-vue-plus'
import 'bootstrap-vue-plus/lib/components/button/style/css'
```

### `prefix`

```ts
type Prefix = string
```

```javascript
// prefix = Al
import { AlButton } from 'xx-lib'
```

### `defaultLocale`

Replace default locale, you can find locale list [here](https://github.com/bootstrap-vue-plus/bootstrap-vue-plus/tree/main/packages/locale/lang).

## Alternate

- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
