//Importamos el archivo List
import List from "./List"

//Creamos la funcion de Shop y le añadimos el array de objetos con el que queremos trabajar
export default function Shop(){
    const shop = {
        electronics: [
            {id: 27, products: "Televisor", brand: "LG", model: "XP7302", price: 399},
            {id: 28, products: "Equipo Hi-FI", brand: "Samsung", model: "VF235", price: 179},
            {id: 29, products: "Televisor", brand: "Sony", model: "Bravia-173", price: 498},
        ],
        groceries: [
            {id: 30, products: "Galletas", brand: "María", price: 0.90},
            {id: 31, products: "Ensalada", brand: "Imizurra", price: 1.30},
            {id: 32, products: "Patatas", brand: "McKain", price: 0.90},
            {id: 33, products: "Pasta", brand: "Gallo", price: 0.90},
        ],
        pets: [
            {id: 34, products: "Croquetas para gato", brand: "Purina", price: 4.90},
            {id: 35, products: "Arena de gato", brand: "Limpior", price: 1.10},
        ]
    };
    //Accedemos a cada objeto a través de la constante shop con el punto seguido del nombre del objeto
    return(
        <div>
            <List category="electronics" products={shop.electronics}/>
            <List category="groceries" products={shop.groceries} />
            <List category="pets" products={shop.pets}/>
        </div>
    )
}