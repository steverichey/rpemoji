var WORLD = WORLD || {
    _map: null,
    _gen: function() {
        
    },
    get: function(x, y) {
        if (this._map === null) {
            this._map = [];
            
            for (var mapx = 0; mapx < GAME.HEIGHT; mapx++) {
                var line = [];
                
                for (var mapy = 0; mapy < GAME.WIDTH; mapy++) {
                    var block = RAND.pick([EMOJI.TREE, EMOJI.GRASS]);
                    line.push(block);
                }
                
                this._map.push(line);
            }
        }
        
        return this._map[x][y];
    }
};
