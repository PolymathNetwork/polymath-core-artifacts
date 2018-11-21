# Polymath Core Artifacts

This repository contains the JSON and TypeScript ABI files necessary to interact with the smart contracts from Polymath Network.

## Install

Requires nodejs

    npm install polymath-core-artifacts

## Simple example

```js
const artifacts = require('polymath-core-artifacts')

// get TickerRegistry content
const TickerRegistry = artifacts.load('TickerRegistry').content

// get USDTieredSTO abi
const USDTieredSTO = artifacts.load('USDTieredSTO').abi()
```

## Polymath Registry address

We offer a way to get the last contract address of PolymathRegistry.
PolymathRegistry is a module that allow know the address of any deployed contract from Polymath environment.

```js
const artifacts = require('polymath-core-artifacts')

const kovanAddress = artifacts.registry().network(42)

const mainnetAddress = artifacts.registry().network(1)
```

### Test

```js
$ npm run test
```