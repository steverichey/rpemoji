/* global EMOJI, INPUT, GAME, WORLD */

var PLAYER = PLAYER || {
    icon: EMOJI.FACE, 
    x: 10, 
    y: 10,
    health: 5,
    update: function() {
        if (INPUT.LEFT && PLAYER.x > 0) {
            PLAYER.x--;
        }

        if (INPUT.RIGHT && PLAYER.x < WORLD.WIDTH - 1) {
            PLAYER.x++;
        }

        if (INPUT.UP && PLAYER.y > 0) {
            PLAYER.y--;
        }

        if (INPUT.DOWN && PLAYER.y < WORLD.HEIGHT - 1) {
            PLAYER.y++;
        }
    }
};
