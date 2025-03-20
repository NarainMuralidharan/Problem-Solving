// Post Session

// Find the LCM of two numbers
function lcm(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    let multiple = num1;
    while (multiple % num2 !== 0) {
        multiple += num1;
    }
    return multiple;
}

// Calculate the GCD of two numbers
function gcd(num1, num2) {
    while (num2 !== 0) {
        let rem = num1 % num2;
        num1 = num2;
        num2 = rem;
    }
    return num1;
}

//Find all divisors of a number
function divisors(num) {
    let div = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            div.push(i);
        }
    }
    return div;  
}

//Check if two numbers are coprime
function iscoprime(num1, num2) {
    return gcd(num1, num2) === 1;
}


module.exports = {lcm, gcd, divisors, iscoprime};

