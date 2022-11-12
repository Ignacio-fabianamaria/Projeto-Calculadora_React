import './App.css';
import { FcCalculator } from 'react-icons/fc';
import Calcultor from './components/Calculator';

function App() {
  const DATE = new Date();
  const DAY = String(DATE.getDate());
  const MONTH = String(DATE.getMonth() + 1);
  const YEAR = DATE.getFullYear();
  const currentDate = `${DAY}/${MONTH}/${YEAR}`

  const HOURS = DATE.getHours();
  const MIN = DATE.getMinutes();
  const SEC = DATE.getSeconds();
  const currentHours = `${HOURS}:${MIN}:${SEC}`

  console.log(currentDate);
  return (
    <div className="App">
      <header className="App-header">
        <FcCalculator style={{ fontSize: '50px', color: ' #FFD700' }} />
        <h1><strong>Calculator</strong></h1>
        <h5>{currentDate}</h5>
        <h5>{currentHours}</h5>
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
