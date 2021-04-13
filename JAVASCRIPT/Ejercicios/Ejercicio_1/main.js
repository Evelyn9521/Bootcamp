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
const input3 = document.getElementById("input3");
const parButton = document.getElementById("parButton");
parButton.addEventListener("click", function(){
    if(input3.value % 2 === 0){
        return input3;
    }else{
        return input3.style.backgroundColor = "red";
    }
});


//7. Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento (“Elemento X”)
//usando un bucle for.
const ull = document.getElementById("ul");

for(let i = 0; i <= 10; i++){
    const li  = document.createElement("li");
    li.innerHTML =`Elemento ${i}`;
    ull.appendChild(li);
}


//8. Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. Si pulso primero el
//botón y luego el enlace, se me abre en una nueva pestaña.
const link = document.getElementById("link");
const buttonNewPag = document.getElementById("buttonNewPag");

buttonNewPag.addEventListener("click", function(){
     link.target ="_blank" //_blank hace que se habra una nueva pestaña.
});


//9. Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde y azul. Al
//seleccionar un color del select, cambiar el color del párrafo.
const paragraph3 = document.getElementById("p");
const select = document.getElementById("select");
select.addEventListener("change", function(e){
    paragraph3.style.color = select.value;//el color del párrafo cambia cuando elegimos el valor al seleccionar.

});


//10. Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualiza el número
//de elementos que se han generado, los que son pares y los que son impares.
const aleatory = document.getElementById("random");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");
const aleatoryButton = document.getElementById("aleatoryButton");

aleatoryButton.addEventListener("click", function(){
 const random = Math.floor(Math.random() * 100);
 aleatory.textContent = random;
 totalNumbers.textContent++;
 if(random % 2 === 0){
     return evenNumbers.textContent++
 }else{
     return oddNumbers.textContent++
 }
});


//11. Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón. Al pulsar
//el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe, lo añadirá al
//principio.
const ulLi = document.getElementById("ul2");
const input4 = document.getElementById("input4");
const button6 = document.getElementById("button6");

const myArray = [];
button6.addEventListener("click", function(){
    const num = input4.value;
    if (myArray.includes(num)) {
        alert("error, nº ya insertado");
    } else {
        const li = document.createElement("li");
        ulLi.prepend(li);
        li.textContent = num;
        myArray.push(num);
    }
});


//12.Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. 
//Al hacer click en el botón haremos “toggle” o alternaremos esa clase, es decir, si está presente la quitaremos y si no está, la añadiremos.
const toggleButton = document.getElementById("toggler");

toggleButton.addEventListener("click", function(e){
    e.target.classList.toggle("btn");
})


//Apartado extra: refactorizar Código
const buttons = document.getElementsByClassName("buttons");
Array.from(buttons).forEach(button => {
    button.addEventListener("click", function (e){
        e.target.style.backgroundColor = "red";
    });
});