import "./Todo.css"; //importo el documento css

export default function ToDos({lists, setToDos}) {
    
    function toggleCompleted(e, index){
        if(e.target.tagName !=="BUTTON"){
        const newTodos=[...lists];
        newTodos[index].completed = !newTodos[index].completed;
        setToDos(newTodos);
        }
    }

    function deleteTodos(index) {
        setToDos(lists.filter((list, i) => i !== index))
   };

    return (
        <div>
            {
                lists.map((list, index)=>{
                    const className=`list-group-items ${list.completed ? "completed": ""}`
                    return <ul className="list-group" key={list.title}>
                        <li className={className} onClick={(e)=>toggleCompleted(e, index)}>{index}:{list.title}
                        <button className="btn bg-danger float-right" onClick={() => deleteTodos(index)}>x</button></li> 
                    </ul>
                })
            }
        </div>
    )
}

