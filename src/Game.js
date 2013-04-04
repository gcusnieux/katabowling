var Game = function () {

    var totalPins = 0;

    return {
        roll:function (pins) {
            totalPins += pins;
            return pins;
        }
    }

}