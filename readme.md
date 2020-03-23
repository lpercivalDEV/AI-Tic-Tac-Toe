# Tic-Tac-Toe with unbeatble AI

**Live Demo:** https://lpercivaldev.github.io/AI-Tic-Tac-Toe/

**Tech Used:**
HTML, CSS, JS, MiniMax algorithm

![Portfolio Site Preview](https://github.com/lpercivalDEV/AI-Tic-Tac-Toe/blob/master/game-preview.png)


## Summary
This is a simple game of Tic-Tac-Toe where a human player (you) can play against an AI.

In this game of tic-tac-toe, it is not possible for the human to ever win. The only outcomes are AI wins, or there is a tie game.

This is possible due to the use of the minimax algorithm.

## How It's Made:
The MiniMax Algorithm is a way of finding the terminal states (end game) of solved games such as Poker, Checkers, Chess, and in our case - Tic-Tac-Toe.

The way this algorithm works is by assessing the possible moves left in a game. This is done by taking the possible moves and creating a tree of possible outcomes.

![Portfolio Site Preview](https://i.imgur.com/G0qGjwu.png)

These tree nodes can be assigned a value based on each possible outcome. Moves that result in a terminal node (win/loss scenario) are given a point value while nodes that do not result in a terminal node or result in a tie (no winner) are assigned a value of zero. The reason for this point system is to help each player in the algorithm decide which move is the best. There are two roles - one player will be the maximizing player and the other the minimizing player (this is where the "minimax" name comes from).

The maximizing player will attempt to make moves that moves its score closer to +∞ which are moves that will get it closer to a winning state. While the minimizing player does the same thing but in the opposite direction - selecting moves closer to -∞.

Tic-Tac-Toe is a "solved" game - meaning the outcome is already known if both players play perfectly. Therefore it is relatively simple to look through the possible moves to find the best one to play.

In more complicated games like Chess, there is another parameter called "Depth" that is needed to make the minimax algorithm work efficiently. This parameter is used to dictate how many moves ahead the algorithm should consider when creating its branch of possible moves. In Chess this makes sense because there are millions of possible moves each turn, but tic-tac-toe is a simple game, so it was not necessary to include the depth  parameter here.

Because in this case, the game involves a human player vs. an AI, there are only two possible outcomes - the AI wins, or the game is tied.

The algorithm is a recursive function that will check each node in the tree for an end state, if no end state is found, it will continue down that branch until an end state is found and assign it an appropriate score based on the outcome. It will then follow this same technique with the remainder of the nodes of possible moves until all possible end states are found in the tree. The AI will then select the best outcome from this traversal and play in that square. In my code, the AI is the maximizing player, so it will seek nodes with the highest possible score and play those squares.

Because the AI is checking for the best possible move each turn and tic-tac-toe is a "solved" game, it is not possible for a human to win against it. The only possible outcomes are a tie, or the AI wins if the human does not play optimally.


## Lessons Learned:
The biggest lesson of this project for me was learning what the minimax algorithm was, how it works, and how to use it to create a game AI that is unbeatable.

This was a lot of fun to build and very interesting to see how the node selection works in the minimax function.

In the future I would like to create a game of Chess with an AI that also uses the MiniMax function so that I can play with the depth parameter.


### Resources:
"The MiniMax Algorithm:"
https://www.youtube.com/watch?v=ui3GPfSnT8E

"How to build an ai that wins:"
https://blog.vivekpanyam.com/how-to-build-an-ai-that-wins-the-basics-of-minimax-search/

"Lessons Building a Magic Square Tic Tac Toe:"
https://ideonexus.com/2018/05/28/lessons-building-a-magic-square-tic-tac-toe-ai/

"Coding Challenge 154: Tic Tac Toe AI with Minimax Algorithm:"
https://www.youtube.com/watch?v=trKjYdBASyQ

"JavaScript Tic Tac Toe Project Tutorial - Unbeatable AI:"
https://www.youtube.com/watch?v=P2TcQ3h0ipQ&amp;feature=emb_logo&amp;t=9s

"Tic-Tac-Toe-MiniMax:"
https://github.com/diegocasmo/tic-tac-toe-minimax/blob/master/js/main.js
