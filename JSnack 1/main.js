// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var pesoTot = 0;
var zucchine = [];
for (var i = 0; i < 10; i++) {
    var lunghezza = generaRandom(1,20);
    var peso = generaRandom(1,100);
    var object = {
        'varietà':'abc',
        'lunghezza' : lunghezza,
        'peso' : peso
    }
    zucchine.push(object);
    var posizione = parseInt([i]) + 1
    console.log('Il peso della zucchina numero ' + posizione + ' è ' + zucchine[i].peso);
    pesoTot += zucchine[i].peso;
}
console.log('Il peso totale è ' + pesoTot);
function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
