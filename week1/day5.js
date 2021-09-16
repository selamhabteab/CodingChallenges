//WEEK 1

// DAY 5 - T, 9/14 - Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase. 
//My logic (pseudocode): 
//Create a function that takes in a string "this is a string"
//Assign a variable to hold: split string into an array 
//Apply a for loop to iterate through the array and use substring method to isolate the first letter of every value: string[i].substring(0,1)
//Apply uppercase method to the substring
//then join array to return to sentence 
    //["this", "is", "a", "string"]. --> ["t", "h", "i"...]

function titleCase (string) {
    sentence = string.split(" "); //-->["this", "is", "a", "string"]
    cap = []
    for (let i=0; i<sentence.length; i++){
        sentence[i].substring(0,1).toUpperCase() 
        // console.log(sentence[i].substring(0,1).toUpperCase());
            //extracts t, i, a, s --> T,I,A,S 
                //Doesn't work because you cant return extracted letter 
    }
    return sentence.join(" ")
}

// console.log(titleCase("This is a string."));

// My Solution
//Create a function that takes in a string "this is a string"
//Assign a variable to hold: split string into an array 
//Apply a for loop to iterate through the array 
//Apply uppercase method to the first letter of every value 
//return array to a sentence with .join(" ")

function capitalized (string) {
    wordsArr = string.split(" "); //-->["this", "is", "a", "string"]
    console.log("words array: ", wordsArr);
    capitalizedSentence = []
    
    for (let i=0; i<wordsArr.length; i++){
        let substring = wordsArr[i].substring(1)
        let firstLetter = wordsArr[i][0].toUpperCase()
        let word = firstLetter + substring
        capitalizedSentence.push(word)
    };

    console.log("capitalized sentence: ", capitalizedSentence);
    
    return capitalizedSentence.join(" ")
}

console.log(capitalized("This is a string."));

//VIDEO SOLUTION
// function solution (string) {
//     let words = string.toLowerCase().split(" ");
//     for (let i=0; i<words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//     }
//     return words.join(" ")
// }

