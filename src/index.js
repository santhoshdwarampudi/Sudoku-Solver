import './style/util.css';
import './style/style.css';
import Board from './components/board';

const board = new Board();
document.querySelector('#main').appendChild(board.render());
document.querySelector('#solve').addEventListener('click', board.setUpBeforeSolveAndSolve);
document.querySelector('#speed').addEventListener('input', board.handleSpeedInput);
document.querySelector('#addArrayButton').addEventListener('click',
  () => board.handleInputFromArray(document.querySelector('#arrayInput').value));
document.querySelector('#difficulty').addEventListener('change', board.handleDifficultyChange);
const themeToggle = document.querySelector('#themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
document.querySelector('#pauseButton').addEventListener('click', board.handlePauseClick);
document.querySelector('#hintButton').addEventListener('click', board.provideHint);
document.querySelector('#resetButton').addEventListener('click', board.resetBoard);
board.loadGame();
board.setBoardFromDifficulty();
