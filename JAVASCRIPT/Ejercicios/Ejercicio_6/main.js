//HACER UNA PETICIÓN A LA API DE https://jsonplaceholder.typicode.com/users
//CON EL ARRAY QUE NOS LLEGUE, IREMOS RELLENANDO NUESTRA UL CON <li> CON LOS 
//PRIMEROS 20 ELEMENTOS.


const URL = "https://jsonplaceholder.typicode.com/comments";


const ul = document.getElementById("ul");

function fillList(array){
    array.slice(0,20).forEach(element =>{
        ul.innerHTML +=`<li>${element.name}</li>`;
    });
}


const URLNEW = "https://jsonplaceholder.typicode.com/posts"; //cada vez que llame una nueva URL, tengo que hacer un nuevo fetch

 const div = document.getElementById("div");

 function title(array){
    array.slice(0,20).forEach(element =>{
        div.innerHTML +=`<h2>${element.title}</h2> <p>${element.body}</p>`

    });
}


fetch(URL)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw Error('Hay algún problema con la respuesta:' + response.statusText);
    })
     
    .then(data => { 
       fillList(data)
       
})
.catch(error =>console.log(error));


fetch(URLNEW)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw Error('Hay algún problema con la respuesta:' + response.statusText);
    })
     
    .then(data => { 
      title(data);
    })
.catch(error =>console.log(error));


//funcion que reicba un array, un tamaño de pg y a partir de ese array que te de los elementos que necesitas

