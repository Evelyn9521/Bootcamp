//CREAMOS EL CONSTRUCTOR DEL USUARIO CON SUS PROPIEDADES Y MÉTODOS
//el this se usa siempre acompañando la propiedad en caso del constructor
function User(name, firstLastName, secondLastName, email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProducts = function () {
    this.productsCount++;
    };
    this.emptyProducts = function () {
    this.productsCount = 0;
    }
 }

 

//RELLENAMOS EL ARRAY CON VARIOS USUARIOS
//se utiliza siempre el new cuando trabajamos con un constructor en este caso User
const users =[
  new User('Fran', 'Gómez','perez', 'fgm@gmail.com', 35, 'Málaga',0),
  new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid", 0),
  new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete", 0)
];


//CREAMOS EL HTML Y CSS NECESARIOS Y ACCEDEMOS DESDE JS A LOS ELEMENTOS NECESARIOS DEL DOM
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");


//RELLENAMOS EL SELECTOR CON EL NOMBRE DE CADA USUARIO
for(let user of users){
    const newOption = document.createElement('option');
    newOption.textContent = user.name;
    select.appendChild(newOption);
}

//RELLENAMOS LA LISTA CON TODAS LAS PROPIEDADES DE UN USUARIO CUALQUIERA
function fillList(user){
  list.innerHTML = "";

  for (const propertyName in user) {
    const value = user[propertyName]
   
    if (typeof value !== "function"){
      const newListItem = document.createElement("li");
      newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;
      newListItem.classList.add("list-group-item");
      list.appendChild(newListItem);
    }
  }
}
fillList(users[0]);




function processProducts(e){
  const selectedUser =users.find(user => user.name === select.value);
  if(e.target === incrementButton){
    selectedUser.incrementProducts();
  }else{
    selectedUser.emptyProducts();
  }
  fillList(selectedUser);
}


//AÑADIMOS LISTENERS
select.addEventListener("change", e =>{
  const selectedUser =users.find(user => user.name === select.value);
  fillList(selectedUser);
});

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);

