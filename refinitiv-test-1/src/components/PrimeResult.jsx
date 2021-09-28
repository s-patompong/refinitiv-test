import { useEffect, useState } from "react";
import { isPrime } from "./math-utils";

function PrimeResult({ number }) {
  const [ prime, setPrime ] = useState(false);

  useEffect(() => {
    isPrime(number).then(res => setPrime(res));
  }, [ number ]);

  return (
    <div>
      {prime ? 'true' : 'false'}
    </div>
  )
}

export default PrimeResult;