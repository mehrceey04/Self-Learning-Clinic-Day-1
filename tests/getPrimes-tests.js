'use strict';

var myApp = require('../app/getPrimes.js');

describe('Return prime numbers generated from 0 to n in an array', function () {
  it('should return [2] for n = 2', function () {
    expect(myApp.getPrimes(2)).toEqual([2]);
  });

  it('should return [2, 3, 5, 7] for n = 10', function () {
    expect(myApp.getPrimes(10)).toEqual([2, 3, 5, 7]);
  });

  it('should return [2, 3, 5] for n = 5', function () {
    expect(myApp.getPrimes(5)).toEqual([2, 3, 5]);
  });

  it('should return [2, 3, 5, 7, 11, 13] for n = 15', function () {
    expect(myApp.getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);
  });

  it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53 ] for n = 55', function () {
    expect(myApp.getPrimes(55)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53 ]);
    });
});

describe('Return [] for no prime numbers', function() {
  it('should return [] for n = 1', function () {
    expect(myApp.getPrimes(1)).toEqual([]);
  });
});
  
describe('It should return a msg for invalid input, negative input value, or zero as input', function() {
  it('should return a msg for n = 0', function () {
    expect(myApp.getPrimes(0)).toEqual('Pls enter a positive number greater than 0');
  });

  it('should return a msg for n = -3', function () {
    expect(myApp.getPrimes(-3)).toEqual('Pls enter a positive number greater than 0');
  });

  it('should return a msg for n = -17', function () {
    expect(myApp.getPrimes(-17)).toEqual('Pls enter a positive number greater than 0');
  });

  it('should return a msg for n = "hello"', function () {
    expect(myApp.getPrimes('hello')).toEqual('Pls enter a positive number greater than 0');
  });

  it('should return a msg for n = "X"', function () {
    expect(myApp.getPrimes('X')).toEqual('Pls enter a positive number greater than 0');
  });
});


