console.clear();
//...............DOM DOCUMENT...............
//Basic
console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title = "Cheatsheet Javascript (DOM)"
// document.title += "(DOM)";
console.log(document.title);

//Selector/ Selectores
const family = document.getElementsByTagName("div");
console.log(family); //selecciona todos los div

const grandparent = document.getElementById("grandparent");
console.log(grandparent);//seleciona de los id, los grandparent

const parents = document.getElementsByClassName("parent");
const parent1 = parents[0];
const parent2 = parents[1];
console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);


let element = document.querySelector("div#grandparent>.parent>div.child#child4");
//seleciona lo que tu quieras, accediendo igual a css
console.log(element);

parent1.style.backgroundColor="#333";











// Array.from(family).forEach(item => console.log(item));
// for(let familyMember of family){
//     console.log(familyMember);
// }