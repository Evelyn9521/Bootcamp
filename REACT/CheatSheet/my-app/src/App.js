
import './App.css';
import FirstComponents, {SecondComponent, ThirdComponent} from './components/FirstComponents';

function App() {
  return (
    <div className="App">
     <FirstComponents title = "Título enviado desde el padre" date="16 de Agosto de 2025"/>
     <FirstComponents title = "Otro título"/>
     <SecondComponent/>
     <ThirdComponent/>
    </div>
  );
}

export default App;
