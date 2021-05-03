
import './App.css';
import Movies from "./components/Movies";
import DetailsMovies from "./components/DetailsMovies";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {

  return (
    <div className="App">
      {/* <h2>PREMIERS</h2>
      <Movies movies={movies} setMovies={setMovies}/>
      <DetailsMovies setMovies={setMovies}/> */}

      <BrowserRouter>
        <Switch>
            <Route path="/DetailsMovies" component={Movies}/>
            <Route path="/Movies/:id" component={DetailsMovies}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
// https://api.themoviedb.org/3/movie/550?api_key=ae2053d3584c218a1a0d86d55581795f   URL MOVIES
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=>ae2053d3584c218a1a0d86d55581795f&language=en-US   URL ESTRENOS