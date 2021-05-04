
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

//   function input(){
//     movies = movies.filter(movie=>{

//         return movie.title.toUpperCase().includes(movie.target.value.toUpperCase());
       
//        });
//   }

    return (
        <div>
            <input type="text" placeholder="insert movie"></input>
            {
                movies.map((movie)=>{
                    
                    return(
                        
                        <div className="card w-50 h-30 m-auto"class="card1" >
                            <img className="card-img-top h-30" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Card image cap"/>
                            <div className="card-body" >
                                <div >
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <span>{movie.release_date}</span>
                                </div>
                                <div class="button"> 
                                    <button className="btn btn-warning" onClick={()=>handleClick(movie.id)}>More info {movie.id}</button>
                                </div>
                            </div>
                            
                        </div>
                    )
                   
                })
            }
        </div>
    )
};
