/* global window, console */

// input handlers
var INPUT = INPUT || {
    left     : false,
    up       : false,
    right    : false,
    down     : false,
    callback : null,
    handlers : [
        {
            name: "left",
            button: 37, 
            down: function() {
                INPUT.LEFT = true;
            },
            up: function() {
                INPUT.LEFT = false;   
            }
        },
        {
            name: "up",
            button: 38,
            down: function() {
                INPUT.UP = true;
            },
            up: function() {
                INPUT.UP = false;   
            }
        },
        {
            name: "right",
            button: 39,
            down: function() {
                INPUT.RIGHT = true;
            },
            up: function() {
                INPUT.RIGHT = false;   
            }
        },
        {
            name: "down",
            button: 40,
            down: function() {
                INPUT.DOWN = true;
            },
            up: function() {
                INPUT.DOWN = false;   
            }
        },
    ],
    getHandler: function(key) {
        for (var i = 0; i < INPUT.handlers.length; i++) {
            if (INPUT.handlers[i].button === key) {
                return INPUT.handlers[i];
            }
        }
    },
    keydown: function(event) {
        event = event || window.event;
        var key = event.keyCode || event.which;
        var handler = INPUT.getHandler(key);

        if (handler) {
            handler.down();
            event.preventDefault();
            
            if (INPUT.callback) {
                INPUT.callback();
            }
        }
    },
    keyup: function(event) {
        event = event || window.event;
        var key = event.keyCode || event.which;
        var handler = INPUT.getHandler(key);

        if (handler) {
            handler.up();
            event.preventDefault();
            
            if (INPUT.callback) {
                INPUT.callback();
            }
        }
    }
};

window.addEventListener("keydown", INPUT.keydown, false);
window.addEventListener("keyup", INPUT.keyup, false);
