let originalBrd;
const human = "🤨";
const ai = "💻";

const winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
];

const cells = document.querySelectorAll(".game-cell");
const reset = document.getElementById("reset");

reset.addEventListener("click", startGame);
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none";
  originalBrd = Array.from(Array(9).keys());
  for (let i=0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turnClick(sq) {
  if (typeof originalBrd[sq.target.id] == 'number') {
    turn(sq.target.id, human);
    if (!checkTie()) {
      turn(bestChoice(), ai);
    }
  }
}

function turn(squareId, player) {
  originalBrd[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWin = checkWin(originalBrd, player);
  console.log(gameWin, player);
  if(gameWin){
    gameOver(gameWin);
  }
}

function checkWin(board, player) {
  let moves = board.reduce((acc, ele, ind) =>
      (ele === player) ? acc.concat(ind) : acc, []);
  let gameWin = null;
  for (let [index, win] of winCombos.entries()) {
    if (win.every(elem => moves.indexOf(elem) > -1)) {
      gameWin = {index: index, player: player};
      break;
    }
  }
  return gameWin;
}

function gameOver(gameWin) {
  for (let index of winCombos [gameWin.index]) {
    console.log(index);
    document.getElementById(index).style.backgroundColor = "white";
    document.getElementById(index).style.color = gameWin.player == human ? "lime" : "red";
  }
  for (let i = 0; i<cells.length; i++) {
    cells[i].removeEventListener("click", turnClick, false);
  }
  declareWinner(gameWin.player == human ? "You win!" : "You did not win.");
}
