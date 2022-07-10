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

这个仓库是用于 `Bootstrap Vue Plus` 相关的 [unplugin](https://github.com/unjs/unplugin) 插件工具。感谢 [@antfu](https://github.com/antfu)。

###### 功能

- 💚 为 Bootstrap Vue Plus 按需引入样式。
- 🌎 替换默认语言。
- ⚡️ 使用 <a href="https://github.com/unjs/unplugin">unplugin</a> 以支持 Vite, Webpack, Vue CLI, Rollup, esbuild 等。

## 安装

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

## 使用

插件会自动转换：

```javascript
import { BvButton } from 'bootstrap-vue-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { BvButton } from 'bootstrap-vue-plus'
import 'bootstrap-vue-plus/es/components/button/style/css'
```

## 选项

### `useSource`

```ts
type UseSource = boolean
```

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

一般这个是用不到的，不过作为一个通用选项，还是暴露了出来，如果有用到这个的结构一定要和
BootstrapVuePlus 的输出包结构一致，详见 [unpkg.com](https://unpkg.com/bootstrap-vue-plus)

```ts
type Lib = string
```

default: 'bootstrap-vue-plus'

```javascript
// lib: 'other-lib'
import { BvButton } from 'other-lib'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { BvButton } from 'other-lib'
import 'other-lib/es/components/button/style/css'
```

### format

```ts
type Format = 'esm' | 'cjs'
```

default: 'esm'

`esm` 对应 `[lib]/es/components/*`

`cjs` 对应 `[lib]/lib/components/*`

- `/es` 对应 ES Module 输出
- `/lib` 对应 CommonJS 的输出

使用该选项来选择使用哪一个包。

```javascript
// format: 'cjs'
import { BvButton } from 'bootstrap-vue-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { BvButton } from 'bootstrap-vue-plus'
import 'bootstrap-vue-plus/lib/components/button/style/css'
```

### prefix

```ts
type Prefix = string
```

```javascript
// prefix = Al
import { AlButton } from 'xx-lib'
```

### `defaultLocale`

替换默认语言，你可以 [在这](https://github.com/bootstrap-vue-plus/bootstrap-vue-plus/tree/dev/packages/locale/lang) 查看所有语言列表。

## 其他插件

- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
