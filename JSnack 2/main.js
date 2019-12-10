// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)
var text = prompt('Inserisci parola');
var reverse = reverseString(text);
console.log('Parola al contrario: ' + reverse);

function reverseString(text) {
    //leggo la parola
    console.log(text);
    //divido le lettere
   var split = text.split('');
   console.log(split);
   //le inverto di posizione
   var mirror = split.reverse();
   console.log(mirror);
   //le riunisco in una parola
   var reverse = mirror.join('');
   return reverse
}
