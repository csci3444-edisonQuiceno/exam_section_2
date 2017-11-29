const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare.js');

const num = 2;
const numString = "2";
const numSquare = 4;

describe('mySquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + num + ') should return square value of ' + numSquare, function() {
            let result = mySquare.toSquare(num);
            assert.equal(result, numSquare);
        });

        it('toSquare("' + numString + '") should return square value of ' + numSquare, function() {
            let result = mySquare.toSquare(numString);
            assert.equal(result, numSquare);
        });

        it('toSquare should return type number', function() {
            let result = mySquare.toSquare(num);
            assert.typeOf(result, 'number');
        });
    });
});