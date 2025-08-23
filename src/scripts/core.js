import { board } from './index'
import { diagonalCheck, verticalCheck, horizontalCheck, winCheck} from './utils/win-check'

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

export let boardArray = [
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

const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');
const s13 = document.getElementById('s13');
const s21 = document.getElementById('s21');
const s22 = document.getElementById('s22');
const s23 = document.getElementById('s23');
const s31 = document.getElementById('s31');
const s32 = document.getElementById('s32');
const s33 = document.getElementById('s33');


export function pawnDisplayer(pos) {
    //each square have id that corresponds to the 3d indexes of boardArray
    const row_index = pos.id[1] - 1;
    const col_index = pos.id[2] - 1; 

    if (boardArray[row_index][col_index] === 0) {
        const turn = alternateTurns();
    
        boardArray[row_index][col_index] = turn + 1;
        console.log(boardArray); // to be removed!!
        
        pos.innerHTML = xo[turn]; 
        
        if (winCheck(row_index,col_index, boardArray)) {         
            // setTimeout(() => {
            //     alert(`player${turn + 1} won the game!`)
            // }, 300)
        }
    }

    else alert('Sorry! You have chosen a position that have already been occupied!');

}