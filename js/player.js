/* global EMOJI, INPUT, GAME */

var PLAYER = PLAYER || {
    icon: EMOJI.FACE, 
    x: 10, 
    y: 10,
    health: 5,
    update: function() {
        if (INPUT.LEFT && PLAYER.x > 0) {
            PLAYER.x--;
        }

        if (INPUT.RIGHT && PLAYER.x < GAME.WIDTH - 1) {
            PLAYER.x++;
        }

        if (INPUT.UP && PLAYER.y > 0) {
            PLAYER.y--;
        }

        if (INPUT.DOWN && PLAYER.y < GAME.HEIGHT - 1) {
            PLAYER.y++;
        }
    }
};
