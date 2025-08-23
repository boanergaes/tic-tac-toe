import { boardArray } from "../core";

export function diagonalCheck(rowstart, colstart, rowend, colend) {
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

export function verticalCheck(col) {
    const input = boardArray[0][col];
    if (input  === 0) return false;
    for (let i = 1; i <= 2; i++) {
        if (boardArray[i][col] === 0) return false;
        if (boardArray[i][col] !== input) return false;
    }
    return true;
}

export function horizontalCheck(row) {
    const input = boardArray[row][0];
    if (input  === 0) return false;
    for (let j = 1; j <= 2; j++) {
        if (boardArray[row][j] === 0) return false;
        if (boardArray[row][j] !== input) return false;
    }
    return true;
}

export function winCheck(row, col) {
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