

export default function ToDos({lists, setToDos}) {
    
    function deleteTodos(index) {
        setToDos(lists.filter((list, i) => i !== index))
   };

    return (
        <div>
            {
                lists.map((list, index)=>{
                    return <ul className="list-group" key={list.title}>
                        <li className="list-group-item">{list.userId}:{list.title} {list.completed} <button className="btn bg-danger float-right" onClick={() => deleteTodos(index)}>x</button></li> 
                    </ul>

                })
                
            }
        </div>
    )
}

