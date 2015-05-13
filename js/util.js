var UTIL = UTIL || {
    collide: function(object1, object2, callback) {
        if (this.undef(object1.x) || this.undef(object1.y) || this.undef(object2.x) || this.undef(object2.y)) {
            return false;
        }

        var result = false;

        if (object1.x === object2.x && object1.y === object2.y) {
            result = true;
        }

        if (callback && result) {
            callback();
        }

        return result;
    },
    undef: function(object) {
        return typeof object === "undefined";
    },
    in: function(val, min, max) {
        return val > min && val < max;
    }
};
