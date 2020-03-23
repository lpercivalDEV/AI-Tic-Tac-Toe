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
    cells[i].style.color = "lime";
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
    document.getElementById(index).style.backgroundColor = "white";
    document.getElementById(index).style.color = gameWin.player == human ? "blue" : "red";
  }
  for (let i = 0; i< cells.length; i++) {
    cells[i].removeEventListener("click", turnClick, false);
  }
  declareWinner(gameWin.player == human ? "You win!" : "You lose.");
}

function declareWinner(who) {
  document.querySelector(".endgame").style.display = "inline-block";
  document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
  return originalBrd.filter(square => typeof square == "number");
}

function bestChoice() {
  return minimax(originalBrd, ai).index;
}

function checkTie() {
  if (emptySquares().length == 0) {
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "green";
      cells[i].removeEventListener("click", turnClick, false);
    }
    declareWinner("Tie Game.");
    return true;
  }
  return false;
}

function minimax(newBoard, player) {
  let openSq = emptySquares(newBoard);

  if (checkWin(newBoard, human)) {
    return {score: -10};
  }else if (checkWin(newBoard, ai)) {
    return {score: 10};
  }else if (openSq.length === 0) {
    return {score: 0};
  }
  let plays = [];
  for (let i = 0; i < openSq.length; i++) {
    let play = {};
    play.index = newBoard[openSq[i]];
    newBoard[openSq[i]] = player;

    //recursion - continue until terminal state is found for one of the players and update the resulting board/score property
    if (player == ai) {
      let result = minimax(newBoard, human);
      play.score = result.score;
    }else {
      let result = minimax(newBoard, ai);
      play.score = result.score;
    }
    newBoard[openSq[i]] = play.index;

    plays.push(play);
  }
  let bestPlay;
  if(player == ai) {
    let bestScore = -10000;
    for (let i = 0; i<plays.length; i++) {
      if (plays[i].score > bestScore) {
        bestScore = plays[i].score;
        bestPlay = i;
      }
    }
  }else {
    let bestScore = 10000;
    for (let i = 0; i<plays.length; i++) {
      if (plays[i].score < bestScore) {
        bestScore = plays[i].score;
        bestPlay = i;
      }
    }
  }
  return plays[bestPlay];
}
