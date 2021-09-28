import { useEffect, useState } from "react";
import { isFibonacci } from "./math-utils";

function FibonacciResult({ number }) {
  const [fibonacci, setFibonacci] = useState(false);

  useEffect(() => {
    isFibonacci(number).then(res => setFibonacci(res));
  }, [number]);

  return (
    <div>
      {fibonacci ? 'true' : 'false'}
    </div>
  )
}

export default FibonacciResult;