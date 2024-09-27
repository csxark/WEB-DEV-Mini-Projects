const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');
const p = document.createElement('p');

let random_number = parseInt(Math.random() * 100 + 1);
let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        let userGuess = parseInt(userInput.value);
        validate_guess(userGuess);
    });
}

function validate_guess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess < 1) {
        alert("Please enter a number more than 1")
    } else if (guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        prevguess.push(guess);
        if (numguess === 10) {
            displayguess(guess);
            diplaymessage(`Game Over!! Random number was ${random_number}`);
            endgame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}
function checkguess(guess) {
    if (guess === random_number) {
        diplaymessage(`You guessed it right!`);
        endgame();
    } else if (guess > random_number) {
        diplaymessage(`Number is Low!`);
    }
    else if (guess < random_number) {
        diplaymessage(`Number is High!`);
    }
}
function displayguess(guess) {
    userInput.value = '';
    guessslot.innerHTML += `${guess}  `
    numguess++;
    remaining.innerHTML = `${11 - numguess
        }`;
}
function diplaymessage(message) {
    loworhi.innerHTML = `
    <h2>${message}</h2>`;
}
function endgame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `
    <h2 id="newgame">Start new Game</h2>
    `;
    startover.appendChild(p);
    playgame = false;
    newgame();

}
function newgame() {
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click', function (e) {
        random_number = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = `${11 - numguess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);
        diplaymessage('   ');
        playgame = true;
    });
}
