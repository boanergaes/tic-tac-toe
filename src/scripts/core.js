import { winCheck} from './utils/win-check';
import { aftermath, turnDisplayer, updtScore } from './utils/stat-ui-updt';

let player_turn = 1;
export function alternateTurns() {
    if (player_turn) {
        player_turn = 0;
        return 0;
    } else {
        player_turn = 1;
        return 1;
    }
}

export function turnTracker() {
    return player_turn;
}

export let boardArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

export function arrayReset() {
    boardArray.forEach(row => row.fill(0));
}

const xo = [
    // svg of 'O'
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>',
    
    // svg of 'X'
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
]

// const s11 = document.getElementById('s11');
// const s12 = document.getElementById('s12');
// const s13 = document.getElementById('s13');
// const s21 = document.getElementById('s21');
// const s22 = document.getElementById('s22');
// const s23 = document.getElementById('s23');
// const s31 = document.getElementById('s31');
// const s32 = document.getElementById('s32');
// const s33 = document.getElementById('s33');

let player1_score = document.getElementById('p1-win');
let player2_score = document.getElementById('p2-win');
let draw = document.getElementById('draw');
let gamesPlayed = document.getElementById('games-played');

export function statRemover() {
    player1_score.textContent = 0;
    player2_score.textContent = 0;
    draw.textContent = 0;
    gamesPlayed.textContent = 0;
}

let moves = 0;

export function resetMoves() {
    moves = 0;
}

// --- move tracker and undo ---

let moveTracker = [];

export function lastMove() {
    return moveTracker[moveTracker.length - 1];
}

export function pushMove(id) {
    moveTracker.push(id);
}

export function popMove() {
    moveTracker.pop();
}

export function clearMoveTracker() {
    moveTracker = [];
}

export function undo() {
    if (moves > 0) {
        // lastMove() returns the id of the last move square
        const tormv = lastMove();
        const row = tormv[1] - 1;
        const col = tormv[2] - 1;
        alternateTurns();
        turnDisplayer(turnTracker());
        popMove();
        document.getElementById(tormv).firstChild.remove();
        boardArray[row][col] = 0;
        moves--;
    }
}

// --- main game handler ---

export function mainGameHandler(pos) {

    pushMove(pos.id);
    
    //each square have id that corresponds to the 3d indexes of boardArray
    const row_index = pos.id[1] - 1;
    const col_index = pos.id[2] - 1; 
    
    if (boardArray[row_index][col_index] === 0) {
        moves++;    
        const turn = alternateTurns();

        turnDisplayer(turn);
    
        // 1 represents 'O' and 2 represents 'X'
        boardArray[row_index][col_index] = turn + 1;
        
        pos.innerHTML = xo[turn]; 
        
        if (winCheck(row_index,col_index, boardArray)) { 
            updtScore(gamesPlayed);  
            resetMoves();     
            if  (turn === 0) {
                updtScore(player1_score);
                aftermath('player1');
            } else {
                updtScore(player2_score);
                aftermath('player2');
            }
        } else {
            if (moves === 9) {
                updtScore(gamesPlayed); 
                updtScore(draw);
                aftermath('draw');
                resetMoves();
            }
        }
    }

    else alert('Sorry! You have chosen a position that have already been occupied!');

}