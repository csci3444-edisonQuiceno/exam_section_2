const assert = require('chai').assert;
const myPowers = require('../../../../src/common/util/math/myPowers.js');

const num = 3;
const numString = "3";
const numSquare = 9;
const numCube = 27;

describe('myPowers', function() {
    describe('toSquare', function() {
        it('toSquare(' + num + ') should return the square of ' + num + ' which is ' + numSquare, function() {
            let result = myPowers.toSquare(num);
            assert.equal(result, numSquare);
        });

        it('toSquare("' + numString + '") should convert the string to a number then return the square of ' + num + ' which is ' + numSquare, function() {
            let result = myPowers.toSquare(numString);
            assert.equal(result, numSquare);
        });

        it('toSquare should return type number', function() {
            let result = myPowers.toSquare(num);
            assert.typeOf(result, 'number');
        });
    });

    describe('toCube', function() {
        it('toCube(' + num + ') should return the cube of ' + num + ' which is ' + numCube, function() {
            let result = myPowers.toCube(num);
            assert.equal(result, numCube);
        });

        it('toCube("' + numString + '") should convert the string to a number then return the cube of ' + num + ' which is ' + numCube, function() {
            let result = myPowers.toCube(numString);
            assert.equal(result, numCube);
        });

        it('toCube should return type number', function() {
            let result = myPowers.toCube(num);
            assert.typeOf(result, 'number');
        });
    });
});