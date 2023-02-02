// selecting elements

const btnEl = document.querySelectorAll('.btn-option');

const outputEl = document.getElementById('output');

const gameEl = document.getElementById('game-container');

const resetEl = document.getElementById('reset');

const newGameEl = document.getElementById('newgame');

const msgEl = document.getElementById('message');

// global variables

// creating winning pattern array

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

// x is plays first

let xTurn = true;

let count = 0;

// functions
const disableButtons = () => {
  btnEl.forEach((button) => (button.disabled = true));

  outputEl.classList.remove('hide');
  gameEl.classList.add('hide');
};

const enableButton = () => {
  btnEl.forEach((button) => {
    button.innerText = '';
    button.disabled = false;
  });

  outputEl.classList.add('hide');
};

newGameEl.addEventListener('click', function () {
  count = 0;
  enableButton();
  outputEl.classList.add('hide');
  gameEl.classList.remove('hide');
});

resetEl.addEventListener('click', function () {
  count = 0;
  enableButton();
  outputEl.classList.add('hide');
  gameEl.classList.remove('hide');
});

// const playerWin = (letter) => {
//   disableButtons();
// };

const drawFunction = () => {
  disableButtons();
  // count = 0;
  console.log(count);
  msgEl.innerHTML = `match draw`;
  count = 0;
};

const winFunction = (letter) => {
  disableButtons();
  console.log(letter);
  if (letter == 'x') {
    msgEl.innerHTML = `x wins`;
  } else {
    msgEl.innerHTML = 'o wins';
  }
};

const winCheck = () => {
  for (let i of winningPattern) {
    // array destructuring
    let [element1, element2, element3] = [
      btnEl[i[0]].innerText,
      btnEl[i[1]].innerText,
      btnEl[i[2]].innerText,
    ];

    if (element1 != '' && element2 != '' && element3 != '') {
      if (element1 == element2 && element2 == element3) {
        // console.log(element1);
        winFunction(element1);
      }
    }
  }
};

// display the text

btnEl.forEach((button) => {
  button.addEventListener('click', function () {
    if (xTurn) {
      xTurn = false;

      console.log(`xturn:${xTurn}`);

      // display the X player

      button.innerText = 'x';
      button.disabled = `true`;
    } else {
      // display the 0 player

      xTurn = true;
      console.log(`xturn:${xTurn}`);

      button.innerText = 'o';
      button.disabled = `true`;
    }
    // increase the count
    count += 1;
    console.log(count);
    // draw function
    if (count == 9) {
      drawFunction();
    }

    // check on the every click

    winCheck();
  });
});

// eventListeners
