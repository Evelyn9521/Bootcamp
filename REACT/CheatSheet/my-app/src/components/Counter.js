import {useState} from 'react'

export default function Counter() {
    // const state = useState(0) //el 0 es el valor inical
    // const count = state[0]
    // const setCount = state[1]

    const[count, setCount]=useState(0); //forma más utilizada
    const handleClick = function(evento){
        // if(count <=9){
        //     setCount(count + 1) otra forma de parar el contador cuando se llega hasta 10
        // }
        count <=9 && setCount(count + 1)
    }
    
    return (
        <div>
            <p>Has echo click {count} veces</p>
            <button onClick={handleClick}>Subir</button>
            <button onClick={()=>count > 0 && setCount(count-1)}>Bajar</button>
            <button onClick={()=>setCount(0)}>Borrar</button>
        </div>
    )
}
