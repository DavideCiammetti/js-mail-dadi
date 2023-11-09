'use strict';
const inputInizioGioco = parseInt(prompt('se vuoi iniziare il gioco premi 1'));

let start = 0;
let min = 1;
let max = 6;
let random = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random);