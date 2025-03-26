
//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]

let arr1=[3,7,34,90,12];
console.log(arr1.at(-1));
// Write a JS program that will join the following array elements into a string. myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets=["Cow","Bird","Snake","Dog"];
let string=myPets.join(",");
console.log(string);
//Write a JS script to sort the following array items. var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3=[-5,9,5,3,2,-3,6,8,4,1];
var sortedArray=arr3.sort();
console.log(sortedArray);
//Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates
function removeDuplicates(arr) {
    let uniqueArray = [];
    let duplicateArray = [];
    let seen = new Set(); 
  
    for (let item of arr) {
      if (seen.has(item)) {
        duplicateArray.push(item);
      } else {
        seen.add(item);
        uniqueArray.push(item);
      }
    }
  
    console.log("Array without duplicates:", uniqueArray);
    console.log("Array of duplicates:", duplicateArray);
  }
  
  
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
removeDuplicates(arr);

//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found". let arr5 = ["the", "way", "x", 4]
let arr5 = ["the", "way", "x", 4];
if (arr5.includes("food")) {
  console.log("food");
} else {
  console.log("the search word was not found");
}
//Write a JS script to sort the following string:let word = "renniw"
let word="renniw";
let sortedString=word.split(' ').sort().join('');
console.log(sortedString);
//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index
let fruits=["mango","orange","banana","Apple","Lemon","Potato","Onion"];
fruits[5]="Tomato";
console.log(fruits);

