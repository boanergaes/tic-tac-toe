import { arrayReset, resetMoves } from "../core";

const winnerDisplay = document.querySelector('.winner-display');
const winMessage = document.querySelector('.winner-display h1');
const playtimeBtnCont = document.querySelector('.playtime-btn-container');
const aftermathBtnCont = document.querySelector('.aftermath-btn-container');

function childRemover() {
    const board = document.getElementsByClassName('square');
    Array.from(board).forEach(element => {
        if (element.firstChild) element.firstChild.remove();
    });
}

function classRemover() {
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            let id = `s${i}${j}`;
            document.getElementById(id).classList.remove('winner-row');
        }
    }
}

export function resetSoft() {
    playtimeBtnCont.style.display = 'grid';
    aftermathBtnCont.style.display = 'none';
    winnerDisplay.style.display = 'none';
    childRemover();
    arrayReset();
    classRemover();
    resetMoves();
}

export function updtScore(elem) {
    let score = elem.textContent;
    elem.textContent = parseInt(score) + 1;
}

export function aftermath(winner) {
    playtimeBtnCont.style.display = 'none';
    aftermathBtnCont.style.display = 'grid';
    setTimeout(() => {
        
        winnerDisplay.style.display = 'flex';
        let msg;
        if (winner === 'player1') {
            msg = 'Player 1 Won The Game';
        }
        if (winner === 'player2') {
            msg = 'Player 2 Won The Game';
        }
        if (winner === 'draw') {
            msg = 'It Was A Draw';
        }
        winMessage.textContent = msg;
    }, 500);
}