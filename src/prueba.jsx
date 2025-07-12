import { useState } from 'react';

export function Prueba() {
  // const [count, setCount] = useState(0);
  const valueRandomLimit = 10;
  const valueRandom = Math.floor(Math.random() * valueRandomLimit);
  const [number, setNumber] = useState('');

  const handleText = event => {
    const value = event.target.value;
    setNumber(Number(value));
  };

  const handleAdivinar = () => {
    if (!number || number < 0) {
      alert('Debes ingresar un numero valido');
      return;
    }

    if (number === valueRandom) {
      alert('Felicidades, adivinaste el numero');
    } else if (number > valueRandom) {
      alert('Te pasaste');
    } else {
      alert('Te quedaste corto');
    }
  };

  return (
    <div>
      <span>Lo que escribes es: {number}</span>
      <br />
      <input type="text" id="input" onChange={handleText} />
      <br />
      <button onClick={handleAdivinar}>Adivinar</button>
    </div>
  );
}

export function Prueba2() {
  return (
    <div>
      <h2>Prueba 2</h2>
    </div>
  );
}
