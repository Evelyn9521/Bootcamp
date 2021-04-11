//CREAR UN CONSTRUCTOR DE OBJETO
function Book(title, author, sales, price){
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price
};

//RELLENAR EL ARRAY CON 10 LIBROS
const books = [
    new Book('Independencia', 'Javier Cercas', 200, 28),
    new Book('Arquitania', 'Juan del Val', 100, 17),
    new Book('La Ciudad del Vapor', 'Carlos Ruiz', 200, 13),
    new Book('Patria', 'Fernándo Aramburu', 740, 28),
    new Book('La buena cocina', 'Karlos Arguiñano', 980, 19),
    new Book('EL dominio Mental', 'Pedro Baños', 780, 33),
    new Book('Invierte en tí', 'Natalia de Santiago', 280, 24),
    new Book('Transbordo en Moscú', 'Eduardo Mendoza', 200, 16),
    new Book('EL bosque encantado', 'Javier Gomez', 500, 30),
    new Book('La suerte de mi vida', 'Patricia Lozano', 300, 14),
];

// Para cada elemento del array, tendremos que crear una nueva fila en la tabla 
//con las columnas para todas las propiedades del objeto además de un botón 
//para poder eliminar el libro.Se aconseja la creación de una función para actualizar la tabla (o el tbody) desde cero
