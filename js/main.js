/* global document, window, console, EMOJI, INPUT, GAME, PLAYER, RAND, dragon */

// variables
var table;
var gui;

var undef = function(object) {
    return typeof object === "undefined";
};

var collide = function(object1, object2, callback) {
    if (undef(object1.x) || undef(object1.y) || undef(object2.x) || undef(object2.y)) {
        console.warn("tried to collide objects without coords");
        return false;
    }
    
    var result = false;
    
    if (object1.x === object2.x && object2.y === object2.y) {
        result = true;
    }
    
    if (callback && result) {
        callback();
    }
    
    return result;
};

var update = function() {
    PLAYER.update();
    dragon.update();
    
    collide(PLAYER, dragon, function() {
        PLAYER.health--;
    });
};

var redraw = function() {
    GAME.DIV.WORLD.innerHTML = "";
    GAME.DIV.GUI.innerHTML = "";
    table = document.createElement("table");

    for (var y = 0; y < GAME.HEIGHT; y++) {
        var row = document.createElement("tr");

        for (var x = 0; x < GAME.HEIGHT; x++) {
            var cell = document.createElement("td");

            if (PLAYER.x === x && PLAYER.y === y) {
                cell.innerHTML = PLAYER.icon;
            } else if (dragon.x === x && dragon.y === y) {
                cell.innerHTML = dragon.icon;
            } else {
                cell.innerHTML = EMOJI.TREE;
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    gui = document.createElement("div");
    
    for (var i = 0; i < PLAYER.health; i++) {
        gui.innerHTML += EMOJI.HEART;
    }

    GAME.DIV.WORLD.appendChild(table);
    GAME.DIV.GUI.appendChild(gui);
};

INPUT.callback = function() {
    update();
    redraw();
};

redraw();
