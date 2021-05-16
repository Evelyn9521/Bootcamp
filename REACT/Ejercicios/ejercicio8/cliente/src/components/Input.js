import {useState} from "react"

export default function Input({setToDos}) {

    const [newTodo, setNewTodo]= useState("");

    function handleSubmit(e){
        e.preventDefault();
        setToDos(currentTodos=> [{title:newTodo, completede:false}, ...currentTodos])
        setNewTodo("");
    }

    return (
       <form onSubmit={handleSubmit} className="my-4 mx-4">
           <input type="text" 
           placeholder="Introduce un nuevo to-do" 
           className="form-control" 
           onChange={e=>setNewTodo(e.target.value)}
           value={newTodo}
           />
       </form>
    )
}
