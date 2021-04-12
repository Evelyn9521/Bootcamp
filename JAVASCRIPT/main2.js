//CREAMOS EL CONSTRUCTOR 
function User(name, firstLastName, secondLastName, email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProducts = function(){
        this.productsCount ++;
    }
    this.emptyProducts = function(){
        this.productsCount = 0;
    }
}

//RELLENAMOS EL ARRAY CON VARIOS USUARIOS Y MÉTODOS
const users = [
    new User('Juan', 'Sánchez', 'Gómez', 'js@mail.com', 22, 'Málaga', 0),
    new User('Maria', 'Cruz', 'Gómez', 'js@mail.com', 40, 'Málaga', 0),
    new User('Lucas', 'Gutierrez', 'Luz', 'js@mail.com', 54, 'Málaga', 0),
];

//ACCEDEMOS A LOS ELEMENTOS DEL DOM
const userSelect = document.getElementById("userSelect");
const userInfo = document.getElementById("userInfo");
const incrementButton = document.getElementById("incrementButton");
const emptyButton = document.getElementById("emptyButton");

//RELLENAMOS EL SELECTOR CON EL NOMBRE DE CADA USUARIO
for(let user of users){
    const option = document.createElement("option");//creo opciones porque son mas de un nombre
    option.textContent = user.name;//cada contenido de la opción, me devuelva el nombre del usuario
    userSelect.appendChild(option);
};

//RELLENAMOS LA LISTA CON TODAS LAS PROPIEDADES DE UN USUARIO CUALQUIERA
function fillList(user){
    userInfo.innerHTML = "";//ponemos la lista vacia
  
    for (const propertyName in user) {
      const value = user[propertyName]
     
      if (typeof value !== "function"){
        const newListItem = document.createElement("li"); //creamos las listas
        newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;//añadimos la propiedad con su valor, es decir cada usuario completo
        newListItem.classList.add("list-group-item");
        userInfo.appendChild(newListItem);
      }
    }
  }

  fillList(users[0]);//ESTADO INCIAL

function processProducts(e){
  const userSelect =users.find(user => user.name === userSelect.value);
  if(e.target === incrementButton){
    userSelect.incrementProducts();
  }else{
    userSelect.emptyProducts();
  }
  fillList(userSelect);
}

select.addEventListener("change", e =>{
    const userSelect =users.find(user => user.name === userSelect.value);
    fillList(userSelect);
  });
  
  incrementButton.addEventListener("click", processProducts);
  emptyButton.addEventListener("click", processProducts);