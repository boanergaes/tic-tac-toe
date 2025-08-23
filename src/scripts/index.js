import { pawnDisplayer } from './core'

import '../styles/home.css';

export const board = document.querySelector('.board');

board.addEventListener('click', e => {
    pawnDisplayer(e.target);
})


// const board_svg = document.querySelector('.square svg');

// board_svg.addEventListener('click', e => {
//     pawnDisplayer(e.parent);
// })

