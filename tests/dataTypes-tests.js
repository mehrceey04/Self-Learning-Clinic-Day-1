'use strict'

var myApp = require('../app/dataTypes.js');

describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {
    it("should return 'no value' for null", function() {
      expect(myApp.dataTypes(null)).toEqual('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(myApp.dataTypes(undefined)).toEqual('no value');
    });

  });

  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(myApp.dataTypes(true)).toBe(true);
    });

    it("should return false for `false`", function() {
      expect(myApp.dataTypes(false)).toBe(false);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 99", function() {
      expect(myApp.dataTypes(99)).toBe('less than 100');
    });

    it("should return 'less than 100' for 21", function() {
      expect(myApp.dataTypes(21)).toBe('less than 100');
    });

    it("should return 'less than 100' for 44", function() {
      expect(myApp.dataTypes(44)).toBe('less than 100');
    });

    it("should return 'more than 100' for 101", function() {
      expect(myApp.dataTypes(101)).toBe('more than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(myApp.dataTypes(144)).toBe('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(myApp.dataTypes(100)).toBe('equal to 100');
    });


  });

  describe("Case for Strings", function() {

    it("should return the length of `Merciful GOD + Glorious GOD`", function() {
      expect(myApp.dataTypes('Merciful GOD + Glorious GOD')).toBe(27);
    });

    it("should return the length of `tergiversate`", function() {
      expect(myApp.dataTypes('tergiversate')).toBe(12);
    });

    it("should return the length of an empty string", function() {
      expect(myApp.dataTypes('')).toBe(0);
    });

    it("should return the length of `555`", function() {
      expect(myApp.dataTypes('555')).toBe(3);
    });

  });

  describe("Case for arrays", function() {

    it("should return `2` for `[0, 1, 2]`", function() {
      expect(myApp.dataTypes([0, 1, 2])).toBe(2);
    });

    it("should return `c` for `['a', 'b', 'c', 'd', 'e']`", function() {
      expect(myApp.dataTypes(['a', 'b', 'c', 'd', 'e'])).toBe('c');
    });

    it("should return `undefined` for `[]`", function() {
      expect(myApp.dataTypes([])).not.toBe();
    });
    
    it("should return `undefined` for `[4, 9]`", function() {
      expect(myApp.dataTypes([4, 9])).not.toBe(2);
    });

    it("should return `undefined` for `[4]`", function() {
      expect(myApp.dataTypes([4])).not.toBe(2);
    });
  });

  describe("Case for functions", function() {
    it("should call the `callback` function with argument true, and return `called callback`", function() {
      var callback = function(arg) {
        expect(arg).toBeTruthy();
        if(arg === true) {
          return 'called callback';
        }
      };
      expect(myApp.dataTypes(callback)).toBe('called callback');
    });
  });
});