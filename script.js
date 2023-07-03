/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

// ----------------------------------------------------------------------------------------------------------------------------------


/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
I principali datatype (visti a lezione) in JavaScript sono:
  - String: è un dato di tipo stringa, usato per le parole (è necessario mettere le virgolette).  Es: let nome = "Pietro";
  - Number: come suggerisce il nome, è un tipo di dato numerico, usato per i numeri.  Es: let num = 30; let num2 = 40;
  - Boolean: è un dato di tipo che indica se qualcosa è vero (true) o falso (false).  Es: console.log(num < num2) => true;
  - Undefined: possiamo vederlo come uno stato, dove a una variabile non abbiamo associato un valore (non intenzionale).  
               Es: let myVar;
  - Null: è simile ad "undefined", solo che in questo caso è intenzionale non assegnare un valore ad una variabile 
          (come possiamo vedere dal console, è di tipo object).  Es: let myVar2 = null;
*/


// ----------------------------------------------------------------------------------------------------------------------------------


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Angelo";
let myName = "Angelo";
const MyName = "Angelo";
console.log("(Nome definitore non consono) Il mio nome è:", name);
console.log("(Nome definitore consono) Il mio nome è:", myName);
console.log("(Variabile costante) Il mio nome è:", MyName);

//È preferibile non usare più nominare variabili con il nome di "name", poichè la variabile globale "name" si riferisce a window.name. Deprecated significa che per oggi può funzionare, ma magari domani no.

// ----------------------------------------------------------------------------------------------------------------------------------


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

//primo esempio
console.log("Primo esempio di 12 + 20:", 12 + 20);

//secondo esempio
let risultato = 12 + 20;
console.log("Secondo esempio di 12 + 20:", risultato);

//terzo esempio
let myNum1 = 12;
let muNum2 = 20;
console.log("Terzo esempio di 12 + 20:", myNum1 + muNum2);

//quarto esempio (usando myNum1 e myNum2)
let risultato1 = myNum1 + muNum2
console.log("Quarto esempio di 12 + 20:", risultato1);

// ----------------------------------------------------------------------------------------------------------------------------------


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;


// ----------------------------------------------------------------------------------------------------------------------------------


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* Se si toglie il commento alle due linee sottostandi si potrà notare come non è possibile riassegnare un valore alla variabile "MyName" dato che è di tipo const (ovvero costante, che non si può cambiare una volta settato un valore)
MyName = "Moreno";
console.log("Il mio cognome è:", MyName);

Invece si può riassegnare un valore a una variabile che non sia di tipo const (nelle quattro linee successive): */

//Metodo non più consono:
name = "Moreno";
console.log("(Nome definitore non consono) Il mio cognome è:", name);

//Il modo migliore:
myName = "Moreno";
console.log("(Nome definitore consono) Il mio cognome è:", myName);


// ----------------------------------------------------------------------------------------------------------------------------------


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let myRisultato = 4 - x;
console.log("Il risultato di 4 -", x, "è:", myRisultato);


// ----------------------------------------------------------------------------------------------------------------------------------


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log("È vero o falso che", name1, "e", name2, "sono uguali?", name1 === name2);
console.log("È vero o falso che", name1, "e", name2.toLowerCase(), "sono uguali?", name1 === name2.toLowerCase());


// ----------------------------------------------------------------------------------------------------------------------------------