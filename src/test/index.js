var test = require('unit.js')
var artifacts = require('../index')

describe('Getting content contract', function() {

  it('Existing contract', function() {
    let result = artifacts.load('ERC20').json()
    test.string(result).isNot('')
  })

  it('Not existing contract', function() {
    test.error(function (){
      artifacts.load('ERC720').json()
    })
  })

  it('Two differents contracts', function() {
    let erc20 = artifacts.load('ERC20').json()
    let basicToken = artifacts.load('BasicToken').json()
    test.string(erc20).match(/\"ERC20\"/i);
    test.string(basicToken).match(/\"BasicToken\"/i);
  })

})

describe('Getting abi contract', function() {

  it('Existing contract', function() {
    let result = artifacts.load('ERC20').abi()
    test.object(result).match(function(obj) {
      return obj[0].name == 'totalSupply';
    });
  })

})