
//(rfc) para que salga la función
//Aquí imprimimos lo que queremos ver por pantalla, en este caso la lista completa a través de map
//le pasamos la props element de la función seguida del punto, más products.
//En el segundo return creamos la lista a traves del nombre usado como elemento en la función de map (en este caso product)
// y accedemos a cada propiedad con el nombre correspondiente.
//
export default function List(props) {
  return(
     <div>
         <h3>{props.category}</h3>
         <ul>
             {
                 props.products.map(product =>{
                     return <li key={product.id}>{product.products} {product.brand} {product.model} {product.price}</li>
                           
                 })
             }
         </ul>
     </div>
  )
}
//key se pone siempre en la primera etiqueta que aparezca 
