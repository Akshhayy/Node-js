// Create a new game board
const board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];
  
  // Print the game board
  function printBoard() {
    for (let i = 0; i < 3; i++) {
      console.log(board[i].join(" "));
    }
  }
  
  // Check if the game is over
  function isGameOver() {
    // Check for a winner
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== "-") {
        return true;
      }
    }
  
    // Check for a tie
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "-") {
          return false;
        }
      }
    }
  
    // If there is no winner and no empty spaces, the game is a tie
    return true;
  }
  
  // Get the player's move
  function getPlayerMove() {
    const move = prompt("Enter your move (row, column): ");
    const [row, column] = move.split(",");
    return { row: parseInt(row), column: parseInt(column) };
  }
  
  // Make a move on the game board
  function makeMove(player, move) {
    board[move.row][move.column] = player;
  }
  
  // Start the game
  function startGame() {
    // Choose a random player to go first
    const player = Math.random() < 0.5 ? "X" : "O";
  
    // Loop until the game is over
    while (!isGameOver()) {
      // Get the player's move
      const move = getPlayerMove();
  
      // Make the move on the game board
      makeMove(player, move);
  
      // Print the game board
      printBoard();
  
      // Switch players
      player = player === "X" ? "O" : "X";
    }
  
    // Check for a winner
    if (isGameOver()) {
      console.log(`${player} wins!`);
    } else {
      console.log("Tie game!");
    }
  }
  
  // Start the game
  startGame();