//WEEK 1

// DAY 6 - W, 9/15 - Largest numbers in Arrays

// Challenge: Return an array consisting of the largest number from each provided sub-array. 

//My logic (pseudocode): 
//Create a function that takes in an array 
    //[[4,5,1], [13,2,7], [9,10,1], [500,5,33]]
//Assign a variable to an empty array that will hold the largest numbers
//Apply a for loop to iterate through the array and another for loop to iterate through the sub arrays
//add a conditional to extract the largest number in each subarray
//push the largest numbers into the empty array
// -OR-
//After the nested loop, sort subarrays small to largest and push or pop last index of each sub array

//   0          1         2          3
//[[4,5,1], [13,2,7], [9,10,1], [500,5,33]]


function largestNum (array) {
    lgNum=[]
    count=0
    for(let i=0; i<array.length; i++){
        console.log("first layer: ", array[i]);
        for(let j=0; j<array[i].length; j++){
            console.log("second layer: ", array[i][j]);
            if (array[i][j]>count){
                count=array[i][j]
            }
        }
        console.log("count: ", count);
        lgNum.push(count)
        count = 0
    }
    return lgNum
}
var numsArray = [[4,5,1], [13,2,7], [9,10,1], [500,5,33]]
console.log(largestNum(numsArray));

//ANOTHER WAY of doing it with the sort method
function largestNumber (array) {
    lgNums=[]
    counter=0
    for(let i=0; i<array.length; i++){
        console.log("first layer: ", array[i]);
        array[i].sort(function(a, b){return b-a})
        lgNums.push(array[i][0])
    }

    return lgNums
}
var numsArray = [[4,5,1], [13,2,7], [9,10,1], [500,5,33]]
console.log(largestNumber(numsArray));

//Multiple video solutions but one that was new to me was creating a function to find the max number of an array then creating another function with a for loop that would then reference the first function to find the max number of the sub-array