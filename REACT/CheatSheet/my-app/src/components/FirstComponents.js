import { Fragment } from "react";

export default function FirstComponents(props) { //los prop se reciben siempre por el argumento de la función y se envía como objeto
  console.log(props, typeof props);
  console.log(props.title);

    return (
        <Fragment> 
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus quo mollitia officia, totam perspiciatis esse quae quas necessitatibus tenetur qui ipsum hic accusantium.</p>
        </Fragment>
    )
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