import OIcon from "../tictactoe/oicon";
import XIcon from "../tictactoe/xicon";

export default function Turn({
  winner,
  inGame,
  player,
}: {
  winner: -0 | 1 | 2 | null;
  inGame: boolean;
  player: 1 | 2;
  resetGame: () => void;
}) {
  return (
    <div className="h-20 md:h-[100px] mt-4">
      {winner === 0 && !inGame && (
        <h1 className="text-7xl font-bold text-[#f0f0f0]">It&apos;s a draw!</h1>
      )}
      {winner === 1 && !inGame && (
        <h1 className="text-7xl flex font-bold text-[#f0f0f0]">
          <XIcon />
          <span>&nbsp;&nbsp;wins!</span>
        </h1>
      )}
      {winner === 2 && !inGame && (
        <h1 className="text-7xl flex font-bold text-[#f0f0f0]">
          <OIcon />
          <span>&nbsp;&nbsp;wins!</span>
        </h1>
      )}
      {inGame && (
        <h1 className="text-7xl flex font-bold text-[#f0f0f0]">
          {player === 1 ? <XIcon /> : <OIcon />}
          <span>&apos;s turn</span>
        </h1>
      )}
    </div>
  );
}
