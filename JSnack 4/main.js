// Scrivi una funzione che fonda due array (con lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


var letter = ['a','b','c','d','e'];
var number = [1,2,3];

mixElement(letter, number);

function mixElement(array1, array2){
    var mixed = [];
    var interation = Math.min(array1.length, array2.length);

    for (var i = 0; i < interation; i++) {
        //prendi primo elemento di letter
        var current_letter = array1[i];
        mixed.push(current_letter)
        //prendi primo elemento di number
        var current_number = array2[i];
        mixed.push(current_number)
    }
    console.log('La sequenza mixata dello stesso numero di elementi degli array è ' + mixed);
    //se sono di lunghezza diversa dalla metà allora c'è ne sono altre da inserire
    if ((array1.length > (mixed.length / 2)) || (array2.length > (mixed.length / 2))) {
        for (var i = 0; i < letter.length; i++) {
            //se non sono incluse
            if (!mixed.includes(array1[i])){
                //includile
                mixed.push(array1[i])
            }
        }
        for (var i = 0; i < array2.length; i++) {
            //se non sono incluse
            if (!mixed.includes(array2[i])){
                //includile
                mixed.push(array2[i]);
            }
        }
    }
    console.log('La sequenza mixata finale è ' + mixed);
    return mixed;
}
