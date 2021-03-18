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
let str = String("I'm a string");
let str2 = "i'm another string"; //recomendado
console.log(typeof str, typeof str2, typeof "");
//let str = "string" ES IGUAL A "string"


let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3,  typeof"5");