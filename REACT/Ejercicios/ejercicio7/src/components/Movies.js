
// import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Movies() {
   
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=ae2053d3584c218a1a0d86d55581795f")
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

    return (
        <div>
            {
                movies.map((movie)=>{
                    
                    return(
                        <div className="card w-50 m-auto">
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
