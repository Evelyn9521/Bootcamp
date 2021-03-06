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


// .............................VARIABLES................................
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
    },//llama a una funcion ECMAS 6
    presentarse(){
        console.log(`me llamo ${this.name}, tengo ${this.age} años y ${this.blonde ? "soy rubio":"soy moreno"}`); //TERNARY OPERATOR
    }
}
person.presentarse();



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


//How to copy an object
let obj1 = {property:5};
let obj2 = obj1; //no es una copia, es el mismo objeto con dos nombres

obj2 ={...obj1};//copia superficial que usaremos practicamente siempre
obj2 = JSON.parse/(JSON.stringify(obj1)); //copia profunda o total.


//Object Constructor using functions
function Car(brand, color, weight, topSpeed){
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function(){
        return `this ${this.color} ${this.brand} weigth ${this.weight} kilos and can reach up to ${this.topSpeed} kms/h`
    }
}
    const car1 = new Car('Mercedes', 'red', 1000, 200);
    const car2 = new Car('volvo', 'white', 2000, 300 );
    const car3 = new Car('Audi', 'blue', 1500, 175);

    console.log(car1, car2, car3);
    console.log(car2.weight); 
    console.log(car3.getDescription());




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
    amigos: [],
    loseFriend() {    
        this.amigos.pop();
    }
}

console.log(niño);
niño.amigos.push("Lucas", "Mario", "Juan");

console.log(niño);
niño.amigos.unshift("Maria");

niño.loseFriend();



console.clear();

// ..........................CONDICIONALES..............................
const randomNumber = 9;
const guessedNumber = "5";

if(typeof randomNumber !== typeof guessedNumber){
    console.log("tienes que introducir el mismo tipo");
}

if (randomNumber === guessedNumber) {
    console.log("has acertado el número");

} else if(randomNumber > guessedNumber){
    console.log("el numero secreto es mayor");

}else {
    console.log("el numero secreto es menor");
}

//Ternary operator 

let variable = 12 < 10 ? "el primero es menor" : " el primero es mayor";
console.log(variable);

//switch
let option = 3;
switch (option) {
    case 1: //bloque de código para valor
        console.log("option vale 1");
        break; //si no ponemos el break, no se ejecuta nada.
    case 2:
        console.log("option vale 2");
        break;
    case 3:
        console.log("option vale 3");
        break;
    default: //"de otro modo" p-seint
        console.log("otra opcion");
        break;
}



console.clear();
// .....................FUNCIONES....................
// Funciones Nombradas
function greet(name, lastName){
    return `hola ${name} ${lastName}. que tal?`;
   
}

console.log(greet("Marcos", "Aurelio"));

//funcion que devuelva el cuadrado de un número
function cuadrado(number){
     return number * number;
}
console.log(cuadrado(5)); //console.log siempre fuera de las funciones.

//Funciones Anónimas
let numbersArray = [5, 51, 1, 15, 9];
console.log(numbersArray);
numbersArray.sort(); //me lo ordena segun ASCII
console.log(numbersArray);


// function orderNumbers(a, b){
//      if (a < b){
//          return -1;
//     }else if (a === b) {
//         return 0;
//     }else {
//         return 1;
//     }
// }

// numbersArray.sort(orderNumbers); ambos casos hacen lo mismo, este y el siguiente
numbersArray.sort(function(a, b) {return a - b });
console.log(numbersArray);


console.clear();


//Funciones de flecha / Arrow functions
let perimeterOfSquare = function (side) { // Función anónima normal
    return side * 4;
    }
    perimeterOfSquare = function (side) {return side * 4;} // (opcional) Una única línea
    perimeterOfSquare = (side) => {return side * 4;} // Sustituyo function por la flecha después de params.
    perimeterOfSquare = (side) => side * 4; // Si sólo quiero devolver algo, quito llaves y return.
    perimeterOfSquare = side => side * 4; // Si sólo tiene 1 param, puedo quitar paréntesis.
    
    console.log(perimeterOfSquare(5));

// console.log(typeof function () {});
// console.log(typeof (() => {}));

//Ejercicio. Transformar funcion anonima en funcion de flechas
numbersArray.sort(function(a, b) {return a - b });
numbersArray.sort((a, b) => a - b);

//Ejercicio . Funcion flecha con el cuadrado de un nº
let squareV2 = number => number*number;
console.log(squareV2(5));


console.clear();
//................//  Higher orther Functions...................
//MAP...sobreescribe a otra funcion y se cambia a lo que le mande

// let arr1 = [1, 2, 3];
// let arr2 =[];

// for(let num of arr1){
//     arr2.push(num*2);
// }

// console.log(arr1, arr2);

arr1 = [1, 2, 3]
arr2 = arr1.map(num => num*2);

console.log("Resultado con Map:", arr1, arr2);

// A partir de un array con años de nacimiento, calcular edades
const birthYears = [1980, 1990, 1975, 1970];
const years =birthYears.map(num =>2021 - num);
console.log(birthYears, years);


//FILTER....coge los numeros filtrados mayores de 50 en este caso
// const prices =[150, 50, 49, 51, 15, 237];
// const expensives =[];

// for(let price of prices){
//     if (price >= 50){
//         expensives.push(price);
//     }
// }
const prices =[150, 50, 49, 51, 15, 237];
const expensives = prices.filter(num=> num>50);
console.log(prices, expensives);

//filter por objeto
const cars =[
    {
        brand: 'BMW',
        year:1999,
        plateNumber:'HY35467'
    },
    {
        brand: 'Audi',
        year:1959,
        plateNumber:'HY35467'
    },
    {
        brand: 'Nissan',
        year:2010,
        plateNumber:'HY35467'
    },
];
console.log(cars.filter(car =>car.year >2008));



console.log(cars.map(car =>car.brand));



//SORT..ordena en este caso de menos a mayor
cars.sort((car1, car2)=> car1.year - car2.year);
console.log(cars);



//REDUCE... va acumulando datos

const arr = [10, 7, 13, 20];
console.log(arr.reduce((sum, currentNumber) => sum + currentNumber));






//......................... FOR.....................

for (let i = 0; i <= 10; i++) {
    console.log(`Indice: ${i}`);
    
}

//definir y rellenar un array con el indice i
const arrayX=[];
for (let i = 0; i <= 10; i++) {
    arrayX.push(i);
}
console.log(arrayX);


//......................WHILE.......................
let contador = 0;
while(contador <= 10){
    console.log(contador);
    contador++;
}

//.....................FOR EACH.......................pertecene al tipo de dato array
console.log(numbersArray);

numbersArray.forEach(function(item, index){
    console.log(`Indice ${index}: ${item}`);
});

//for each con arrow functions
numbersArray.forEach((item, index) => console.log(`Indice ${index}: ${item}`));

//añadir los valores del array numbersArray a otherArray 
let otherArray = [];

numbersArray.forEach(item => otherArray.push(item));
console.log(otherArray);


//.....................FOR OF................. se usa para arrays y cualquier iterable como el string
for(let item of numbersArray){
    console.log(item);
}


//Continue
for (let i = 0; i < 5; i++){
    if( i === 3 || i ===2){ // con el continue salta a la siguiente iteración
        continue;
    }
    console.log("using continue", i);
}
//Break
let i = 0;
let k;
mainLoop: while(true){
    console.log("outer loop", i);
    i++;
    k = 1;
    while(true){
        console.log("Inner loop", k);
        k++;
        if(i === 5 && k ===5){
            break mainLoop;
        } else if(k === 5){
            break;
        }
    }
}


