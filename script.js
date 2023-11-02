//day 3 task 
//Task 3: Simple Programs todo for Condition , Looping and Arrays
// 1.Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (var i = 1; i <= 7; i++) {
    var line = '';
    for (var j = 1; j <= i; j++) {
      line += '#';
    }
    console.log(line);
  }

//2. Iterate through the string array and print it contents

   
var strArray = ["<option>Jazz</option>",
  "<option>Blues</option>",
  "<option>New Age</option>",
  "<option>Classical</option>",
  "<option>Opera</option>"];

for (var i = 0; i < strArray.length; i++) {
console.log(strArray[i]);
}

// var myarray=[11,22,33,44,55]
// write a code to count the elements in the array . Don’t use length property
// Declare an empty array;

var myArray = [11, 22, 33, 44, 55];
var count = 0;
for (var i in myArray) {
  if (myArray.hasOwnProperty(i)) {
    count++;
  }
}
console.log("Number of elements in the array: " + count);

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
//let foods=[]

var foods = [
  "Biriyani",
  "fried rice",
  "Chocolate",
  "chicken sandwich",
  "Ice Cream",
  "chicken 65",
  "Pasta",
  "prawn fry",
  "fish fry",
  "French Fries",
  "blackforest",
  "lava cake",
  "jack friut",
  "Crispy Chicken",
  "Strawberries",
  "dota burfi",
  "white forest",
  "Mango",
  "chicken lolypop",
  "cheese Popcorn"
];


// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
// let foods=[]
// Find the length of your foods array.

var foods1 = [
  "Biriyani",
  "fried rice",
  "Chocolate",
  "chicken sandwich",
  "Ice Cream",
  "chicken 65",
  "Pasta",
  "prawn fry",
  "fish fry",
  "French Fries",
  "blackforest",
  "lava cake",
  "jack friut",
  "Crispy Chicken",
  "Strawberries",
  "dota burfi",
  "white forest",
  "Mango",
  "chicken lolypop",
  "cheese Popcorn"
];

  console.log(foods1[4]);
  console.log(foods1.length);

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.



var friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran"
];

function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "Mari") {
      input[i] = "Munnabai";
    }
  }
}

dataHandling(friends);
console.log(friends);

//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

var friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran"
];

function dataHandling(input) {
  for (var i = 0; i <=input.length; i++) {
    if(input[i]==="CaptianAmerica"){
      console.log(input[i]);
      break;
    }
    console.log(input[i]);
    }  
}
dataHandling(friends1);
console.log(friends1);


// Find the person is ur friend or not.


var friends2 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran"
];

function dataHandling(input, name) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === name) {
      return true; 
    }
  }
  return false; 
}
var found = dataHandling(friends2, "Jeff");
console.log(found);

//  We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
""
var friends3 = ["Mari" , "MaryJane" , "CaptianAmerica", "Munnabai" , "Jeff" , "AAK chandran"];
var friends4 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];

function dataHandling(input1,input2){
  var combinedFriends = input1.concat(input2);
  combinedFriends.sort();
  return combinedFriends;
}
var combinedAndSortedFriends = dataHandling(friends3, friends4);
console.log(combinedAndSortedFriends);

//Get the first item, the middle item and the last item of the array

var friends5 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var firstItem = friends5[0];
var middleItem = friends5[Math.floor(friends5.length / 2)];
var lastItem = friends5[friends5.length - 1];
console.log("First Item: " + firstItem);
console.log("Middle Item: " + middleItem);
console.log("Last Item: " + lastItem);

//Add your name to the end of the friends array, and add another name to beginning.

var friends6 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var myName = "Gopikadevi"; 
friends6.push(myName);
var anotherName = "Radhakrishnan";
friends6.unshift(anotherName);
console.log(friends6);

//3.Add Mr or Ms to the names in the friends array.

var friends7 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

for (var i = 0; i < friends7.length; i++) {
  if (isMale(friends7[i])) {
    friends7[i] = "Mr " + friends7[i];
  } else {
    friends7[i] = "Ms " + friends7[i];
  }
}
console.log(friends7);
function isMale(name) {
  return true;
}

//Concat all the names the friends array and return as comma “,” seperated string.

var friends8 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var concatenatedString = friends8.join(", ");
console.log(concatenatedString);

//5. Find the friends names who has letter ‘a’ and return the list.

var friends9 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var names = [];

for (var i = 0; i < friends9.length; i++) {
  if (containsA(friends9[i])) {
    names.push(friends9[i]);
  }
}
console.log(names);
function containsA(name) {
  return name.toLowerCase().includes('a');
}

//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

var friends10 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var totalLength = 0;
var totalNames = friends10.length;

for (var i = 0; i < totalNames; i++) {
  totalLength += friends10[i].length;
}
var averageLength = totalLength / totalNames;
console.log("Average length of friends' names: " + averageLength);

//7. Find the names and return the list starting with letter M.

var friends11 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var namesStartingWithM = [];
for (var i = 0; i < friends11.length; i++) {
  if (startsWithM(friends11[i])) {
    namesStartingWithM.push(friends11[i]);
  }
}
console.log(namesStartingWithM);
function startsWithM(name) {
  return name.toLowerCase().startsWith('m');
}

//8. Find the name with max characters and return the name.

