/* global EMOJI, RAND, GAME */

var DRAGON = DRAGON || {
    icon: EMOJI.DRAGON, 
    x: 15, 
    y: 15,
    update: function() {
        if (RAND.bool()) {
            if (RAND.bool()) {
                if (RAND.bool()) {
                    this.x++;
                } else {
                    this.x--;
                }
            } else {
                if (RAND.bool()) {
                    this.y++;
                } else {
                    this.y--;
                }
            }
        }
        
        if (this.x > GAME.WIDTH) {
            this.x = GAME.WIDTH;
        }
        
        if (this.x < 0) {
            this.x = 0;
        }
        
        if (this.y > GAME.HEIGHT) {
            this.y = GAME.HEIGHT;
        }
        
        if (this.y < 0) {
            this.y = 0;
        }
    }
};
