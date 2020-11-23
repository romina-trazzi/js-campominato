/* js - campominato
Descrizione
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.

Se il numero è presente nella lista dei numeri generati, la partita termina, 
altrimenti si continua chiedendo all’utente un altro numero.

La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile 
di numeri consentiti.

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50  */

// Generiamo numeri casuali tra 1 e 100 tramite una funzione
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

// Ripetiamo il procedimento 16 volte tramite un ciclo for per generare una listNumber da inserire in un array vuoto
var nRandom = [];

for (var i = 0; i < 16; i++) { 
    nRandom.push(getRandomInt(1, 101)); // Salviamo i numeri casuali come elementi di un array   
}

console.log(nRandom);

// Chiediamo all'utente di inserire 84 numeri compresi tra 1 e 100 
// Confrontiamo ciascun numero con gli elementi dell'array tramite un valore flag

var numeroPresente = false;

for (var x = 0; x < 5; x++) {
    var userChoice = Number(prompt("Inserisci un numero compreso tra 0 e 100. Non puoi inserire più volte lo stesso numero"));
     
    for (var n = 0; n < 5; n++) {
        var numberRandom = nRandom[i]; // Salviamo gli elementi dell'array uno per volta in una variabile
        if (numberRandom === userChoice) {
            numeroPresente = true;
            var msg = alert("Hai perso");
        }
    }

} 
    