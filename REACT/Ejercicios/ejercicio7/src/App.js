
import './App.css';
import Movies from "./components/Movies";
import DetailsMovies from "./components/DetailsMovies";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <h2>PREMIERS 2021</h2>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Movies}/>
            <Route path="/details/:id" component={DetailsMovies}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
