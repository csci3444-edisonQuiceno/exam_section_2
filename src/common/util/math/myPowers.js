module.exports = {
    /**
     * @return Square of input number using toSquare from imported mySquare module
     */
    toSquare: function(inpNumber) {
        var mySquare = require("./mySquare.js");
        return mySquare.toSquare(inpNumber);
    },
    /**
     * @return Cube of input number using toCube from imported myCube module 
     */
    toCube: function(inpNumber) {
        var myCube = require("./myCube.js");
        return myCube.toCube(inpNumber);
    }
}