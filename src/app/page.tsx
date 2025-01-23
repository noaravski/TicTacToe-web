"use client";
import {
  TicTacToeBoard,
  checkDraw,
  checkWinner,
  startBoard,
} from "@/app/types/tictactoe";
import { useCallback, useEffect, useState } from "react";
import Board from "./components/tictactoe/board";
import Title from "./components/title/title";
import Turn from "./components/turn/turn";

export default function Home() {
  const [board, setBoard] = useState<TicTacToeBoard>(startBoard);
  const [winner, setWinner] = useState<-0 | 1 | 2 | null>(null);
  const [inGame, setInGame] = useState<boolean>(true);
  const [player, setPlayer] = useState<1 | 2>(1);

  const togglePlayer = useCallback(() => {
    const newPlayer = player === 1 ? 2 : 1;
    setPlayer(newPlayer);
  }, [player]);

  const checkGame = useCallback((board: TicTacToeBoard) => {
    const winner = checkWinner(board);
    if (winner !== null) {
      setWinner(winner);
      setInGame(false);
    } else if (checkDraw(board)) {
      setWinner(0);
      setInGame(false);
    }
  }, []);

  const move = async (row: number, col: number) => {
    if (board[row][col] === 0) {
      const newBoard: TicTacToeBoard = [...board];
      newBoard[row] = [...newBoard[row]];
      newBoard[row][col] = player;
      await setBoard(newBoard);
      togglePlayer();
      checkGame(newBoard);
    }
  };

  const resetGame = () => {
    setBoard(startBoard);
    setWinner(null);
    setInGame(true);
    setPlayer(1);
  };

  useEffect(() => {}, [board, togglePlayer, player, inGame, winner, checkGame]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
      <Title />
      <Turn
        winner={winner}
        inGame={inGame}
        player={player}
        resetGame={resetGame}
      />
      <Board board={board} inGame={inGame} move={move} isUser={true} />
      <div className="h-4">
        {!inGame && (
          <button
            onClick={resetGame}
            className="px-4 py-2 my-2 bg-[#1f3540] rounded-xl shadow-md text-[#f0f0f0] font-bold text-lg active:scale-95 transition duration-200 ease-in hover:bg-[#18272e]"
          >
            Reset Game
          </button>
        )}
      </div>
    </main>
  );
}
