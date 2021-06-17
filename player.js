// Player module
let player = (function () {
    let player;
    let playerNames;
    return {
        initialize: function (name1, name2) {
            // function to initlialize players
            player = 1;
            playerNames = [name1, name2];
        },
        getCurrentPlayer: function () {
            // funtion to get current player's name
            return playerNames[player - 1];
        },
        getNextPlayer: function () {
            // function to update next player and return his/her name
            player = (player === 1) ? 2 : 1;
            return playerNames[player - 1];
        },
        getPlayerSymbol: function () {
            // function to get player icon
            return player === 1 ? 'X' : 'O';
        }
    }
})();