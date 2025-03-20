// In Session

function factorial(num) {
    let fact = 1;

    for (let val = num; val >= 1; val--) {
        // fact = fact * val;
        fact *= val;
    }
    return fact;
}

//! Generate the Fibonacci sequence up to N terms.
//? 5 => 0 1 1 2 3
//? 7 => 0 1 1 2 3 5 8

function fibonacci(num) {
    // 0, 1
    const fibo = [];
    if (num >= 1) fibo.push(0); // ind 0
    if (num >= 2) fibo.push(1); // ind 1

    for (let ind = 2; ind < num; ind++) {
        fibo.push(fibo[ind - 1] + fibo[ind - 2]);
    }
    return fibo;
}

// Sum of digits in a number.
const floor = (num) => num - (num % 1);

function sumOfDigits(num) {
    if (num < 0) {
        num = -num;
    }
    let sum = 0;
    while (num > 0) {
        let rem = num % 10;
        sum = sum + rem;
        num = floor(num / 10);
    }
    return sum;
}

// Check if a number is a palindrome.

function reverse(num) {
    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = floor(num / 10);
    }
    return rev;
}

function isPlaindrome(num) {
    return num == reverse(num);
}

//! Check if a number is prime.
// Only divisors are 1 and num =>
// We are going to check if there is any other divisors are there

function isPrime(num) {
    let count = 0;
    if (num == 2) return true;
    if (num % 2 == 0) return false;
    for (let factor = 3; factor * factor <= num; factor += 2) {
        count++;
        if (num % factor == 0) {
            return [false, count];
        }
    }
    return [true, count];
}

module.exports = {
    factorial,
    fibonacci,
    sumOfDigits,
};