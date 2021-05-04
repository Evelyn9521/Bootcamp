import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./app.css"


export default function DetailsMovies() {

const [details, setDetails] = useState({})
const{id}= useParams();

useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ae2053d3584c218a1a0d86d55581795f`)
      .then(response => response.json())
      .then(data => setDetails(data));
  }, []);


    return (
                    <div className="card w-25 m-auto" class="card1">
                        <div>
                            <img className="card-img-top " src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt="Card image cap"/>
                        </div>
                        <div class="card2">
                            <div className="card-body" >
                                <h5 className="card-title">{details.title}</h5>
                                <p className="card-text">{details.overview}</p>
                                <date>Date: {details.release_date}</date>
                                <p>Vote average: {details.vote_average}</p>
                            </div>
                        </div>
                       <a href={`https://m.imdb.com/title/${details.imdb_id}`}><button className="btn bg-success">IMDb</button></a>
                    </div>
    )
}


