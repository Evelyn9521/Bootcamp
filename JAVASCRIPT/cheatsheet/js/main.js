// ......................uso de js externo..........................
console.log("hola")
function saludo(){
    alert("hola desde un script externo");
    console.log("has echo click");
    }
    document.getElementsByTagName("a").item(2).addEventListener("click", saludo);


//Depuración/loggin/ saber que está pasando o donde está el error..............................................
// alert("mensaje");
console.log("Mensaje");


// .............................Variables................................
//var - function scope
//let/const -block

function saludar(){
    
     console.log("inicial:", contador);
    // comprobar con var y con let y ver diferencias
    for( var contador=0; contador<3; contador++) {
        console.log(contador);
    }
    console.log("final:", contador);
}
saludar();

console.clear();/*  limpia la consola */


// inicialización
let day;
day=5;

let monthname="october";

let hour, minute, second;

let array=[15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2, var3]=[15, 20, 25]; /* avanzada */
console.log(var1, var2, var3);

//const - block scope
const x=1;
//const y: error: missing= in const. no puede definirla
// x=2; error: invalid assigment to const 'x'

console.clear();


//.......................TIPOS DE DATOS..................................
// datos primitivos
let str = String("I'm a string");
let str2 = "i'm another string"; //recomendado
console.log(typeof str, typeof str2, typeof "");
//let str = "string" ES IGUAL A "string"

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3,  typeof"5");

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof"true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null; // limpiar una variable
console.log(selectedColor, typeof selectedColor);

// datos objetos
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021-05-12"));
console.log(typeof new Error("mensaje de error"));


console.clear();
//................string.............
str="Hola futuro";
console.log(str, str.length); //nos indica el tamaño que ocupa str en ese caso hola futuro
console.log(str.indexOf("futuro")); //nos indica cuanto espacio debe pasar hasta que llega a la letra futuro si no aparece la letra devuelve un -1
console.log(str.lastIndexOf("u")); //nos indica la ultima vez que aparece la letra u en este caso


console.log(str.substring(1, 3));

console.log("Hola mundo".concat(". Adión mundo.")); //une dos string
console.log("Hola mundo." + " Adiós mundo."); //une dos string
str= str + ". Adiós Mundo"; // uno dos string y los guarda en una variable
str+= ". Adiós Mundo.";// une dos string y los guarda en una variable. forma mas corta.
console.log(str);

console.log(str.replace("Mundo", "futuro")); //reemplaza una palabra por otra
console.log(str.replaceAll("Mundo", "futuro"));
console.log(str.toLowerCase()); // reemplaza a minusculas
console.log(str.toUpperCase());//reemplaza a mayusculas

console.log(`EL dia de mi cumpleaños es ${day}`); //string template
console.log("el dia de mi cumpleaños es", day, ".");


//Parsing, cambia el tipo a un dato.....
let number= Number("rejker"); //NaN= not a number. no genera error.
console.log(number, typeof number);

number= Number("1000"); 
console.log(number, typeof number);

number +="1000";//Entiende que es una concatenación, no una suma
console.log(number, typeof number);

console.log("1" + 1, "1" - 1); // suma los string y resta los numeros que no son string


//.........Objects..............

let person={
    name:"John",
    age:30,
    blonde:false,
    walk:function(){
        console.log("HEY!! estoy andando");

    },// llama a una funcion. pre-ECMAS6
    jump() {
        console.log("HEY! Estoy saltando");
    }//llama a una funcion ECMAS 6
}
//se conoce por acceso por punto / dot notation
console.log(person);
console.log(`se llama ${person.name} y tiene ${person.age} años`);

person.name="jane"
console.log(person); //no es obligatorio volverlo a poner.
console.log(`se llama ${person.name} y tiene ${person.age} años`);

//se conoce por acceso por corchetes /Brackets notation
let propertyName = "age"
console.log(person[propertyName]); //puedo cambiarla por cualquier propiedad definida anteriormente

//Ampliación
person.children =["Marta", "peter"];//añade otra propiedad a la variable definida anteriormente
console.log(person);
console.log(person.children[0], person.children[1]);


person.jump(); //estoy llamando a la función jump
person.walk();//estoy llamando a la funcion walk


console.log(typeof{}, typeof[], typeof("")); // objeto, objeto, string


//This //hace referencia a si mismo
const person2 = {
    name: "Thomas",
    talk(){
        console.log(this); //hace referencia person2 en este caso, reemplaza la variable
        console.log(`me llamo ${this.name}`)
    }

}

const person3 = {
    name: "Sarah",
    talk(){ //talk es una función
        console.log(this); //hace referencia person3 en este caso, reemplaza la variable
        console.log(`me llamo ${this.name}`)
    }

}
person2.talk();
person3.talk();


console.clear();
//......................ARRAYS..................
let selectedColors = ["red", "blue",]; //array de string
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = "green";// si no existe lo crea,  añadimos otro array 
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "white"); // Con push se añade otro array directamente si no sabemos cuantos elementos hay.
console.log(selectedColors, selectedColors.length);

selectedColors.pop();
console.log(selectedColors, selectedColors.length); //con pop se elimina el ultimo elemento del array en este caso white

selectedColors.unshift("white");
console.log(selectedColors, selectedColors.length);// unshift añade elemento al principio del array, es decir el primero elemento en aparecer.

selectedColors.shift();
console.log(selectedColors, selectedColors.length); // shift elimina el primer elemento que parece en el array, en este caso el white

selectedColors.sort();  // ordena alfabeticamente.
console.log(selectedColors, selectedColors.length);

console.log(selectedColors.indexOf("red"));// me busca el elemento que yo le diga y me devuelve el indice de ese elemento
console.log(selectedColors[selectedColors.indexOf("red")+1]); // me busca el elemento que va seguido de red, en este caso violet

console.log(selectedColors.slice(1, 3)); // coge los elementos del 1 al 3, el 3 en este caso no lo incluye
console.log(selectedColors);

console.log(selectedColors.splice(1, 3)); // elimina los elementos a partir del  1 al 3
console.log(selectedColors);


//Ejercicio....Crea un objeto niño que tenga las propiedades nombre, altura género y amigoS. 
//Amigos estará directamente vacio y lo añadiremos posteriormente 3 elementos con los nombres.
//Desoués , añadiremos uno extra al inicio.

let niño = {
    nombre: "Lucas",
    altura: 1.74,
    género: "masculino",
    amigoS: [],
    loseFriend() {    
        this.niño.amigoS.pop();

    }

}
console.log(niño);
niño.amigoS.push("Lucas", "Mario", "Juan");

console.log(niño);
niño.amigoS.unshift("Maria");

niño.loseFriend();



console.clear();

// ..........................CONDICIONALES..............................
const randomNumber = 9;
const guessedNumber = "5";

if(typeof randomNumber !== typeof guessedNumber){
    console.log("tienes que introducir el mismo tipo");
}





/*if (randomNumber === guessedNumber) {
    console.log("has acertado el número");

} else if(randomNumber > guessedNumber){
    console.log("el numero secreto es mayor");

}else {
    console.log("el numero secreto es menor");
}*/

