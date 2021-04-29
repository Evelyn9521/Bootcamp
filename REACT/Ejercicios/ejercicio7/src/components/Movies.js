
// import {useHistory} from "react-router-dom";
// import {useState} from "react"



export default function Movies({movies}) {

    // const [details, setDetails] = useState(1)
    // const history = useHistory();

    // function handleClick(){
    //     history.push(`/DetailsMovies/${details}`);
    // }

    return (
        <div>
            {
                movies.map((movie)=>{
                    
                    return(
                        <div className="card w-50 m-auto" >
                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <span>{movie.release_date}</span>
                           
            
                        </div>
                        <button className="btn btn-warning">More info</button>
                    </div>
                    )
                   
                })
            }
        </div>
    )
};
