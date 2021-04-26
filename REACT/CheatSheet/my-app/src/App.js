
import './App.css';
//import FirstComponents, {SecondComponent, ThirdComponent} from './components/FirstComponents';
//import Counter from "./components/Counter"
//import UseEffectComponents from "./components/UseEffectComponents"
import {useState, createContext} from "react"
import UseContext from './components/UseContext';

export const GlobalContext = createContext();


function App() {

const [show, setShow] = useState(true);



  return (
    <div className="App">
      {/* <Counter />
     { show && <UseEffectComponents/>}
      <button onClick={()=>setShow(!show)}>Show</button> */}

     {/* <FirstComponents title = "Título enviado desde el padre" date="16 de Agosto de 2025"/>
     <FirstComponents />
     <SecondComponent/>
     <ThirdComponent/> */}

      <GlobalContext.Provider value="Soy un string guardado en un contexto">
        <UseContext/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
