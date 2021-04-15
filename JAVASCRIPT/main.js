//CREAR EL CONSTRUCTOR DEL USUSARIO CON SUS PROPIEDADES Y MÉTODOS
function User(name, firstName, secondName, email, years, city, productsCount){
    this.name = name;
    this.firstName = firstName;
    this.secondName = secondName;
    this.email = email;
    this.years = years;
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProducts = function(){
        this.productsCount++;
    }
    this.emptyProducts=function(){
        this.productsCount = 0;
    }

}


//RELLENAR EL ARRAY CON VARIOS USUARIOS
const users =[
    new User('Fran', 'Gómez','perez', 'fgm@gmail.com', 35, 'Málaga',0),
    new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid", 0),
    new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete", 0)
];

  
//CREAMOS HTML Y CSS Y ACCEDEMOS DESDE JS A LOS ELEMENTOS NECESARIOS DEL DOM Y GUARDAMOS LAS REFERENCIAS
const select = document.getElementById("select");
const ul = document.getElementById("ul");
const incrementButton = document.getElementById("increment");
const emptyButton = document.getElementById("empty");


//RELLENAMOS EL SELECTOR CON EL NOMBRE DE CADA USUARIO
function updateSelect(){
    users.forEach(user => {
        select.innerHTML +=`<option>${user.name}</option>`;
    })
}
 updateSelect();


//RELLENAMOS LA LISTA CON TODAS LAS PROPIEDADES DE UN USUARIO CUALQUIERA


function fillList(user){
    ul.innerHTML = "";
  
    for (const propertyName in user) {
      const value = user[propertyName]
     
      if (typeof value !== "function"){
        const newListItem = document.createElement("li");
        newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;
        newListItem.classList.add("list-group-item");//añado la clase bootstrap por definición para la tabla
        ul.appendChild(newListItem);
      }
    }
  }
fillList(users[0]);



function processProducts(e){
    const select =users.find(user => user.name === select.value);
    if(e.target === incrementButton){
      select.incrementProducts();
    }else{
      select.emptyProducts();
    }
    fillList(select);
  }

  //SI CAMBIAMOS EN OPCION EN SELECT, SE ACTUALIZA CON SU CORRESPONDIENTE DESCRIPCION
  select.addEventListener("change", e =>{
    const select =users.find(user => user.name === select.value);
    fillList(select);
  });
  
  incrementButton.addEventListener("click", processProducts);
  emptyButton.addEventListener("click", processProducts);
