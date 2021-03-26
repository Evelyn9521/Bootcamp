//Apartado 1. Partimos de un HTML con un div vacío.
//Con JS, añadir dos elementos p con un texto dentro

const div = document.getElementsByClassName("div")[0];

console.log(div);
const p = document.createElement("p");

document.createTextNode("p");
p.textContent =("Párrafo1: Hola, que tal?.");
div.appendChild(p);
console.log(p);

const p2 = document.createElement("p");
p2.textContent = ("Párrafo2: Hola, mundo.");
div.appendChild(p2);
console.log(p2);


//Apartado 2. Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.

const colorButton = document.getElementsByClassName("button")[0];
colorButton.addEventListener("click", function (e) {
    console.log(e);
    document.body.style.backgroundColor =("yellow");
   
});


//Apartado 3. Partimos de un HTML con una lista de 3 URLs(texto) de imágenes y un elementimg.
// Al hacer clicken cada URL, cambiará la imagen a la que contenga dicha URL

const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");
const changeImage =(e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

