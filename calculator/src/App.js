import './App.css';
import Calcultor from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><strong>Calculator</strong></h1>
      </header>
      <section className="calculator-field">
          <Calcultor />
        </section>
      <footer className="App-footer">
        Calculator Project - Developed by Fabiana Ignácio - 2022
        </footer>
    </div>
  );
}

export default App;
