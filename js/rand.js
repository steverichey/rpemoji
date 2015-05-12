// methods
var RAND = RAND || {
    float: function(min, max) {
        return Math.random() * (max - min) + min;
    },
    int: function(min, max) {
        return Math.round(this.float(min, max));
    },
    bool: function() {
        return Math.random() > 0.5;
    },
    pick: function(array) {
        return array[this.int(0, array.length - 1)];
    }
};
