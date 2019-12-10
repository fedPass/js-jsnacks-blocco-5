// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine

var pesoPiccole = 0;
var pesoGrandi = 0;
var zucchinePiccole = [];
var zucchineGrandi = [];
// Crea 10 oggetti che rappresentano una zucchina.
for (var i = 0; i < 10; i++) {
    var lunghezza = generaRandom(1,30);
    var peso = generaRandom(1,100);
    var object = {
        'varietà':'abc',
        'lunghezza' : lunghezza,
        'peso' : peso
    }
    // Dividi in due array separati le zucchine che misurano meno o più di 15cm.
    if (object.lunghezza > 15) {
        zucchinePiccole.push(object);
        pesoPiccole += object.peso;
    } else {
        zucchineGrandi.push(object);
        pesoGrandi += object.peso;
    }
}
// Infine stampa separatamente quanto pesano i due gruppi di zucchine
console.log(zucchineGrandi);
console.log(zucchinePiccole);
console.log('tot peso delle zucchine grandi: ' + pesoGrandi);
console.log('tot peso delle zucchine piccole: ' + pesoPiccole);

function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
