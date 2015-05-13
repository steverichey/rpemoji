/* global document, GAME, RAND, EMOJI, PLAYER, DRAGON, UTIL */

var WORLD = WORLD || {
    WIDTH: 200,
    HEIGHT: 200,
    _current: {
        x: 4,
        y: 4
    },
    _map: null,
    _gen: function() {
        this._map = [];

        for (var mapx = 0; mapx < this.HEIGHT; mapx++) {
            var line = [];

            for (var mapy = 0; mapy < this.WIDTH; mapy++) {
                var block = RAND.pick([EMOJI.TREE, EMOJI.GRASS, EMOJI.WATER, EMOJI.MOUNTAIN]);
                line.push(block);
            }

            this._map.push(line);
        }
    },
    _draw: function(el) {
        el.innerHTML = "";
        
        var table = document.createElement("table");

        for (var y = 0; y < GAME.HEIGHT; y++) {
            var row = document.createElement("tr");

            for (var x = 0; x < GAME.HEIGHT; x++) {
                var cell = document.createElement("td");

                cell.innerHTML = this.get(x + this._current.x, y + this._current.y);

                row.appendChild(cell);
            }

            table.appendChild(row);
        }
        
        el.appendChild(table);
    },
    _redraw: function(el) {
        var table = el.querySelector("table");
        var rows  = el.querySelectorAll("tr");
        
        for (var y = 0; y < rows.length; y++) {
            var cells = rows[y].querySelectorAll("td");
            
            for (var x = 0; x < cells.length; x++) {
                cells[x].innerHTML = this.get(x + this._current.x, y + this._current.y);
            }
        }
    },
    get: function(x, y) {
        if (!UTIL.in(x, -1, this._map.length) || !UTIL.in(y, -1, this._map[x].length)) {
            return "";
        }
        
        return this._map[x][y];
    },
    drawTo: function(el, object) {
        var x = object.x - this._current.x;
        var y = object.y - this._current.y;
        var table = el.querySelector("table");
        
        if (table.querySelectorAll) {
            var rows = table.querySelectorAll("tr");
            
            if (rows[y] && rows[y].querySelectorAll) {
                var cell = rows[y].querySelectorAll("td")[x];
                
                if (cell) {
                    cell.innerHTML = object.icon;
                }
            }
        }
    },
    focusTo: function(object) {
        this._current.x = object.x - Math.round(GAME.WIDTH / 2);
        this._current.y = object.y - Math.round(GAME.HEIGHT / 2);
    }
};
