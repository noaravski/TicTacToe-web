import { TicTacToeBoard } from "@/app/types/tictactoe";
import Slot from "./slot";

export default function TicTacToeBoard({
  board,
  inGame,
  move,
  isUser,
}: Readonly<{
  board: TicTacToeBoard,
  inGame: boolean,
  move: (row: number, col: number) => void,
  isUser: boolean,
}>) {
  const setMove = (row: number, col: number) => {
    if (inGame && isUser) {
      move(row, col);
    }
  }
  return (
    <div className="h-[350px]  md:w-[400px] flex-col items-center justify-center space-y-4 rounded-xl">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className='flex items-center justify-center space-x-4'>
          {row.map((value, cellIndex) => (
            <Slot key={`${rowIndex}-${cellIndex}`} value={value} inGame={inGame} move={() => setMove(rowIndex, cellIndex)} isUser={isUser} />
          ))}
        </div>
      ))}
    </div>
  );
}
