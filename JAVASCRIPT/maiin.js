//CREAR UN CONSTRUCTOR DE OBJETO BOOK CON LOS SIGUIENTES ATRIBUTOS:(ID,TITLE,AUTHOR,SALES,PRICE)
function Book (id, title, author, sales, price){
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
};


//RELLENAR UN ARRAY CON 10 LIBROS
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


//PARA CADA ELEMENTO DEL ARRAY, CREAMOS UNA NUEVA FILA EN LA TABLA CON LAS COLUMNAS PARA TODAS
//LAS PROPIEDADES DEL OBJETO, ADEMÁS DE UN BOTÓN PARA PODER ELIMINAR EL LIBRO
const tbody = document.getElementById("booksBody");

function updateTable(){
    tbody.innerHTML = "";
    
    books.forEach(book => {
        tbody.innerHTML += 
        `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td><button class = "btn btn-danger button" id ="${book.id}">Deleted</button></td>
        </tr>`
    })
}

//SI EL BOTÓN DE ELIMINAR ES PULSADO, BORRARÁ EL LIBRO Y ACTUALIZARÁ LA TABLA
tbody.onclick = e => {
    if(e.target.tagName === "BUTTON"){
        books = books.filter(book => book.id != e.target.id)
        updateTable();
    }
   
};

updateTable();


//AÑADIR UN FORMULARIO PARA PODER AÑADIR UN NUEVO LIBRO A MI ARRAY, TRAS HACER SUBMIT, ADEMÁS
//DE AÑADIRLO, DEBERÁ ACTUALIZAR LA TABLA Y VACIAR INPUTS

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

addBookButton.addEventListener("click", e =>{
    e.preventDefault(); //para que no se actualice la pg cada vez que se haga añada un libro en este caso

    const newID = books[books.length -1].id + 1;

    books.push(new Book(
        newID, 
        titleInput.value, 
        authorInput.value, 
        salesInput.value, 
        priceInput.value)
        );

    updateTable();


    addBookButton.parentNode.reset(); //una vez añadido el libro, borra lo escrito en el formulario y lo deja en blanco
});
