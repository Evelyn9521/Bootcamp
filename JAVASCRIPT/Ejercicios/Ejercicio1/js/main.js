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

// Manera mas corta de hacerlo.....const list = document.querySelector("ul");
// const image = document.querySelector("img");

// const changeImage = e => image.src = e.target.textContent;

// list.addEventListener("click", changeImage);


//4.Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
//4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.

const ap4Paragraph= document.getElementById("fillableParagraph");
const ap4Input = document.querySelector("input");
const ap4Button =document.querySelectorAll("button")[1];

ap4Button.addEventListener("click", () =>{ ap4Paragraph.textContent = ap4Input.value});


const ap42Paragraph= document.getElementById("fillableParagraph2");
const ap42Input = document.querySelectorAll("input")[1];


ap42Input.addEventListener("input", () => ap42Paragraph.textContent = ap42Input.value);




//5.De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres

const textarea =document.querySelector("#textareaToValidate");
textarea.addEventListener("input", e =>{
    if(e.target.value.length > 15){
        e.target.style.color = "red"; //target. lo que hace que funcione el evento, en este caso target equivale a textarea
    }else{
        e.target.style.color = "green";
    }
});


//6.Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. Al pulsar el botón nos validará si el número es par o no. En caso negativo, cambiar los bordes del input a rojo.Para revertir el estado
// de una propiedad, podemos utilizar el valor “revert” o dejarla vacío.

const evenInput = document.querySelector("#evenNumberInput");
evenInput.nextElementSibling.addEventListener("click", () =>{
    if(evenInput.value % 2 === 0){
        evenInput.style.border = "";
    }else{
        evenInput.style.border = "2px solid red";
    }
});


//7.Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento (“Elemento X”) usando un bucle for.

const ul = document.getElementById("lisToFill");

for(let i = 0; i <=10; i++){
    const newLi = document.createElement("li");
    newLi.textContent = `ELemento ${i}`;
    ul.appendChild(newLi);
}


//8.Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. Si pulso primero el botón y luego el enlace, se me abre en una nueva pestaña.

const newTabButton = document.querySelector("#newTab");
const link = document.querySelector("a");
newTabButton.addEventListener("click",()=> link.target = "_blank");


//9.Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde y azul. Al seleccionar un color del select, cambiar el color del párrafo.

const ap9Paragraph = document.querySelector("#colorsParagraph");
document.querySelector("#colorsSelect").addEventListener("change", e => {
    ap9Paragraph.style.color = e.target.value;
} );


//10.Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualiza el número de elementos que se han generado, los que son pares y los que son impares.






//11.Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón. Al pulsar el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe, lo añadirá al principio.




//12.Crearemos una clase .btnen CSS que le de ciertos estilos a un botón. Al hacer clicken el botón haremos “toggle” o alternaremos esa clase, es decir, si está presente la quitaremos y si no está, la añadiremos.