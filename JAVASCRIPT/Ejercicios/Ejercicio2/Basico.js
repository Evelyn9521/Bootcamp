//1. Define e inicializa un array con 5 elementos string en una sola línea.

const myArray = ['fútbol', 'padel', 'natación', 'baloncesto', 'surf'];
console.log(myArray);


//2. Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
//completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
//entero por consola utilizando un string template del tipo: `Longitud: ${}`.

const Arraynumber = [25, 50, 75];
console.log(Arraynumber);
console.log(`La longitud del array es, ${Arraynumber.length}`);

Arraynumber.shift();
console.log(Arraynumber);
console.log(`La longitud del array es, ${Arraynumber.length}`);

Arraynumber.unshift(45, 89);
console.log(Arraynumber);
console.log(`La longitud del array es, ${Arraynumber.length}`);


//3. Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
//caso contrario.

function trueFalse (e){
    if (typeof e === 'boolean'){
        return true;
    }else{
        return false;
    }
}
console.log(trueFalse(4));
console.log(trueFalse(false));
       /* funcion de flecha
      const trueFalse = (e)=> typeof e ==='boolean'; */


//4. Escribe una función que devuelva la longitud de un string recibido por argumento.

function stringnumber(e){
    return e.length;
}
console.log('Tiene una longitud de',stringnumber('Hola'),'letras');


//5. Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.

 const changeMinut = (e) => e * 60; 

console.log(changeMinut(5), 'segundos');


//6. Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
//directamente).

function parNumber(e){
    if(e % 2 ==0 ){
        return e;
    }else{
        return e + 1;
    }
}
console.log(parNumber(51));


//7. Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
//obviar los años bisiestos.

function diasVividos(e){
    return e *365;
}
console.log('Esta persona ha vivido',diasVividos(50), 'días');


//8. Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
//de diferentes longitudes.

function array (e){
    return e[e.length - 1];
}
console.log(array([4, 5, 9, 6, 78]));


//9. Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. Ejemplo:

function granja (pollos, vacas, cerdos){
    return (pollos * 2) + (vacas * 4) + (cerdos * 4);
}
console.log('Hay un total de', granja(7, 10, 9), 'patas');


//10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.

function tipoDatos(a, b){
    if (typeof a === typeof b){
        return true;
    }else{
        return false;
    }
}
console.log(tipoDatos(4, 7));
console.log(tipoDatos(4, 'hola'));
/*  operador ternario //function tipoDatos(a, b){
   return (typeof a === typeof b) ? 'true': 'false';
} */


//11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
//palabra de la frase original. Investigar método existente de los strings para este fin.

function fraseArray(e){
    return e.split(" ");
}
console.log(fraseArray('Mi nombre es Evelyn'));


//12. Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
//postal, calle, número, planta, y número de puerta.

let address1 ={
    provincia: 'Cádiz',
    ciudad: 'San Roque',
    municipio: 'Sotogrande',
    codigoPostal: 11313,
    calle:'Calle Sol',
    numero: 4,
    planta: '3º',
    nºPuerta: 14
}
console.log(address1);

let address2 ={
    provincia: 'Málaga',
    ciudad: 'Málaga',
    municipio: 'Luz',
    codigoPostal: 29005,
    calle:'Calle Sol',
    numero: 4,
    planta: '3º',
    nºPuerta: 14
}
console.log(address2);


//13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (top-
//level domain) como, por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que
//reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. Ejemplo:
    function parseDomain(e){
        const domain= e.split(".");
        const objeto={
            domain:domain[0],
            tld: domain[1]
        }
        return objeto;
    }
    console.log(parseDomain('google.com'));


//14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
//dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
//mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:

function strictEquality(a, b){
    if (a == b && typeof a == typeof b){
        return true;
    }else{
        return false;
    }
}
console.log(strictEquality(5, '5'));
console.log(strictEquality(5, 5));


//15. Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso
//contrario.

