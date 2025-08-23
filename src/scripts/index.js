import '../styles/home.css';
import { pawnDisplayer } from './core'
import { resetSoft } from './utils/stat-ui-updt';

export const board = document.querySelector('.board');

board.addEventListener('click', e => {
    if (e.target !== document.querySelector('.winner-display') && e.target !== document.querySelector('.winner-display h1') && e.target !== board) 
        pawnDisplayer(e.target);
})

const playAgainBtn = document.getElementById('play-again');

playAgainBtn.addEventListener('click', resetSoft)

const quitBtn = document.getElementById('quit');

quitBtn.addEventListener('click', resetSoft);
