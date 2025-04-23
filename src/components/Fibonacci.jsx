import { useState } from 'react';

export default function Fibonacci() {
  const [number, setNumber] = useState(0);
  const [sequence, setSequence] = useState([]);

  const generateFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
  };

  const handleGenerate = () => {
    setSequence(generateFibonacci(Number(number)));
  };

  return (
    <div>
      <h2>Fibonacci Generator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        min="1"
      />
      <button onClick={handleGenerate}>Generate</button>
      <p>{sequence.join(', ')}</p>
    </div>
  );
}
