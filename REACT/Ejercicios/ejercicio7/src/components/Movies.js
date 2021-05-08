
import {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import "./app.css"

export default function Movies() {
   
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const API_URL="https://api.themoviedb.org/3/movie/upcoming?api_key=ae2053d3584c218a1a0d86d55581795f"
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  const history = useHistory();

  function handleClick(movie_id){
      history.push(`/details/${movie_id}`)
  }

    return (
        
        <div className="container ">
            <input className="mb-5" type="text" placeholder="insert movie"></input>
            {
                movies.map((movie)=>{
                    
                    return(
                        
                        <div className="card w-50 h-30 m-auto" className="card1 container"  >
                             <img className="card-img-top img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Card image cap"/> 
                            <div className="card-body"  >
                                <div className="text">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <span>{movie.release_date}</span>
                                </div>
                                <div class="button"> 
                                    <button className="btn btn-success" onClick={()=>handleClick(movie.id)}>More info {movie.id}</button>
                                </div>
                            </div>
                            
                        </div>
                    )
                   
                })
            }
        </div>
    )
};
