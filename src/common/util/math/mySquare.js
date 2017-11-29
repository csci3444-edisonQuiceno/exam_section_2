module.exports = {
    /**
     * @return Square of input number
     */
    toSquare: function(inpNumber) {
        var num = NaN;
        if (typeof inpNumber === "number") {
            num = inpNumber;
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            num = Number(inpNumber);
        }
        return num * num;
    }
}