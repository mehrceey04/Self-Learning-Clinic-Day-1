/*
   * getPrimes(n)
   * n = number
   * returns an error msg for n < 0, n = 0, and n is not a number
   * returns an empty array if there's no prime number
   * returns prime numbers in an array for n >= 2
*/
module.exports = {
  getPrimes : function(n) {
    var i, j, primeArray = [], isPrime;
    if(n < 0 || n === 0 || isNaN(n)) {
      return 'Pls enter a positive number greater than 0';  
    }
    if(n === 1) {
      isPrime = false;
      return [];
    }
    for(j = 2; j <= n; j++) {
      isPrime = true;
      for(i = 2; i < j; i++) {
        if(j % i === 0) {
          isPrime = false;
          break;
        }
      }
      if(isPrime){
        primeArray.push(j);
      }
    }
    return primeArray;
  }
}