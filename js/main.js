/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/
const content = ["első", "második", "harmadik", "negyedik"]
let y;

function generateList() {
for (y of content) {
  document.write("<li>" + y + "</li>");
}}

generateList(content)


//const table = document.getElementById("table")

// content.forEach(generateList => {
//     table.innerHTML = `
//     <li>${content}</li>    
//     `
// })

// function generateList() {
//     for (let i = 0; i < content.length; i++) {
//         return table.innerHTML += `
//          <li>${content[i]}</li>
//            `
// }}
// generateList(content)

// let i;
// function generateList() {
// for (i of content) {
//     return table.innerHTML += `
//      <li>${content[i]}</li>
//        `
// }}

// generateList(content)