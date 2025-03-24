// Getting input via STDIN
const readline = require("readline");

const { concat, countChar, replaceAllSpaces, areAnagrams, countWords, firstNonRep, removeVowels, shortestWord, countSubstring } = require("./day3PostSession");

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

    // const [str1, str2] = userInput[0].split(" ");
    // console.log(concat(str1, str2));

    // const str = userInput[0];
    // console.log(countChar(str));

    // const str = userInput[0];
    // console.log(replaceAllSpaces(str));

    // const [str1, str2] = userInput[0].split(" ");
    // console.log(areAnagrams(str1, str2));

    // const str = userInput[0];
    // console.log(countWords(str));

    // const str = userInput[0];
    // console.log(firstNonRep(str));

    // const str = userInput[0];
    // console.log(removeVowels(str));

    // const str = userInput[0];
    // console.log(shortestWord(str));

    // const [str1, str2] = userInput[0].split(" ");
    // console.log(countSubstring(str1, str2));

    //  end-here
});