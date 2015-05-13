/* global document, window, console, EMOJI, INPUT, GAME, PLAYER, RAND, UTIL, WORLD, DRAGON */

// variables
var gui;

var init = function() {
    WORLD._gen();
    WORLD._draw(GAME.DIV.WORLD);
    WORLD.drawTo(GAME.DIV.WORLD, PLAYER);
    WORLD.drawTo(GAME.DIV.WORLD, DRAGON);
    redraw();
};

var update = function() {
    PLAYER.update();
    DRAGON.update();
    
    UTIL.collide(PLAYER, DRAGON, function() {
        PLAYER.health--;
    });
};

var redraw = function() {
    WORLD.focusTo(PLAYER);
    WORLD._redraw(GAME.DIV.WORLD);
    GAME.DIV.GUI.innerHTML = "";
    
    WORLD.drawTo(GAME.DIV.WORLD, PLAYER);
    WORLD.drawTo(GAME.DIV.WORLD, DRAGON);

    gui = document.createElement("div");
    
    for (var i = 0; i < PLAYER.health; i++) {
        gui.innerHTML += EMOJI.HEART;
    }
    
    GAME.DIV.GUI.appendChild(gui);
};

INPUT.callback = function() {
    update();
    redraw();
};

init();
