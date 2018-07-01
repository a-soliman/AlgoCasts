// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, cache={}) {
    if ( n <= 2 ) return 1;
    if ( cache[n] ) return cache[n];
    cache[n] = fib(n-1, cache) + fib(n-2, cache);
    return cache[n]; 
}


module.exports = fib;
