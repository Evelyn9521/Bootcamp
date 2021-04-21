import { Fragment } from "react";
import PropTypes from "prop-types"

export default function FirstComponents(props) { //los prop se reciben siempre por el argumento de la función y se envía como objeto
//   console.log(props, typeof props);
//   console.log(props.title);

//   const myFunction = function(book.ID){ //con esta funcion puedo eliminar un libro pinchando el boton. del ejercicio 4 
//       return evento => books = books.filter(book=>book.id != book.ID)
//   }
    return (
        <Fragment> 
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus quo mollitia officia, totam perspiciatis esse quae quas necessitatibus tenetur qui ipsum hic accusantium.</p>
            {/* <button onClick={myFunction(5)}>Click</button> */}
       </Fragment>
    )
}

//si no asigno una propiedad a props, se asigna por defecto el nombre que tengamos puesto
FirstComponents.defaultProps = {
    // title: "Sin título",
    date: "sin fecha",
    products: []
}

//muestra el tipo que es, si es array, string, booleano, etc
FirstComponents.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    products: PropTypes.array
}


/* pongo el fragment pero tengo que importarlo arriba entre llaves */



//export default FirstComponents// alternativa
//SOLO SE PUEDE UN EXPORT DEFAULT POR ARCHIVO


function SecondComponent(){
    return(
        <>
            <h1>soy otro componente</h1>
        </>
    )
}
/*  puedo quitar el div y el fragment, y solo ponerlo vacío la más sencilla */

function ThirdComponent(){
    return(
        <div> 
            <h1>soy otro componente más</h1>
        </div>
    )
}
/* pongo el div y no tengo que importar nada */


//otra forma de importar componentes
export{SecondComponent, ThirdComponent}