const mailUtente = prompt('scrivi la tua mail:');


const mailListArray = ["davideciammetti@gmail.com", "giacomopoli@outlook.it", "ariannaresto@yahoo.it"];

for(let i = 0; i <= mailListArray.length; i++){
    
        if(mailListArray[i] === mailUtente){
            console.log('la mail inserita è valida');
            break;

        }else if(mailListArray[i] !== mailUtente){
            console.log('la mail inserita è sbagliata');

        }
    
}

