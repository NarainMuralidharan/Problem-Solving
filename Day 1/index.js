// Getting input via STDIN
const readline = require("readline");

const { diff, oddeven, perimeterRec, large4, avg3, countVowels, upperCase, revstr, square } = require("./day1PostSession");

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

    // Determine if a number is positive or negative
    // const value = +userInput[0];
    // console.log(`${value} is ${posnev(value)}`);

    // Identify the maximum and minimum of three numbers
    // const [val1, val2, val3] = userInput[0].split(" ").map(Number);
    // console.log(maxmin(val1, val2, val3));

    // Calculate the difference between two integers
    // const [val1,val2] = userInput[0].split(" ").map(Number);
    // console.log(diff(val1, val2));

    // Check if a number is even or odd
    // const value = +userInput[0];
    // console.log(`${value} is ${oddeven(value)}`);

    //Calculate the perimeter of a rectangle
    // const [val1,val2] = userInput[0].split(" ").map(Number);
    // console.log(perimeterRec(val1, val2));

    //Find the largest of four numbers
    // const [val1, val2, val3, val4] = userInput[0].split(" ").map(Number);
    // console.log(large4(val1, val2, val3, val4));

    //Calculate the average of three numbers
    // const [val1, val2, val3] = userInput[0].split(" ").map(Number);
    // console.log(avg3(val1, val2, val3));

    //Count the number of vowels in a string
    // const str = userInput[0];
    // console.log(countVowels(str));

    //Determine if a character is uppercase
    // const char = userInput[0].trim();
    // console.log(upperCase(char));

    //Print the reverse of a string
    // const str = userInput[0].trim();  
    // console.log(revstr(str));  

    //Find the square of a number
    // const value = +userInput[0];
    // console.log(square(value));

    //  end-here
});