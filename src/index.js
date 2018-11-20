var check = require('check-more-types')
var fs = require('fs')

var artifact = {
  content: '',
  abi: () => {
    return JSON.parse(this.content).abi
  }
};

function getContract (contractName) {
  check.verify.string(contractName, 'Missing contract')
  let file = fs.readFileSync(`./src/contracts/${contractName}.json`).toString()
  check.verify.string(file, `Contract does not exist`)

  artifact.content = file
  return artifact
}

function load (contractName) {
  return getContract(contractName)
};

module.exports = {
  load: (contractName) => {
    return load(contractName)
  }
}