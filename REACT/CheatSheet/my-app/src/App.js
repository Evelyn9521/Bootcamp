
import './App.css';
import FirstComponents, {SecondComponent, ThirdComponent} from './components/FirstComponents';
import Counter from "./components/Counter"
function App() {
  return (
    <div className="App">
      <Counter />
     {/* <FirstComponents title = "Título enviado desde el padre" date="16 de Agosto de 2025"/>
     <FirstComponents />
     <SecondComponent/>
     <ThirdComponent/> */}
    </div>
  );
}

export default App;
