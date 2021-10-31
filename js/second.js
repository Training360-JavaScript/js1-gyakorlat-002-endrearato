/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/
const array = [1, 3, 5, 9, 4, 7]; 
let x = 10;

const secondNumber = function(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array.includes(x)) {
            return true;
        }
    return false;
    }
}

function arrayIndex(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array.includes(x)) {
            return array.indexOf(x);
        }
        return -1;
    }
}

function checker(a, b){ 
        let allnumber = array.every(Number);
        let someNumber = array.some(Number);
    return object = {
        allElementsAreNumbers: allnumber, 
        someElementsAreNumbers: someNumber,
        exists: secondNumber(array, x),
        index: arrayIndex(array, x)
        }
 }

 checker (array, x)
 console.log(object);
 


