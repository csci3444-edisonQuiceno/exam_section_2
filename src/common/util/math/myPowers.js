module.exports = {
    /**
     * @return 
     */
    toSquare: function(inpNumber) {
        var mySquare = require("../math/mySquare.js");
        return mySquare.toSquare(inpNumber);
    },
    /**
     * @return
     */
    toCube: function(inpNumber) {
        var myCube = require("../math/myCube.js");
        return myCube.toCube(inpNumber);
    }
}