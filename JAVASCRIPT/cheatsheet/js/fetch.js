const URL = 'https://jsonplaceholder.typicode.com/users'


const printNames = array => array.forEach(user => console.log(user.name));
const printCities = array => array.forEach(user => console.log(user.address.city));
const printLats = array => array.forEach(user => console.log(user.address.geo.lat));

//fetch devuelve una promesa
//json devuelve otra promesa, una segunda y última vez
fetch(URL)
    .then(response => {
        if(response.ok){// el ok devuelve verdadero o falso
            return response.json();
        }
        throw Error('Hay algún problema con la respuesta:' + response.statusText);
    })
     
    .then(data => { //devuelve los datos que queremos pasar
        printNames(data);
        printCities(data);
        printLats(data);
}).catch(error =>console.log(error)); //captura errores en un punto anterior


//Async - await - alternativa a then.
//el await no se ejecuta hasta que no se solucione el problema
async function requestURL (URL){
    const response = await fetch(URL);
    const data = await response.json()
}
requestURL(URL);


//PETICION CON METODO HTTP POST EN LUGAR DE GET

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi título",
    body: "mi cuerpo de publicación"
}

const http = {
    method: "POST",
    headers:{
        "Contet-type": "application/json"
    },
    body: JSON.stringify(newPost)
};



fetch(POST_URL, http)
.then(response => response.json())
.then(data =>console.log(data))