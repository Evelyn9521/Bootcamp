// //HACER UNA PETICIÓN GET A LA API DE https://jsonplaceholder.typicode.com/users
// //CON EL ARRAY QUE NOS LLEGUE, IREMOS RELLENANDO NUESTRA UL CON <li> CON LOS 
// //PRIMEROS 20 ELEMENTOS.


// const URL = "https://jsonplaceholder.typicode.com/comments";


// const ul = document.getElementById("ul");

// function fillList(array){
//     array.slice(0,20).forEach(element =>{
//         ul.innerHTML +=`<li>${element.name}</li>`;
//     });
// }


// const URLNEW = "https://jsonplaceholder.typicode.com/posts"; //cada vez que llame una nueva URL, tengo que hacer un nuevo fetch

//  const div = document.getElementById("div");

//  function title(array){
//     array.slice(0,20).forEach(element =>{
//         div.innerHTML +=`<h2>${element.title}</h2> <p>${element.body}</p>`

//     });
// }


// fetch(URL)
//     .then(response => {
//         if(response.ok){
//             return response.json();
//         }
//         throw Error('Hay algún problema con la respuesta:' + response.statusText);
//     })
     
//     .then(data => { 
//        fillList(data)
       
// })
// .catch(error =>console.log(error));


// fetch(URLNEW)
//     .then(response => {
//         if(response.ok){
//             return response.json();
//         }
//         throw Error('Hay algún problema con la respuesta:' + response.statusText);
//     })
     
//     .then(data => { 
//       title(data);
//     })
// .catch(error =>console.log(error));


// //funcion que reicba un array, un tamaño de pg y a partir de ese array que te de los elementos que necesitas



//6.1 Post - Paginación del lado del cliente
//Constantes
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

//Variables
let posts = [];
let currentPage = 1;

//Selectores
const postDiv =document.querySelector("#posts")
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));


//Utilidades
function fillDiv(){
const newPagePosts = paginate(posts, PAGE_SIZE, currentPage)

    postDiv.innerHTML="";
    newPagePosts.forEach(post =>postDiv.innerHTML +=`<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`)
}

function changePage(event){
    if(event.target.className === "previousPage" && currentPage > 1){
        currentPage--;
    }else if(event.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE){
        currentPage++;
    }
       
    fillDiv();
}


//https://stackoverflow.com/questions/42761068/paginate-javascript-array
function paginate(array, page_size, page_number) {

    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  
 


fetch(POST_URL)
.then(responde => responde.json())
.then(data => {
    posts = [...data];
    fillDiv();
});


//6.2 - Login y paginación desde el servidor
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

//Selectors
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
document.querySelector("#loginButton").addEventListener("click", login);

function login(event){
    event.preventDefault();

    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };

    const config ={
        method: "POST",
        headers :{"Content-Type" : "application/json"},
        body: JSON.stringify(userInfo)
    };
    fetch(LOGIN_URL, config)
    .then(response => response.json())
    .then(data => data.error ? alert(data.error):fetchAllUsers())

}

async function fetchAllUsers(){
   
    let response = await fetch(USERS_URL);
    const data = await response.json();
    
    let users = [];

    for(let page = 1; page <=data.total_pages; page++){
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data);// users = [...users, ...newData.data]
    }
    usersList.innerHTML="";
   users.forEach(user => document.querySelector("#usersList").innerHTML +=`<li>${user.email}</li>`);
}

//ALternativa para recuperar todas las paginas de una api utilizando el .then()

//let users =[];

// function fetchAllUsersV2(URL){
// fetch(URL)
// .then(response => response.json())
// .then(newData =>{
//     users = users.concat(newData.data);
//     if(newData.page < newData.total_pages){
//         fetchAllUsersV2(`${USERS_URL}?page=${newData.page + 1}`)
//     }else{
//         usersList.innerHTML="";
//         users.forEach(user => document.querySelector("#usersList").innerHTML +=`<li>${user.email}</li>`);
//     }
// });
// }