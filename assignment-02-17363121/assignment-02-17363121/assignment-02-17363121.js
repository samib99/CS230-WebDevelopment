//Variables
let sequence = [];
let guess = [];
let score;
let Round_Time_ms = 500;
let roundCount = 0;
let gameOver = false;
let canPlay = false;
let sequenceToGuess = [...sequence];
//let shortCount = 0;
var timeoutID = 200;
var highestScore = 0;


const highScore = document.querySelector("#HighScore");
const lastScore = document.querySelector("#LastScore");
const light = document.querySelector("#Light");
const start = document.querySelector(".button");
const circ1 = document.querySelector('#Circle1');
const circ2 = document.querySelector('#Circle2');
const circ3 = document.querySelector('#Circle3');
const circ4 = document.querySelector('#Circle4');

start.addEventListener('click', (event) => {
    startGame();
});

function startGame() {
    //shortCount = 0;
    sequence = [];
    guess = [];
    roundCount = 1;
    //Round_Time_ms = 500;
    light.style.backgroundColor = "green";

    startRound();


}

function startRound() {
    guess = [];
    lastScore.innerHTML = roundCount;
    timeoutID = 5000;
    canPlay = false;
    sequence.push(Math.floor(Math.random() * 4) + 1);
    for (i = 0; i < sequence.length; i++) {
        setTimeout(FlashColor(sequence[i]), 400);
        //setTimeout(resetColors, 100);
        console.log(sequence);
    }
    playerTurn();
}

function playerTurn() {
    canPlay = true;
    // timeoutID = setInterval(check(), 1000);

}

function endgame() {
    lastScore.innerHTML = 0;
    FlashColor(0);
    FlashColor(0);
    FlashColor(0);
    light.style.backgroundColor = "red";
    if (guess.length > highestScore) {
        highestScore = roundCount;
    }
    highScore.innerHTML = highestScore;
    lastScore.innerHTML = 0;
}

circ1.addEventListener('click', (event) => {
    //canPlay = true;
    if (!canPlay) { return; } else {
        FlashColor(1);
        setTimeout(resetColors(), 800);
        guess.push(1);
        console.log(guess);
        if (guess[guess.length - 1] !== sequence[guess.length - 1]) {
            endgame();
        }
        if (guess.length == sequence.length) {
            roundCount++;
            startRound();
        }

    }
});
circ2.addEventListener('click', (event) => {
    //canPlay = true;
    if (!canPlay) { return; } else {
        FlashColor(2);
        setTimeout(resetColors(), 800);
        guess.push(2);
        console.log(guess);
        //shortCount++;
        if (guess[guess.length - 1] !== sequence[guess.length - 1]) {
            endgame();
        }
        if (guess.length == sequence.length) {
            roundCount++;
            startRound();
        }

    }
});
circ3.addEventListener('click', (event) => {
    //canPlay = true;
    if (!canPlay) { return; } else {
        FlashColor(3);
        setTimeout(resetColors(), 3000);
        guess.push(3);
        console.log(guess);
        if (guess[guess.length - 1] !== sequence[guess.length - 1]) {
            endgame();
        }
        if (guess.length == sequence.length) {
            roundCount++;
            startRound();
        }

    }
});
circ4.addEventListener('click', (event) => {
    //canPlay = true;
    if (!canPlay) { return; } else {
        FlashColor(4);
        setTimeout(resetColors(), 3000);
        guess.push(4);
        console.log(guess);
        if (guess[guess.length - 1] !== sequence[guess.length - 1]) {
            endgame();
        }
        if (guess.length == sequence.length) {
            roundCount++;
            startRound();
        }
    }
});


















function resetColors() {
    circ1.style.backgroundColor = "darkgreen";
    circ2.style.backgroundColor = "darkred";
    circ3.style.backgroundColor = "goldenrod";
    circ4.style.backgroundColor = "darkblue";
}

function FlashColor(num) {
    if (num == 0) {
        circ1.style.backgroundColor = "lightgreen";
        circ2.style.backgroundColor = "orange";
        circ3.style.backgroundColor = "lightyellow";
        circ4.style.backgroundColor = "lightblue";
        setTimeout(() => {
            resetColors();
        }, 1000);

        //setTimeout(resetColors, 100);

    } else if (num == 1) {
        circ1.style.backgroundColor = "lightgreen";
        setTimeout(() => {
            resetColors();
        }, 1000);
    } else if (num == 2) {
        circ2.style.backgroundColor = "orange";
        setTimeout(() => {
            resetColors();
        }, 1000);
    } else if (num == 3) {
        circ3.style.backgroundColor = "lightyellow";
        setTimeout(() => {
            resetColors();
        }, 1000);
    } else if (num == 4) {
        circ4.style.backgroundColor = "lightblue";
        setTimeout(() => {
            resetColors();
        }, 1000);
    }
}