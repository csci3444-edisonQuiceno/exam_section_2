module.exports = {
    /**
     * @return Cube of input number
     */
    toCube: function(inpNumber) {
        var num;
        if (typeof inpNumber === "number") {
            num = inpNumber;
        } else {
            num = Number(inpNumber); // Converts the object to a number. If the value cannot be converted to a number, NaN is returned
        }
        return num * num * num;
    }
}