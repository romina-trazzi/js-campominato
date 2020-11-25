/*====================================================
=            CODICE JS CAMPOMINATO BONUS            =
======================================================*/

/* BONUS: (da fare solo se funziona tutto il resto - vedi cartella bonus)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

// Nascondiamo punti_utente
var punti = document.getElementById("punti_utente");
punti.style.display = "none";

// Chiediamo all'utente il livello di difficoltà che vuole impostare + validazione
var livello = prompt("Quale livello di difficoltà vuoi scegliere? Digita un numero da 0 a 2.");
while (isNaN(livello) || livello < 0 || livello > 2) {
    prompt("Non hai inserito correttamente il livello di difficoltà. Riprova! Digita un numero da 0 a 2.");
}

// Con l'istruzione switch impostiamo i valori delle variabili da acquisire nei differenti casi
switch (livello) {
    case 1:
        var numbery = getRandomInt(1, 81);
        var possibility = 64;
        var min = 1
        var max = 81
        break;

    case 2: 
        var numbery = getRandomInt(1, 51);
        var possibility = 34;
        var min = 1
        var max = 51
        break;

    default: 
        var numbery = getRandomInt(1, 101);
        var possibility = 84;
        var min = 1
        var max = 101
        break;
}

// Generiamo numeri casuali tramite una funzione
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

// Ripetiamo il procedimento fino a che nell'array non compaiono 16 numeri da inserire in un array vuoto
// In questo modo (funzione inArray) verifichiamo che non esistano numeri che si ripetono all'interno dell'array
var nRandom = [];

while (nRandom.length < 16) {
    var numbery = getRandomInt(min, max); // Salva un singolo numero ad ogni ciclo
    if (!inArray(nRandom, numbery)) { // Se il numero NON è inArray - cioè se inArray =  false (vedi funzione)
        nRandom.push(numbery); // Aggiungiamo nuovi numeri casuali come elementi dell'array   
    }
}

// I due parametri sono indicati in modo generico, diventano specifici quando si invoca la funzione
function inArray(array, numero) {
    var i = 0;
    while (i < array.length) { // Fino a che l'indice è minore della lunghezza dell'array
        if (numero === array[i]) { // Se il singolo numero è presente fra gli elementi dell'array
            return true;  // Restituisci inArray = vero
        }
        i++;
    }
    return false;
}

console.log(nRandom);

// Chiediamo all'utente di inserire i suoi numeri
// Confrontiamo ciascun numero dell'utente con gli elementi dell'array tramite un valore flag
var userChoiceArray = [];
var vittorie = 0;

console.log(possibility);

while (userChoiceArray.length < possibility) {
    var userChoice = Number(prompt("Inserisci un numero compreso tra 0 e " + max + ". Non puoi inserire più volte lo stesso numero o zero."));

    if (inArray(nRandom, userChoice)) { // Se il numero dell'utente è presente nell'array dei numeri del pc
        alert("Game Over");
        break;
    } else {
        alert("Continuiamo a giocare!");
        vittorie = vittorie + 1;
    }

    console.log(vittorie);

    // Se il numero dell'utente è già stato scelto da lui e quindi è negli elementi di userChoiceArray
    if (inArray(userChoiceArray, userChoice) || (userChoice <= 0) || (userChoice > max) || (isNaN(userChoice))) {
        alert("Hai già usato questo numero oppure è zero o maggiore di " + max + ". Inseriscine un altro!");
    } else userChoiceArray.push(userChoice); // Salviamo i numeri scelti dall'utente come elementi di un array

}

// Metodo 1 per confrontare gli elementi dell'array con userChoice
/* Creiamo una variabile per verificare se la mail inserita fa parte di quelle dell'array.
La risposta può essere true o false 
var boolean = nRandom.includes(userChoice);  
    if (boolean == true) {
        alert("Hai perso!");
    } else {
        alert("Continuiamo a giocare!");
    } */

// Metodo 2 per confrontare gli elementi dell'array con userChoice
/* 
var numeroPresente = false;
 
for (var x = 0; x < possibility; x++) {
 
if (nRandom[i] === userChoice) {
     numeroPresente = true;
 }
 
}
 if (numeroPresente) {   // Essendo un valore booleano può già essere true \ false
 alert("Hai perso!");   
 } else {
 vittorie = vittorie + 1; 
 alert("Continuiamo a giocare!")
 } 
}*/


// Mostriamo all'utente la lista dei numeri generati dal computer, quelli scelti da lui e il numero di punti totalizzato
var listNumber = document.getElementById("lista_numeri");
listNumber.innerHTML = nRandom;

var userListNumber = document.getElementById("lista_utente");
userListNumber.innerHTML = userChoiceArray;

var punti = document.getElementById("punti_utente");
punti.style.display = "block";

var vittoria = document.getElementById("numeri_vittorie");
vittoria.style.color = "red";
vittoria.innerHTML = vittorie;

if (vittorie == max) {
    alert("Hai totalizzato il massimo punteggio. Hai vinto!");
}



