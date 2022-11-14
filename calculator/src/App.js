import './App.css';
import { FcCalculator } from 'react-icons/fc';
import Calcultor from './components/Calculator';
import { useEffect, useState } from 'react';

function App() {
  const [currentHours, updateTime] = useState(new Date());
  const DATE = new Date();
  const DAY = String(DATE.getDate());
  const MONTH = String(DATE.getMonth() + 1);
  const YEAR = DATE.getFullYear();
  const currentDate = `${DAY}/${MONTH}/${YEAR}`

  useEffect(()=> {
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  },[])

  console.log(currentDate);
  return (
    <div className="App">
      <header className="App-header">
        <FcCalculator style={{ fontSize: '50px', color: ' #FFD700' }} />
        <h1><strong>Calculator</strong></h1>
        <h5>{currentDate}</h5>
        <h5>{currentHours.toLocaleTimeString()}</h5>
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
