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

// funcion flecha para cambiar el color de lo que que quieras, en este caso del hijo y el padre
const changeBackground = (element, color)=>element.style.backgroundColor=color;
//changeBackground(children[0], "#333");
// changeBackground(parent1,"yellow");
// /* children[0].parent1.style.backgroundColor="#333"  forma simplificada para poner el color */ 

// changeBackground(parent2.children[1], "blue");
// changeBackground(children[0]. parentNode.parentNode, "#ddd");//cambia al abuelo
// changeBackground(parent1.children[1].previousElementSibling,"red" ); //cambia el elemento anterior al que selecciono
// changeBackground(parent2.children[0], "green")
// changeBackground(grandparent.children[1].previousElementSibling.lastElementChild, "pink")





//Properties/propiedades
//children[0].innerHTML ="child 1 v2"  //innerhtml selecciona todo lo que tengas dentro en este caso dentro de parent
console.log(children[0].innerHTML);// imprime etiquetas html
console.log(children[0].textContent);//ignora etiquetas html

console.clear();

parent1.classList.remove("bg-dark"); //elimina una clase
console.log("classlist:", parent1.classList);

parent1.classList.add("bg-red"); //añade una clase
console.log("classlist:", parent1.classList);

parent1.classList.toggle("bg-yellow"); //alterna una clase, sino la tiene la añade y si la tiene la quita
console.log("classlist:", parent1.classList);

parent1.setAttribute("name", "nombre-del-parent-1"); //te lo añade, y si existe te lo sobreescribe



console.clear();
//create/remove/ elements

// se crea un div dentro del elemento que quieras en html
let myDiv = document.createElement("div");
myDiv.id ="new-Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

let myDiv2 =myDiv;
parent2.appendChild(myDiv2)
parent1.appendChild(myDiv); //mismo nodo con dos nombres diferentes


myDiv2 = myDiv.cloneNode(true);//creamos un nuevo nodo a partir del original. debemos poner true para que se copie igual al anterior
parent2.appendChild(myDiv2)
myDiv2.textContent ="child 5"

myDiv.remove(); //elimina 

myDiv3 = myDiv.cloneNode();
parent2.before(myDiv3); //inserta otro padre antes del mismo
parent2.after(myDiv.cloneNode()); // inserta otro padre despues del mismo



//Ejercicio.crea una funcion que me devuelva un nodo nuevo y que reciba etiqueta e id
function createNode(label, id) {
    let newNode = document.createElement(label);
    newNode.id = id;
    return newNode;    
}

let newDiv = createNode("div", "identificador1");
let table = createNode("table", "identificador");

parent2.appendChild(newDiv);
parent2.appendChild(table);

console.clear();
//....................EVENTS/EVENTOS.........................

const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function (event){
    console.log(event);
    console.log(event.target);
   
   console.log(event.target.tagName); //nombre del boton
   if(event.ctrlKey){
       document.body.classList.toggle("bg-red");
   }
   console.log(`x: ${event.clientX}| y: ${event.clientY}`);
   console.log(`Alt: ${event.altKey}, shift: ${event.shiftKey}, ctrl: ${event.ctrlKey}`);
})


const emailInput = document.querySelector("#emailInput"); 
emailInput.addEventListener("focus", inputListener); 
emailInput.addEventListener("blur", inputListener); 

function inputListener (e){
    console.log("Tipo de evento: ", e.type);
   if(e.type ==="focus"){
       e.target.classList.add("bg-red");
   }else if (e.type ==="blur"){
       e.target.classList.remove("bg-red");
   }
}
    
const changeTitle = e =>{
    document.querySelectorAll("h1")[2].textContent= emailInput.value;
}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);


const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);




function coords (e){
    document.querySelectorAll("h1")[3].textContent = `x: ${e.clientX}| y: ${e.clientY}`;
    
}


document.body.addEventListener("mousemove", coords);
















