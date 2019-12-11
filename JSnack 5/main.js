// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”

var array = [];
var a = 4;
var b = 8;
var newArray = [];

for (var i = 0; i < 10; i++) {
    var element = generaRandom(1,50);
    array.push(element)
}
console.log(array);

position(array,a,b);

function position(array,a,b) {
    for (var i = a - 1; i < b; i++) {
        var current_element = array[i];
        newArray.push(current_element)
    }
    console.log(newArray);
    return newArray;
}

function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
