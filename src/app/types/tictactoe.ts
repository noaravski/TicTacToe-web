type TicTacToeBoardItem = 0 | 1 | 2;
type TicTacToeBoardRow = [TicTacToeBoardItem, TicTacToeBoardItem, TicTacToeBoardItem];
export type TicTacToeBoard = [TicTacToeBoardRow, TicTacToeBoardRow, TicTacToeBoardRow];

export const startBoard: TicTacToeBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

export const checkWinner = (board: TicTacToeBoard): 0 | 1 | 2 | null => {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      return board[i][0];
    }
    if (board[0][i] !== 0 && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
      return board[0][i];
    }
  }
  if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    return board[0][2];
  }
  return null;
}

export const checkDraw = (board: TicTacToeBoard): boolean => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}
