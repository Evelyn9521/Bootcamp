//Ejercicio 1
const myArray = ['pantalón', 'camisa', 'falda', 'jersey', 'abrigo'];


//Ejercicio 2
const arrayVacio = [];

arrayVacio.push(45, 5, 3);
console.log(arrayVacio);
console.log(`La longitud del array es de ${arrayVacio.length} `);

arrayVacio.shift();
console.log(arrayVacio);
console.log(`la longitud del array es de ${arrayVacio.length}`);

arrayVacio.unshift(85, 9);
console.log(arrayVacio);
console.log(`la longitud del array es de ${arrayVacio.length}`);

//Ejercicio 3
const booleano = (e) => typeof e === 'boolean'
console.log(booleano(8));
console.log(booleano(false));


//Ejercicio 4
const length =  (e) => e.length;

console.log(length('Hola mi nombre es Evelyn'));

//Ejercicio 5
const minToSeg = (e) => e*60;
console.log(minToSeg(5));


//Ejercicio 6
function numPar (e){
    if(e % 2 === 0){
        return e;
    }else{
        return e + 1;
    }
}
console.log(numPar(51));


//Ejercicio 7
function diasVividos (e){
    return e*360
}
console.log(diasVividos(57));


//Ejercicio 8
function array(e){
    return e[e.length - 1];
}
console.log(array([5, 8, 9, 10]));


//Ejercicio 9
function granja(pollos, vacas, cerdos){
    return (pollos*2 + vacas*4 + cerdos*4);
}
console.log(granja(7, 5, 6));


//Ejercicio 10
function equalType(a, b){
    if( typeof a === typeof b){
        return 'mismo tipo'
    }else{
        return 'diferente tipo'
    }

}
console.log(equalType('hola','2'));
console.log(equalType('hola', 2));

//Ejercicio 11
function stringArray(e){
    return e.split(" ");
}
console.log(stringArray('Mi nombre es Evelyn'));


//Ejercicio 12
let addres1 = {
    provincia: 'Cádiz',
    ciudad: 'san roque',
    municipio: 'Taraguilla',
    códigoP: '11356',
}
console.log(addres1);

let addres2 ={
    provincia: 'Málaga',
    ciudad: 'san roque',
    municipio: 'sol',
    códigoP: '11446',
}
console.log(addres2);

//Ejercicio 13
function parseDomain(e){
    const domain = e.split(".")
    const obj = {
        domain:domain[0],
        tld:domain[1]
    }
    return obj;
}
console.log(parseDomain('google.com'));


//Ejercicio 14
function equalvalue(a, b){
    if (a == b && typeof a == typeof b){
        return true
    }else{
        return false;
    }
}
console.log(equalvalue('5', 5));
console.log(equalvalue(5, 5));


//Ejercicio 15
function stringLength(a, b){
    if (a. length === b.length){
        return true;
    }else{
        return false;
    }
}
console.log(stringLength('Hola caracola', 'hola mundo'));
console.log(stringLength('hola', 'hola'));


//Ejercicio 16
function vacia(e){
    if (e === ""){
        return 'La cadena está vacía'
    }else{
        return 'La cadena no está vacia'
    }
}
console.log(vacia('hola me llamo Evelyn'));
console.log(vacia(''));


//Ejercicio 17
//const myArray = ['pantalón', 'camisa', 'falda', 'jersey', 'abrigo'];
let x= 0;
while (x < myArray.length ){
    console.log(`indice ${x}, ${myArray[x]}`);
    x ++;
}
for(let i = 0; i < myArray.length; i ++){
    console.log(`indice ${i}, ${myArray[i]}`);
}

for(i of myArray){
    console.log(i);
}

myArray.forEach((item, index) => console.log(`index ${index}: ${item}`));


//Ejercicio 18
function repeatString (a, b){
    return a.repeat(b);
}
console.log(repeatString('Soy Evelyn ', 2));


//Ejercicio 19
function getVoteCount (object){
    return object.votosP - object.votosN;
}
console.log(getVoteCount({votosP:35, votosN:15}));


//Ejercicio 20
function mixArray(e){
    const arrayy = [];
    for(let i = 0; i< e.length; i++){
        arrayy[i] = typeof e[i]
    }
    return arrayy;
}
console.log(mixArray(['hola', [], {}, null, 2]));


//Ejercicio 21
function parseados(e){
    const arrayy2 = []
    for(let i = 0; i < e.length; i++){
        arrayy2[i] = parseFloat(e[i]);
    }
    return arrayy2;
}
console.log(parseados(['1', '2', '8.5']));


//Ejercicio 22
const flecha = (e) => e >= 0 ? 'positivo':'negativo';
console.log(flecha(8));
console.log(flecha(-5));


//Ejercicio 23
function deletedArray(e, i){
     e.splice(i, 1)
     return e;
}
console.log(deletedArray([4, 2, 3], 2));


//Ejercicio 25
function arrayA (object){
    return Object.keys(object);
}
    console.log(arrayA({pais:'España', nombre: 'Lucia', años:'14'}));

function arrayB(object){
    return Object.values(object);
}
console.log(arrayB({pais:'España', nombre: 'Lucia', años:'14'}));




