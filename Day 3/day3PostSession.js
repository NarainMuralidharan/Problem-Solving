// Post Session

function concat(str1, str2) {
    return str1 + str2;
}

function countChar(str) {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!freq[char]) {
            freq[char] = 0;
        }
        freq[char]++;
    }
    return freq;
}

function replaceAllSpaces(str) {
    let replaced = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            replaced += "%20";
        } 
        else {
            replaced += str[i];
        }
    }
    return replaced;
}

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let charCount = {};
    for (let i = 0; i < str1.length; i++) {
        let char1 = str1[i];
        let char2 = str2[i];
        if (!charCount[char1]) {
            charCount[char1] = 0;
        }
        if (!charCount[char2]) {
            charCount[char2] = 0;
        }
        charCount[char1]++;
        charCount[char2]--;
    }
    for (let ch in charCount) {
        if (charCount[ch] !== 0) {
            return false;
        }
    }
    return true;
}

function countWords(str) {
    let wordCount = 0;
    let match = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            if (!match) {
                wordCount++;
            }
            match = true;
        } 
        else {
            match = false;
        }
    }
    return wordCount;
}

function firstNonRep(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!charCount[char]) {
            charCount[char] = 0;
        }
        charCount[char]++;
    }
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }
    return "No non repeating character found";
}

function removeVowels(str) {
    let vowels = "aeiouAEIOU";
    let removedText = "";
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) === -1) {
            removedText += str[i];
        }
    }
    return removedText;
}

function shortestWord(str) {
    let minLen = str.length;
    let currLen = 0;
    for (let i = 0; i <= str.length; i++) {
        if (i < str.length && str[i] !== ' ') {
            currLen++;
        } 
        else {
            if (currLen > 0 && currLen < minLen) {
                minLen = currLen;
            }
            currLen = 0;
        }
    }
    return minLen;
}

function countSubstring(str1, str2) {
    let count = 0;
    for (let i = 0; i <= str1.length - str2.length; i++) {
        let match = true;
        for (let j = 0; j < str2.length; j++) {
            if (str1[i + j] !== str2[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            count++;
            i++;
        }
    }
    return count;
}

module.exports = { concat, countChar, replaceAllSpaces, areAnagrams, countWords, firstNonRep, removeVowels, shortestWord, countSubstring };
