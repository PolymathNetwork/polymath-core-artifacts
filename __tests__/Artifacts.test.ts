import * as artifacts from '../src/index';

it('load existing contract', () => {
  const result = artifacts.load('ERC20').content;
  expect(result).not.toBe("");
});

it('load not existing contract', () => {
  expect(() => {
    artifacts.load('ERC721').content
  }).toThrow();
});

it('load two differents contracts', () => {
  const erc20 = artifacts.load('ERC20').content;
  const basicToken = artifacts.load('BasicToken').content;
  expect(erc20).toMatch(/\"ERC20\"/i);
  expect(basicToken).toMatch(/\"BasicToken\"/i);
});

it('load existing contract and get ABI structure', () => {
  const result = artifacts.load('ERC20').abi();
  expect(result[0]).toHaveProperty('name', 'totalSupply');
});

it('connect to Kovan network', function() {
  const result = artifacts.registry().network(42);
  expect(result).not.toBe("");
});

it('connect to Main network', function() {
  const result = artifacts.registry().network(1);
  expect(result).not.toBe("");
});

it('connect to Undefined network', function() {
  expect(() => {
    artifacts.registry().network(3);
  }).toThrow();
});