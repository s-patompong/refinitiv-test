export const isPrime = num => {
  // Use promise so we don't block UI
  return new Promise((resolve) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        resolve(false);
      }
    }

    resolve(num > 1);
  });
}

// Ref: https://www.geeksforgeeks.org/check-number-fibonacci-number/
const isPerfectSquare = n => {
  let s = parseInt(Math.sqrt(n));
  return (s * s === n);
}

export const isFibonacci = n => {
  return new Promise((resolve) => {
    const isFibo = isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
    resolve(isFibo);
  })
}
