// Scrivi una funzione che fonda due array (con lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


var letter = ['a','b','c','d','e'];
var number = [1,2,3];
var mixed = [];

mixElement(letter, number);

function mixElement(letter,number){
    var interation = Math.min(letter.length, number.length);

    for (var i = 0; i < interation; i++) {
        //prendi primo elemento di letter
        var current_letter = letter[i];
        mixed.push(current_letter)
        //prendi primo elemento di number
        var current_number = number[i];
        mixed.push(current_number)
    }
    console.log('La sequenza mixata è ' + mixed);
    //se sono di lunghezza diversa dalla metà allora c'è ne sono altre da inserire
    if ((letter.length > (mixed.length / 2)) || (number.length > (mixed.length / 2))) {
        for (var i = 0; i < letter.length; i++) {
            //se non sono incluse
            if (!mixed.includes(letter[i])){
                //includile
                mixed.push(letter[i])
            }
        }
        for (var i = 0; i < number.length; i++) {
            //se non sono incluse
            if (!mixed.includes(number[i])){
                //includile
                mixed.push(number[i]);
            }
        }
    }
    console.log(mixed);
    return mixed;
}
