"use strict";
const startBtn = document.querySelector('.btn-start')!;
const board = document.querySelector('.board');
const fieldToFind = document.querySelector('.field-to-find')!;
const playerScore = document.querySelector('.score')!;
const timer = document.querySelector('.timer')!;

const findingField = (xField: Number, yField: Number) => {
    let xFieldLetter: String = 'a';
    switch (xField) {
        case 1:
            xFieldLetter = 'a';
            break;
        case 2:
            xFieldLetter = 'b';
            break;
        case 3:
            xFieldLetter = 'c';
            break;
        case 4:
            xFieldLetter = 'd';
            break;
        case 5:
            xFieldLetter = 'e';
            break;
        case 6:
            xFieldLetter = 'f';
            break;
        case 7:
            xFieldLetter = 'g';
            break;
        case 8:
            xFieldLetter = 'h';
            break;
    }
    return xFieldLetter + yField.toString();
}
const randomField = () => {
    let randomX = Math.floor(Math.random() * 8) + 1;
    let randomy = Math.floor(Math.random() * 8) + 1;
    let field = findingField(randomX, randomy);
    return field;
}

const newFieldToFind = () => {
    randField = randomField();
    fieldToFind.textContent = randField;
}

let time = 0;
let score = 0;
let randField = 'a5';

setInterval(() => {
    if (time > 0) time--;
    if (time == 0) startBtn.classList.remove('hidden');
    timer.textContent = time.toString();
}, 1000)

board?.addEventListener('click', (e) => {
    let xField = Math.floor(e.offsetX / 102) + 1;
    const yField = 8 - (Math.floor(e.offsetY / 102));
    const chosenField = findingField(xField, yField);

    if (time > 0 && randField === chosenField) {
        score++;
        playerScore.textContent = score.toString();
        newFieldToFind();

    }
});


startBtn.addEventListener('click', () => {
    time = 30;
    score = 0;
    playerScore.textContent = score.toString();
    timer.textContent = time.toString();
    newFieldToFind();
    startBtn.classList.add('hidden');
});