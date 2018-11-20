# Polymath Core Artifacts

This repository contains the JSON and TypeScript ABI files necessary to interact with the smart contracts from Polymat Network.

## Install

Requires nodejs

    npm install polymath-core-artifacts

## Simple example

```js
var artifacts = require('polymath-core-artifacts');

// get TickerRegistry JSON
const TickerRegistry = artifacts.load('TickerRegistry').json()

// get USDTieredSTO abi
const USDTieredSTO = artifacts.load('USDTieredSTO').abi()
```

### Test

```js
$ npm run test
```