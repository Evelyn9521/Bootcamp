
import './App.css';
import Movies from "./components/Movies";
import DetailsMovies from "./components/DetailsMovies";
import {useEffect, useState} from "react";


function App() {

const [movies, setMovies] = useState([]);


  useEffect(() => {

    fetch("https://api.themoviedb.org/3/movie/550?api_key=ae2053d3584c218a1a0d86d55581795f")
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="App">
      <h2>Movies</h2>
      <Movies movies={movies} setMovies={setMovies}/>
      <DetailsMovies setMovies={setMovies}/>
    </div>
  );
}




export default App;
// https://api.themoviedb.org/3/movie/550?api_key=ae2053d3584c218a1a0d86d55581795f