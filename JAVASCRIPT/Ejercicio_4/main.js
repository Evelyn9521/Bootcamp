//CREAR UN CONSTRUCTOR DE OBJETO
function Book(ID, title, author, sales, price){
    this.ID = ID
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price
};

//RELLENAR EL ARRAY CON 10 LIBROS
let books = [
    new Book(1, 'Independencia', 'Javier Cercas', 200, 28),
    new Book(2, 'Arquitania', 'Juan del Val', 100, 17),
    new Book(3, 'La Ciudad del Vapor', 'Carlos Ruiz', 200, 13),
    new Book(4, 'Patria', 'Fernándo Aramburu', 740, 28),
    new Book(5, 'La buena cocina', 'Karlos Arguiñano', 980, 19),
    new Book(6, 'EL dominio Mental', 'Pedro Baños', 780, 33),
    new Book(7, 'Invierte en tí', 'Natalia de Santiago', 280, 24),
    new Book(8, 'Transbordo en Moscú', 'Eduardo Mendoza', 200, 16),
    new Book(9, 'EL bosque encantado', 'Javier Gomez', 500, 30),
    new Book(10, 'La suerte de mi vida', 'Patricia Lozano', 300, 14),
];

//Selectores
const booksTbody = document.getElementById("books-body");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");


// Para cada elemento del array, tendremos que crear una nueva fila en la tabla 
//con las columnas para todas las propiedades del objeto además de un botón 
//para poder eliminar el libro.Se aconseja la creación de una función para actualizar la tabla (o el tbody) desde cero


function updateTable(){

    booksTbody.innerHTML = ""; //limpiamos la tabla, para que esté vacía desde un principio
    
    //Generamos de nuevo todas las filas
    books.forEach(book => {
        //concatenamos todos los tr de la tabla con el +=
        booksTbody.innerHTML +=
        `<tr>
            <td>${book.ID} </td>
            <td>${book.title} </td>
            <td>${book.author} </td>
            <td>${book.sales} </td>
            <td>${book.price} </td>
            <td>
            <button class = "btn btn-danger" id ="${book.ID}">Remove</button>
            </td>
        </tr>`;
    });
}

booksTbody.onclick = e => {
    if (e.target.tagName === "BUTTON"){
        
        books = books.filter(book => book.ID != e.target.id);
        updateTable();
    }
};

//Llamamos a la función para que aparezca la tabla en la pantalla
updateTable();


//AÑADIR UN NUEVO LIBRO
addBookButton.addEventListener("click", e =>{
    e.preventDefault(); //para que no se actualice la pg cada vez que se haga un cambio

    const newID = books[books.length -1].ID + 1;

    books.push(new Book(
        newID, 
        titleInput.value, 
        authorInput.value, 
        salesInput.value, 
        priceInput.value)
        );

    updateTable();

    // titleInput.value= ""; 
    // authorInput.value= ""; 
    // salesInput.value= ""; 
    // priceInput.value= "";        

    addBookButton.parentNode.removeEventListener();
});
