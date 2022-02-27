function fibonacciMemoization(n) {
  const memo = [0, 1] // {1}
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n] // {2}
    return (memo[n] = fibonacci(n - 1) + fibonacci(n - 2)) // {3} }; return fibonacci;
  }
}
console.log(fibonacciMemoization(5))
