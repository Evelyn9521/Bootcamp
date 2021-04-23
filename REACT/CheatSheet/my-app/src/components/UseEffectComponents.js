import {useEffect, useState} from 'react'

export default function UseEffectComponents() {

const [count, setCount] = useState(0)

// console.log("me ejecuto cada vez que cambia el componente")


useEffect(() => {
    console.log("Acabo de montarme")
    
    return()=> console.log("me desmonto")
    
    }, [])

   useEffect(() => {
       document.title = count;
    
       }, [count])
    
    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>setCount(count + 1)}>+</button>
        </div>
    )
}

