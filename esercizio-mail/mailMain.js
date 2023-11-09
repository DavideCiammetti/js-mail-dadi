const mailUtente = prompt('scrivi la tua mail:');


const mailListArray = ["davideciammetti@gmail.com", "giacomopoli@outlook.it", "ariannaresto@yahoo.it"];


// verifica
let mailFound = false; 
for(let i = 0; i < mailListArray.length; i++){
    
        if(mailListArray[i] === mailUtente){
            
            mailFound = true;
            break;
        }
    
}

// Decisione
if(mailFound === true) {
    console.log('mail confermata');
} else {
    console.log('mail errata');
}
