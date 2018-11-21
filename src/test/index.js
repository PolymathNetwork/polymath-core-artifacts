var test = require('unit.js')
var artifacts = require('../index')

describe('Getting contract', function() {

  it('Existing contract', function() {
    let result = artifacts.load('ERC20').content
    test.string(result).isNot('')
  })

  it('Not existing contract', function() {
    test.error(function() {
      artifacts.load('ERC721').content
    })
  })

  it('Two differents contracts', function() {
    let erc20 = artifacts.load('ERC20').content
    let basicToken = artifacts.load('BasicToken').content
    test.string(erc20).match(/\"ERC20\"/i)
    test.string(basicToken).match(/\"BasicToken\"/i)
  })

})

describe('Getting abi contract', function() {

  it('Existing contract', function() {
    let result = artifacts.load('ERC20').abi()
    test.object(result).match(function(obj) {
      return obj[0].name == 'totalSupply'
    });
  })

  it('Not existing contract', function() {
    test.error(function() {
      artifacts.load('ERC721').abi()
    })
  })

})

describe('Polymath Registry address network', function() {

  it('Kovan', function() {
    let result = artifacts.registry().network(1)
    test.string(result).isNot('')
  })

  it('Mainnet', function() {
    let result = artifacts.registry().network(42)
    test.string(result).isNot('')
  })

  it('Ropsten', function() {
    test.error(function() {
      artifacts.registry().network(3)
    })
  })

})