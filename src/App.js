import logo from './logo.svg';
import { Prueba, Prueba2 } from './prueba';
import { Tragamonedas } from './tragamonedas';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Prueba />
        <Prueba2 />
        <Tragamonedas />
        <p>Lorem ipsum</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
