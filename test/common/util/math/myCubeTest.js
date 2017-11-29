const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube.js');

const num = 3;
const numString = "3";
const numCube = 27;

describe('myCube', function() {
    describe('toCube', function() {
        it('toCube(' + num + ') should return the cube value of ' + numCube, function() {
            let result = myCube.toCube(num);
            assert.equal(result, numCube);
        });

        it('toCube("' + numString + '") should return cube value of ' + numCube, function() {
            let result = myCube.toCube(numString);
            assert.equal(result, numCube);
        });

        it('toCube should return type number', function() {
            let result = myCube.toCube(num);
            assert.typeOf(result, 'number');
        });
    });
});