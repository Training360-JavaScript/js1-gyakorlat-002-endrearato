/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! 
(Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
const numArray = [4, 15, 25, 35];


const brutto = numArray
    .map(item  => item * 1.27)
    .reduce((previousNumber, currentNumber) => previousNumber + currentNumber)
const result = Math.round(brutto)

console.log(result)
console.log(typeof(result))

