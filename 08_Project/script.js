const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const yesno = document.querySelector('.yesno');
const guessslot = document.querySelector('.guesses');
const startover = document.querySelector('.resultParas');
const remaining = document.querySelector('.lastResult');
const p = document.createElement('p');
const color_array = ["red", "blue", "lime", "yellow", "purple", "orange", "black", "pink", "white", "gray", "aqua"];

let random_index = Math.floor(Math.random() * color_array.length);
let prevguess = [];
let guesscount = 1;
let playgame = true;
let color_picked = color_array[random_index];


if (playgame) {
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const userguess = event.target.id;
            body.style.backgroundColor = userguess;
            body.style.color = ['red','white', 'yellow', 'lime', 'aqua', 'pink', 'orange', 'gray'].includes(userguess) ? 'black' : 'white';
            validate_guess(userguess);
            event.target.disabled = true;
        });
    });
}

function validate_guess(guess) {
    if (guesscount <= 5) {
        displayguess(guess);
        checkguess(guess);
    }
    if (guesscount > 5) {
        displaymessage(`Game Over!! The color was ${color_picked}`);
        endgame();
    }
}

function displaymessage(message) {
    yesno.innerHTML = message;
}

function displayguess(guess) {
    prevguess.push(guess);
    guessslot.innerHTML += `${guess} `;
    remaining.innerHTML = `${5 - guesscount}`;
    guesscount++;
}

function checkguess(guess) {
    if (guess === color_picked) {
        displaymessage(`You guessed it right!`);
        endgame();
    } else {
        displaymessage(`Color is Wrong!`);
    }
}

function endgame() {
    if (remaining.innerHTML = '0' || color_picked in prevguess){
    playgame = false;
    p.classList.add('button');
    p.innerText = 'Play Again';
    startover.appendChild(p);
    p.addEventListener('click', newgame);
}
};

function newgame() {
    guesscount = 1;
    random_index = Math.floor(Math.random() * color_array.length);
    color_picked = color_array[random_index];
    console.log(color_picked);
    prevguess = [];
    p.remove();
    displaymessage('');
    guessslot.innerHTML = '';
    remaining.innerHTML = '5';
    body.style.backgroundColor="white";
    body.style.color="black";
    playgame = true;
    enableAllButtons();
}

function enableAllButtons() {
