# Polymath Core Artifacts

This repository contains the JSON files necessary to interact with the smart contracts from Polymath Network. This is a pure JavaScript implementation with TypeScript support for node.js and the browser.

## Install

Requires nodejs

    npm install polymath-core-artifacts

## Simple example

```js
const artifacts = require('polymath-core-artifacts')
// get TickerRegistry content
const TickerRegistry = artifacts.Load('TickerRegistry').content
// get USDTieredSTO abi
const USDTieredSTO = artifacts.Load('USDTieredSTO').abi()
```

## Polymath Registry address

We offer a way to get the last contract address of PolymathRegistry.
PolymathRegistry is a module that allow know the address of any deployed contract from Polymath environment.

```js
const artifacts = require('polymath-core-artifacts')
const mainnetAddress = artifacts.Registry().network(1)
const kovanAddress = artifacts.Registry().network(42)
```

### Test

```js
$ npm run test
```