function strings(a, b){
    if (a.length === b.length){
        return true;
    } else{
        return false;
    }
}
console.log(strings('Hola', 'Hola'));
console.log(strings('Hola', 'Adiós'));


//16. Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

function emptyString(e){
    if (e === ""){
        return true;
    }else{
        return false;
    }
}
console.log(emptyString(""), 'El string está vacío');
console.log(emptyString('Hola'), 'El estring no está vacío');


//17. Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:
//• while/ for/ for of /forEach.

// const myArray = ['fútbol', 'padel', 'natación', 'baloncesto', 'surf'];
// console.log(myArray);

let e = 0;
while (e < myArray.length){
    console.log(`indice ${e}: ${myArray[e]} `);
    e++;
}

for (let e = 0; e <=myArray.length-1; e++){
    console.log(`index ${e}: ${myArray[e]}`);
}

for(let index of myArray){
    console.log(index);
}

myArray.forEach((item, index)=> console.log(`index ${index}: ${item}`));


 //18. Crea una función que reciba un string y un número N y devuelva el string original repetido N veces.

function repeatString(a, b){
    return a.repeat(b);
}
console.log(repeatString('No haré memes sobre el profesor. ', 2));


//19. Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
//la cuenta final.

function getVoteCount(object){
    return object.votosPositivos - object.votosNegativos;
    
}
console.log(`El resultado es: ${getVoteCount({votosPositivos: 80, votosNegativos:15})}`);

//20. Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo
//de cada uno de los elementos.

function mixArray(array){
    const array2 = []
    for (let i = 0; i<array.length; i++){
        array2[i]= typeof array[i];
    }
    return array2;
}
console.log(mixArray(["hola", 2, {}, [], null, undefined]));


//21. Función que dado un array de números con formato string devuelva un array con los números ya
//parseados.

   function Parseados(array){
       const array3=[];
    for (let i = 0; i<array.length; i++){
        array3[i]= parseFloat(array[i]);//puede sustituirse Number por parsefloat y coje tanto los enteros como decimales
    }
    return array3;
   }
   console.log(Parseados(['1.5', '3', '7']));


//22. Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
//igual que cero y “Negativo” en caso contrario. Usa el operador ternario.

const arrow= (e)=> e >= 0 ? 'positivo' : 'negativo';
console.log(arrow(8));


//23. Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.

function myArray4(array, i){
    array.splice(i, 1);
    return array;
}
console.log(myArray4(['patatas', 'huevos', 'aceite'], 1));


//24. Usando la función del apartado anterior, crea otra función que dado un array de números y un número a
//filtrar, devuelva un array borrando todos las apariciones de dicho número.

function deleteNumber(array, num){
    for (let i = array.length - 1; i >= 0; i--){
        if (array[i] === num){
            myArray4(array, i);
        }
    }
    return array;
}
console.log(deleteNumber([2, 3, 3, 3, 5, 5, 7, 9, 7], 3));


//25. Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas sus
//propiedades. La segunda devolverá un array con los valores de dichas propiedades.
//Investigar los métodos keys y values del prototipo de Object.

function functionA(e){
    return Object.keys(e);
}
console.log(functionA({country: 'spain', years: '22', name: 'Jose'}));

function functionB(e){
    return Object.values(e);
}
console.log(functionB({country:'spain', years:'22', name: 'Jose'}));


//26. Crea una función que invierta un string.

function invertir(e) {
    let x = e.length;
    let cadenaInvertida = "";
  
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + e.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }
  console.log(invertir('Hola mi nombre es Evelyn'));


  //27. Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.

function comparation(a, b){
    
    if (a.toLocaleLowerCase() == b.toLocaleLowerCase() && a.toUpperCase() == b.toUpperCase()){
        return true;
    }else{
        return false;
    }
}
console.log(comparation('evelyn', 'EVELYN'));


//28. Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado. El
//apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.







//29. Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.

const value =(logical)=> !logical;
console.log(value(true));
console.log(value(false));