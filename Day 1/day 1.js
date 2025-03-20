// In Session

// Determine if a number is positive or negative
function posnev(num) {
    if (num > 0) {
        return "positive";
    }
    else if (num < 0) {
        return "negative";
    }
    else {
        return "zero";
    }
}

// Identify the maximum and minimum of three numbers
function maxmin(num1, num2, num3) {
    let min = 0, max = 0;
    if ((num1 >= num2) && (num1 >= num3)) {
        max = num1;
    }
    else if (num2 >= num3) {
        max = num2;
    }
    else
        max = num3;

    if ((num1 <= num2) && (num1 <= num3)) {
        min = num1;
    }
    else if (num2 <= num3) {
        min = mum2;
    }
    else
        min = num3;

    return { max, min }
}

module.exports = { posnev, maxmin };

// Post Session

// Calculate the difference between two integers
function diff(num1, num2) {
    return num1 - num2;
}

// Check if a number is even or odd
function oddeven(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else
        return "Odd";
}

//Calculate the perimeter of a rectangle
function perimeterRec(l, b) {
    return 2 * (l + b);
}

//Find the largest of four numbers
function large4(num1, num2, num3, num4) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    if (num4 > max) {
        max = num4;
    }
    return max;
}

//Calculate the average of three numbers
function avg3(num1, num2, num3) {
    let avg3 = (num1 + num2 + num3) / 3;
    return parseFloat(avg3);
}

//Count the number of vowels in a string
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

//Determine if a character is uppercase
function upperCase(char) {
    if (char.length === 1) {
        if (/[A-Za-z]/.test(char)) {
            if (char === char.toUpperCase()) {
                return `${char} is uppercase.`;
            }
            else {
                return `${char} is not uppercase`;
            }
        }
        else {
            return "Enter a letter";
        }
    }
    else {
        return "Enter only one character.";
    }
}

//Print the reverse of a string
function revstr(str) {
    return str.split('').reverse().join('');
}

//Find the square of a number
function square(num) {
    return num * num;
}

module.exports = { diff, oddeven, perimeterRec, large4, avg3, countVowels, upperCase, revstr, square };


