import { useEffect, useState } from 'react'
import Input from "./components/Input";
import Mode from "./components/Mode";
import PrimeResult from "./components/PrimeResult";
import FibonacciResult from "./components/FibonacciResult";

export const modes = [ 'isPrime', 'isFibonacci' ];

function App() {
  const [ actualNumber, setActualNumber ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ mode, setMode ] = useState(modes[0]);

  useEffect(() => {
    // Debounce number changes
    const timeout = setTimeout(() => {
      // Do nothing if the number is empty
      const numberAsFloat = parseFloat(number);
      if (isNaN(numberAsFloat)) return;

      let newNumber = Math.round(numberAsFloat);

      if (newNumber < 0) {
        newNumber = 1;
      } else {
        newNumber = Math.abs(newNumber); // Change -0 to 0, just in case the user enters it
      }

      setActualNumber(newNumber);
      setNumber(newNumber);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [ number ]);

  return (
    <div className="flex overflow-x-auto">
      <div className="w-[200px]">
        <Input number={number} setNumber={setNumber}/>
      </div>
      <div className="flex-1">
        <Mode mode={mode} setMode={setMode}/>
      </div>
      <div className="w-[300px]">
        {mode === 'isPrime' ? <PrimeResult number={actualNumber}/> : <FibonacciResult number={actualNumber}/>}
      </div>
    </div>
  );
}

export default App
