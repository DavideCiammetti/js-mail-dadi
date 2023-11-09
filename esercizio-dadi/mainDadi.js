'use strict';
const inputInizioGioco = parseInt(prompt('se vuoi iniziare il gioco premi 1'));

let start = 0;
// variabili controllo numeri random
let min = 1;
let max = 6;

let userPlayer = Math.floor(Math.random() * (max - min + 1)) + min;
let pcPlayer = Math.floor(Math.random() * (max - min + 1)) + min;;

if(inputInizioGioco == 1){
    // numero utente
    console.log("il numero dell'utente è:" + ' ' + userPlayer);
    // numero computer
    console.log("il numero del computer è:" + ' ' + pcPlayer);

    if(userPlayer > pcPlayer){
        console.log("l'utente ha vinto e il computer è stato sconfitto");
    }else if(userPlayer < pcPlayer){
        console.log("il compuer ha vinto e l'utente è stato sconfitto ");
    }else{
        console.log("il risultato è pari");
    }

}else{
    console.log('fine del gioco');
}