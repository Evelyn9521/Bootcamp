

export default function ToDos(props) {
    

    return (
        <div>
            {
                props.lists.map((list)=>{
                    return <ul className="list-group" key={list.title}>
                        <li className="list-group-item">{list.userId}:{list.title} {list.completed} <button className="btn bg-danger float-right" >x</button></li> 
                    </ul>

                })
                
            }
        </div>
    )
}

