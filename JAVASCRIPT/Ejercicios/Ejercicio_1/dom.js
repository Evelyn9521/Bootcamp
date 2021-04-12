//1. Partimos de un HTML con un div vacío. Con JS, añadir dos elementos p con un texto dentro.
const myDiv = document.querySelector("div");
const create = document.createElement("P");

const texto = create.innerHTML="Párrafo 1: Hola que tal?";
myDiv.appendChild(create);
console.log(create);


const create2 = document.createElement("p");
const texto2 = create2.innerHTML = "Párrafo 2: Hola mundo";
myDiv.appendChild(create2);
console.log(create2);

const create3 = document.createElement("button");
const text3 = create3.innerHTML = "google.com";
myDiv.appendChild(create3);
console.log(create3);


//2. Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.
const button = document.getElementsByClassName("color")[0];
button.addEventListener("click", function(e){
    console.log(e)
    document.body.style.backgroundColor=("yellow"); 
});

const button2 = document.getElementById("color2");
button2.addEventListener("click", function(e){
    console.log(e)
    document.body.style.backgroundColor =("green");
});


//3. Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img. Al hacer click en
//cada URL, cambiará la imagen a la que contenga dicha URL.
const ul = document.querySelector("ul");
const img = document.querySelector("img")

ul.addEventListener("click", function(e){
    img.src = e.target.textContent;
});


//4. Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
//4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.
const input = document.getElementById("input");
const p = document.getElementById("paragraph");
const button3 = document.getElementById("button1");

button3.addEventListener("click", function(e){
    p.textContent = input.value;
});

const input2 = document.getElementById("input2");
const p2 = document.getElementById("paragraph2");

input2.addEventListener("input", function(){
    p2.textContent = input2.value;
});

//5. De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres
const textarea = document.getElementById("textarea");
textarea.addEventListener("input", function(e){
    if (e.target.value.length > 15){
        e.target.style.color = "red";
    }else{
        e.target.style.color = "green";
    }
});

//6. Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. Al pulsar el botón
//nos validará si el número es par o no. En caso negativo, cambiar los bordes del input a rojo.
//Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío.

const input = document.getElementById("input");
const parButton = document.getElementById("parButton");

input.parButton.addEventListener("click", e=>{
    if(input.value % 2 === 0){
        return input.style.border = "";
    }else{
        return input.style.border = "2px solid red"
    }
    
});




