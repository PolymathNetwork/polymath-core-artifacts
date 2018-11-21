var check = require('check-more-types')
var fs = require('fs')

class Artifact {
  constructor(file) {
    this.content = file
  }
  abi() {
    return JSON.parse(this.content).abi
  }
}

class PolymathRegistry {
  constructor() {
    this.artifact = JSON.parse(getContract('PolymathRegistry').content)
  }
  mainnet() {
    return this.artifact.networks[1].address
  }
  kovan() {
    return this.artifact.networks[42].address
  }
}

function getContract (contractName) {
  check.verify.string(contractName, 'Missing contract')
  let file = fs.readFileSync(`./src/contracts/${contractName}.json`).toString()
  check.verify.string(file, `Contract does not exist`)
  return new Artifact(file)
}

function load (contractName) {
  return getContract(contractName)
}

function polymathRegistry () {
  return new PolymathRegistry()
}

module.exports = {
  load: (contractName) => {
    return load(contractName)
  },
  registry: () => {
    return polymathRegistry()
  }
}