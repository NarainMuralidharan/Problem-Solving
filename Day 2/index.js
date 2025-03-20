// Getting input via STDIN
const readline = require("readline");

const { lcm, gcd, divisors, iscoprime } = require("./day2PostSession");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    //  start-here
    //  Your code goes here … replace the below line with your code logic 

    // ONLY POST SESSION

    // const [val1,val2] = userInput[0].split(" ").map(Number);
    // console.log(lcm(val1, val2));

    // const [val1,val2] = userInput[0].split(" ").map(Number);
    // console.log(gcd(val1, val2));

    // const value = +userInput[0];
    // console.log(...divisors(value)); 

    // const [val1,val2] = userInput[0].split(" ").map(Number);
    // console.log(iscoprime(val1, val2));

    //  end-here
});