var friends12 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var maxName = "";
var maxLength = 0;
for (var i = 0; i < friends12.length; i++) {
  var currentName = friends12[i];
  if (currentName.length > maxLength) {
    maxLength = currentName.length;
    maxName = currentName;
  }
}
console.log("Name with the maximum characters: " + maxName);

//9. Find the name with min characters and return the name.

var friends13 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var minName = "";
var minLength = Infinity;
for (var i = 0; i < friends13.length; i++) {
  var currentName = friends13[i];
  if (currentName.length < minLength) {
    minLength = currentName.length;
    minName = currentName;
  }
}
console.log("Name with the minimum characters: " + minName);

// Find the average in the array below.
// Make sure you add only the numbers and do avg.
// const friendsInfo = [6, 12, ‘Mari’, 1, true, ‘Munnabai’, ‘200’, ‘CaptianAmerica’, 8, 10];

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let sum1 = 0;
let count1 = 0;
for (let i = 0; i < friendsInfo.length; i++) {
  if (typeof friendsInfo[i] === 'number') {
    sum += friendsInfo[i];
    count++;
  }
}
let average = count === 0 ? 0 : sum / count;
console.log('Average of numbers in the array: ' + average);

//Print the contents of the input variable

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    var person = input[i];
    console.log("Nomor ID: " + person[0]);
    console.log("Nama Lengkap: " + person[1]);
    console.log("TTL: " + person[2] + ", " + person[3]);
    console.log("Hobi: " + person[4]);
    console.log();
  }
}
dataHandling(input);

// Add a new key value pair to myobject
// key : ten
// value : ten
var myobject = { 1: "one", "11": 1, "name": "arun" };
myobject["ten"] = "ten";
console.log(myobject);

// Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.

var data = {
  name: "Guvi",
  type: "Geek",
  rating: 6,
  location: "IIT-M RP, Chennai"
};

console.log(data);

// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.

var companies = [
  {
    name: "Guvi",
    type: "Geek",
    age: 6,
    location: "IIT-M RP, Chennai"
  },
  {
    name: "Amazon, Inc",
    type: "Inc",
    age: 31,
    location: "SP Infocity, Chennai"
  },
  {
    name: "Google",
    type: "Alphabet",
    age: 34,
    location: "34 Amphitheater Parkway, MountainView"
  },
  {
    name: "Tesla, Inc",
    type: "Inc",
    age: 32,
    location: "333 Santana Row, San Jose"
  }
];

//Print odd numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

//Convert all the strings to title caps in a string array

var stringArray = ["this is a sample", "convert me", "to title case"];
for (var i = 0; i < stringArray.length; i++) {
  stringArray[i] = toTitleCase(stringArray[i]);
}
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
console.log(stringArray);

//Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("The sum of all numbers is: " + sum);

// Return all the prime numbers in an array

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  for (var i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
function getPrimeNumbers(numbers) {
  var primeNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primeNumbers.push(numbers[i]);
    }
  }
  return primeNumbers;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = getPrimeNumbers(numbers);
console.log("Prime numbers in the array: " + primeNumbers);

// Return all the palindromes in an array

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  var reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
function getPalindromes(strings) {
  var palindromes = [];
  for (var i = 0; i < strings.length; i++) {
    if (isPalindrome(strings[i])) {
      palindromes.push(strings[i]);
    }
  }
  return palindromes;
}
var strings = ["radar", "hello", "level", "world", "deified"];
var palindromes = getPalindromes(strings);
console.log("Palindromes in the array: " + palindromes);

// Return median of two sorted arrays of the same size.

function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = mergeSortedArrays(nums1, nums2);
  const n = mergedArray.length;
  if (n % 2 === 0) {
    return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
  } else {
    return mergedArray[Math.floor(n / 2)];
  }
}
function mergeSortedArrays(nums1, nums2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    mergedArray.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    mergedArray.push(nums2[j]);
    j++;
  }
  return mergedArray;
}
const nums1 = [1, 3, 8];
const nums2 = [2, 6, 9];
const median = findMedianSortedArrays(nums1, nums2);
console.log("Median: " + median);

//Remove duplicates from an array

function removeDuplicates(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

var arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
var uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Array with duplicates removed:", uniqueArray);

// Rotate an array by k times

function rotateArray(arr, k) {
  const n = arr.length;
  const rotatedArray = [];
  k = k % n;
  for (let i = 0; i < n; i++) {
    rotatedArray[(i + k) % n] = arr[i];
  }
  return rotatedArray;
}
const originalArray = [1, 2, 3, 4, 5];
const k = 2; 
const rotatedArray = rotateArray(originalArray, k);
console.log("Original Array: " + originalArray);
console.log("Rotated Array: " + rotatedArray);

// Print odd numbers in an array

function printOddNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Odd numbers in the array:");
printOddNumbers(numbers);

// Convert all the strings to title caps in a string array

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
var stringArray = ["this is a sample", "convert me", "to title case"];
for (var i = 0; i < stringArray.length; i++) {
  stringArray[i] = toTitleCase(stringArray[i]);
}
console.log("String array in title case:", stringArray);

// Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = numbers.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log("Sum of all numbers:", sum);

// Return all the prime numbers in an array

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (var i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = numbers.filter(function (num) {
  return isPrime(num);
});
console.log("Prime numbers in the array:", primeNumbers);

// Return all the palindromes in an array/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}
var strings = ["radar", "hello", "level", "world", "deified"];
var palindromes = strings.filter(function (str) {
  return isPalindrome(str);
});
console.log("Palindromes in the array:", palindromes);












