/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  result = 1;
  while (n > 0) {
    result = result * n;
    n--;
  }
  return result;
}
