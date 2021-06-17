// Tic Tac Toe module
let ttt = (function () {
    let won;
    let filled;
    let size;
    let counters = {};

    // function to create game board
    // has quadratic time complexity
    function createGameBoard(size, parentNodeId) {
        document.getElementById(parentNodeId).innerHTML = '';
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let element = document.createElement('div');
                element.id = '' + i + j;
                element.style.flexBasis = (100 / size - 1) + '%';
                document.getElementById(parentNodeId).appendChild(element);
            }
        }
    }

    return {
        initialize: function (s, parentNodeId) {
            // function to initialize game params
            size = s;
            filled = 0;
            won = false;
            counters = {};
            createGameBoard(size, parentNodeId);
        },
        isWon: function () {
            // function to check if game is won
            return won;
        },
        isDraw: function () {
            // function to check if game is drawn
            return !won && filled === (size * size);
        },
        checkWinPattern: function (icon, currentPosition) {
            // algorithm to update game patterns and check for win situation
            // has constant time complexity
            ++filled;
            let [row, column] = currentPosition.split('');
            const rowCounter = icon + 'r' + row;
            const columnCounter = icon + 'c' + column;
            const firstDiagonalCounter = icon + 'd1';
            const secondDiagonalCounter = icon + 'd2';

            counters[rowCounter] = counters[rowCounter] ? (counters[rowCounter] + 1) : 1;
            counters[columnCounter] = counters[columnCounter] ? (counters[columnCounter] + 1) : 1;

            if (row === column) {
                counters[firstDiagonalCounter] = counters[firstDiagonalCounter] ? (counters[firstDiagonalCounter] + 1) : 1;
            }

            if (parseInt(row) === (size - column - 1)) {
                counters[secondDiagonalCounter] = counters[secondDiagonalCounter] ? (counters[secondDiagonalCounter] + 1) : 1;
            }

            if (counters[rowCounter] === size
                || counters[columnCounter] === size
                || counters[firstDiagonalCounter] === size
                || counters[secondDiagonalCounter] === size) {
                won = true;
            }
        }
    }
})()