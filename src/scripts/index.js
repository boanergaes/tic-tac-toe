import '../styles/home.css';
import { mainGameHandler, undo } from './core'
import { resetHard, resetSoft } from './utils/stat-ui-updt';

export const board = document.querySelector('.board');

board.addEventListener('click', e => {
    if (e.target !== document.querySelector('.winner-display') && e.target !== document.querySelector('.winner-display h1') && e.target !== board) 
        mainGameHandler(e.target);
})

const playAgainBtn = document.getElementById('play-again');

playAgainBtn.addEventListener('click', resetSoft)

const quitBtn = document.getElementById('quit');

quitBtn.addEventListener('click', resetSoft);

const restartBtn = document.getElementById('restart');

restartBtn.addEventListener('click', resetHard);

const undoBtn = document.getElementById('undo');

undoBtn.addEventListener('click', undo);
