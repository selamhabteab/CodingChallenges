// WEEK 1

// DAY 1 - F, 9/10 - Reverse a string
//My logic: 1)split string into an array 2)reverse order of array 3)return array into a string with .join("")
function reverseString (string) {
    let tempArr = string.split('').reverse()
    return tempArr.join('')
}
console.log('original version: ',reverseString('hello'));

//short version:
const reverseStr = (string) => tempArr = string.split('').reverse().join('')
console.log('short version: ', reverseStr('hello'));

//using a for loop 
function reverseForLoop (string) {
    let tempStr = '';
    for (let i=string.length-1; i>=0; i--){
        tempStr+=string[i]
    }
    return tempStr
}
console.log('For Loop version: ',reverseForLoop('hello'));



