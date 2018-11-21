# Polymath Core Artifacts

This repository contains the JSON and TypeScript ABI files necessary to interact with the smart contracts from Polymath Network.

## Install

Requires nodejs

    npm install polymath-core-artifacts

## Simple example

```js
var artifacts = require('polymath-core-artifacts')

// get TickerRegistry content
const TickerRegistry = artifacts.load('TickerRegistry').content

// get USDTieredSTO abi
const USDTieredSTO = artifacts.load('USDTieredSTO').abi()
```

## Polymath Registry address

We offer a way to get the last contract address of PolymathRegistry.
PolymathRegistry is a module that allow know the address of any deployed contract from Polymath environment.

```js
var artifacts = require('polymath-core-artifacts')

const kovanAddress = artifacts.registry().kovan()

const mainnetAddress = artifacts.registry().mainnet()
```

### Test

```js
$ npm run test
```