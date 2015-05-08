/* global EMOJI, RAND */

var dragon = dragon || {
    icon: EMOJI.DRAGON, 
    x: 15, 
    y: 15,
    update: function() {
        if (RAND.bool()) {
            if (RAND.bool()) {
                if (RAND.bool()) {
                    dragon.x++;
                } else {
                    dragon.x--;
                }
            } else {
                if (RAND.bool()) {
                    dragon.y++;
                } else {
                    dragon.y--;
                }
            }
        }
    }
};
