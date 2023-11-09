# mail dadi


# Mail
1. crea una lista array
2. Chiedi all’utente la sua email,
3. controlla che sia nella lista di chi può accedere,
4. stampa un messaggio appropriato sull’esito del controllo.

per questo esercizio prima di tutto inizierei con il creare la lista mail con un array quindi supponiamo di avere un array di 3 elementi 

1. listaArray = arra1, array2, array3 

2. successivamente dovremmo chiedere all'utente la sua mail tramite il comando PROMPT 

e  nel caso in cui fosse corretta stampare un certo tipo di messaggio e nel caso fosse errata un altro ancora.

3. inizio quindi con un ciclo for per passare ogni elemento della lista e successivamente con una condizione if vado a validare la mail   

PER i = 0; i <= listaArray.length; i++; 

    SE listaArray[i] === 'mailInserita'
        allora  "l'email inserita è valida"
    ALTRIMENTI
        "l'email inserita non è valida inserire nuovamente la mail"

<hr>
<hr>
<hr>
<hr>

# Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

- probabilmente prima di inziare il programma per renderlo un minimo interattivo chiederei all'utente quando iniziare il gioco, magari con una piccola stringa che dice: "digita 1 se vuoi inizare il gioco"

per prendere i numeri random uso la funzione math() sulle variabili dei 2 players

creiamo una variabile che ci servirà per inizare o meno il gioco ed altre 2 variabili per i giocatori

## variabili
start = 0;
userPlayer = math()
pcPlayer = math()



## svolgimento codice

### spiegazione

1. prendo l'input dall'utente

2. creo una condizione if per chiedere all'utente se vuole o meno giocare

3. successivamente inserisco le variabili nella condizione e le stampero in console

4. successivamente creo una condizione if per la quale metto a confronto i numeri usciti e in base a chi ha vinto uscira un determinato testo


prompt

SE start === 1 
    ALLORA il gioco parte 

    userPlayer = random
    console.log
    pcPlayer = random
    console.log

        SE  userPlayer > pcPlayer
            ALLORA  stamperemo "l'utente ha vinto il computer è stato sconfitto
        ALTRIMENTI SE userPlayer < pcPlayer
            ALLORA stamperemo "il computer compuer ha vinto l'utente è stato sconfitto "
        ALTRIMENTI SE userPlayer === pcPlayer
            ALLORA stamperemo "il risultato è pari"

ALTRIMENTI
    il gioco non può iniziare e scriviamo "fine del gioco"



