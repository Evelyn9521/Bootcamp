
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

//Data
const users =[
  new User('Fran', 'Gómez','perez', 'fgm@gmail.com', 35, 'Málaga',0),
  new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid", 0),
  new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete", 0)
];

//Selectors
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

//Rellenar select con opciones
for(let user of users){
    const newOption = document.createElement('option');
    newOption.textContent = user.name;
    select.appendChild(newOption);
}
/* users.forEach(item => {
  const newOption = document.createElement('option');
    newOption.textContent = user.name;
    select.appendChild(newOption);
}) */


//Rellenar la lista con la info de un usuario
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

//Estado inicial 
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


//Añadir listener
select.addEventListener("change", e =>{
  const selectedUser =users.find(user => user.name === select.value);
  fillList(selectedUser);
});

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);

