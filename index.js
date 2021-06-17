// function to update game status
function updateGameStatus() {
    let message;
    if (ttt.isWon()) {
        message = player.getCurrentPlayer() + ' won!';
    } else if (ttt.isDraw()) {
        message = 'Game Draw!';
    } else {
        message = player.getNextPlayer() + '\'s turn:';
    }
    document.getElementById('gameStatus').innerHTML = message;
}

// function to play each move
function play(e) {
    e.stopPropagation();
    if (e.target.id
        && !document.getElementById(e.target.id).innerHTML
    ) {
        // play move
        let playerSymbol = player.getPlayerSymbol();
        document.getElementById(e.target.id).innerHTML = playerSymbol;

        // check if player won
        ttt.checkWinPattern(playerSymbol, e.target.id);

        // update game status
        updateGameStatus();
    }
}

// function to initialize game
function initializeGame(boardSize, parentNodeId, player1, player2) {
    // setting up Tic Tac Toe
    ttt.initialize(boardSize, parentNodeId);

    // setting up Players
    player.initialize(player1, player2);
    document.getElementById('gameStatus').innerHTML = player.getCurrentPlayer() + '\'s turn:';
}

function toggleScreen() {
    // function to display either gameInputs or gameContainer
    document.getElementById('gameInputs').style.display = document.getElementById('gameInputs').style.display === 'none' ? 'flex' : 'none';
    document.getElementById('gameContainer').style.display = document.getElementById('gameContainer').style.display === 'flex' ? 'none' : 'flex';
}

// function to start the game with appropriate inputs
function startGame() {
    let gameSize = parseInt(document.getElementById('gameSize').value);
    let player1 = document.getElementById('player1').value;
    let player2 = document.getElementById('player2').value;

    if (gameSize >= 3 && player1 && player2) {
        initializeGame(gameSize, 'game', player1, player2);
        toggleScreen();
    } else {
        alert('Please enter the player names and the size of the Tic Tac Toe! (Minimum Size: 3)');
    }
}