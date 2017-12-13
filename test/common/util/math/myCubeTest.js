const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube.js');

const num = 3;
const numString = "" + num;
const numCube = num * num * num;

describe('myCube', function() {
    describe('toCube', function() {
        it('toCube(' + num + ') should return the cube of ' + num + ' which is ' + numCube, function() {
            let result = myCube.toCube(num);
            assert.equal(result, numCube);
        });

        it('toCube("' + numString + '") should convert the string to a number then return the cube of ' + num + ' which is ' + numCube, function() {
            let result = myCube.toCube(numString);
            assert.equal(result, numCube);
        });

        it('toCube should return type number', function() {
            let result = myCube.toCube(num);
            assert.typeOf(result, 'number');
        });
    });
});