import { board } from './index'

let player1_turn = 1;
export function alternateTurns() {
    if (player1_turn) {
        player1_turn = 0;
        return 0;
    } else {
        player1_turn = 1;
        return 1;
    }
}

let boardArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const xo = [
    // svg of 'O'
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>',
    // svg of 'X'
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
]

function diagonalCheck(rowstart, colstart, rowend, colend) {
    const input = boardArray[rowstart][colstart];
    if (input === 0) return false;

    const reverse = colend < colstart;

    for (let i = rowstart+1, j = reverse ? colstart-1 : colstart+1; i <= rowend ; i ++) {
        if (boardArray[i][j] === 0) return false;
        if (boardArray[i][j] !== input) return false;
        reverse ? j-- : j++;
    }

    return true;
}

function verticalCheck(col) {
    const input = boardArray[0][col];
    if (input  === 0) return false;
    for (let i = 1; i <= 2; i++) {
        if (boardArray[i][col] === 0) return false;
        if (boardArray[i][col] !== input) return false;
    }
    return true;
}

function horizontalCheck(row) {
    const input = boardArray[row][0];
    if (input  === 0) return false;
    for (let j = 1; j <= 2; j++) {
        if (boardArray[row][j] === 0) return false;
        if (boardArray[row][j] !== input) return false;
    }
    return true;
}

const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');
const s13 = document.getElementById('s13');
const s21 = document.getElementById('s21');
const s22 = document.getElementById('s22');
const s23 = document.getElementById('s23');
const s31 = document.getElementById('s31');
const s32 = document.getElementById('s32');
const s33 = document.getElementById('s33');

function winCheck(row, col) {
    if (diagonalCheck(0, 0, 2, 2)) {
        document.getElementById('s11').classList.add('winner-row');
        document.getElementById('s22').classList.add('winner-row');
        document.getElementById('s33').classList.add('winner-row');
        return true;
    }
        
    if (diagonalCheck(0, 2, 2, 0)) {
        document.getElementById('s13').classList.add('winner-row');
        document.getElementById('s22').classList.add('winner-row');
        document.getElementById('s31').classList.add('winner-row');
        return true;
    }
    
    if (verticalCheck(col)) {
        document.getElementById(`s1${col+1}`).classList.add('winner-row');
        document.getElementById(`s2${col+1}`).classList.add('winner-row');
        document.getElementById(`s3${col+1}`).classList.add('winner-row');
        return true;
    }
    
    if (horizontalCheck(row)) {
        document.getElementById(`s${row+1}1`).classList.add('winner-row');
        document.getElementById(`s${row+1}2`).classList.add('winner-row');
        document.getElementById(`s${row+1}3`).classList.add('winner-row');
        return true;
    }
}


export function pawnDisplayer(pos) {
    //each square have id that corresponds to the 3d indexes of boardArray
    const row_index = pos.id[1] - 1;
    const col_index = pos.id[2] - 1; 

    if (boardArray[row_index][col_index] === 0) {
        const turn = alternateTurns();
    
        boardArray[row_index][col_index] = turn + 1;
        console.log(boardArray); // to be removed!!
        
        pos.innerHTML = xo[turn]; 
        
        if (winCheck(row_index,col_index)) {         
            // setTimeout(() => {
            //     alert(`player${turn + 1} won the game!`)
            // }, 300)
        }
    }

    else alert('Sorry! You have chosen a position that have already been occupied!');

}