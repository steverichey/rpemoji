// methods
var RAND = RAND || {
    float: function(min, max) {
        return Math.random() * (max - min) + min;
    },
    bool: function() {
        return Math.random() > 0.5;
    }
};
