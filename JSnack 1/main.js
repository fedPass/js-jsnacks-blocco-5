// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var zucchine = [
    {
        'varietà':'asd',
        'lunghezza' : lunghezza,
        'peso' : peso
    },
    {
        'varietà':'asd',
        'lunghezza' : lunghezza,
        'peso' : peso
    },
    {
        'varietà':'asd',
        'lunghezza' : lunghezza,
        'peso' : peso
    },
    {
        'varietà':'asd',
        'lunghezza' : lunghezza,
        'peso' : peso
    },
    {
        'varietà':'asd',
        'lunghezza' : lunghezza,
        'peso' : peso
    },
    {
        'varietà':'asd',
        'lunghezza' : lunghezza,
        'peso' : peso
    },
    {
        'varietà':'asd',
        'lunghezza' : lunghezza,
        'peso' : peso
    },
    {
        'varietà':'asd',
        'lunghezza' : lunghezza,
        'peso' : peso
    },
    {
        'varietà':'asd',
        'lunghezza' : lunghezza,
        'peso' : peso
    },
    {
        'varietà':'asd',
        'lunghezza' : lunghezza,
        'peso' : peso
    }
]
for (var i = 0; i < 10; i++) {
    array[i]
}
var pesoTot = 0;
for (var i = 0; i < zucchine.length; i++) {
    var lunghezza = generaRandom(1,20);
    var peso = generaRandom(1,100);
    zucchine[i].peso = peso;
    zucchine[i].lunghezza = lunghezza;
    console.log('Il peso della zucchina numero ' + ([i]+1) + ' è ' + zucchine[i].peso);
    pesoTot += zucchine[i].peso;
}
console.log('Il peso totale è ' + pesoTot);
function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
