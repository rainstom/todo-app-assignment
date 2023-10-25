// let fname = "Chibuike";
// fname.indexOf("i");

// let fullName = fname.indexOf ("i", 6);

// console.log(fullName);


// let fname ="jenny";
// let sname = "jenny";

// console.log(fname === sname);


// let farr = [];
// let sarr =[];

// console.log(farr === sarr)


// function ispalindrome (str) {
//  const reverse = str.split ("").reverse ("") . joint ("")
//  if (str === reverse){
//     console.log (true);
//  } else{
//     console.log(false);
//  }
// }
// ispalindrome = ("madam" );


// function ispalindrome (str) {
//     let newWord = "";
//     for (let i = str.lenght-1; i >= 0; i--){
//         newWord += str [i];
//     }
//     if (newWord === str){
//         console.log("is a palindrome");
//     } else {
//         console.log ("is not a palindrome");
//     }
    

// }
// ispalindrome("Madam");



// function ispalindrome(str) {
// let newWord = " ";
// for (let i = newStr.lenght-1; i >= 0; i--) {
// newWord += newStr[i];
// }
// if (newWord ===newStr){
//     console.log("is a palindrome");
// } else {
//     console.log ("is not a palindrome");
// }
// }
// ispalindrome ("madam")

// let user = [ cido, humble, chima, obed];
// let firstUser = user.find ((item)=>item.id==1);
// console.log (user.name);



// let num = [1, 2, 1, 3, 4, 3];
// num.sort() 
// console.log(num);
  
// Write a function to reverse the element of an arry without using the built-in reverse method.

// function reverseArray (array){
//     let num = [1, 2, 3, 4, 5, 6];
//     num.sort((a,b) => b - a ) 
//     console.log(num);
// }
// reverseArray(num);


//  Write a func to finnd the max $ min values in an array without using the built-in Math.max or Math.min function
function minMax(num){
    num.sort((a,b) => a-b);
    let min = num[0];
    let max = num [num.length-1];
    console.log(min, max);
    
}
minMax([10,40,30,50, 20]);

//  Create a function that calculates the sum of all the elements in an array

let array=[1, 2, 3, 4, 5];
let result = array.reduce ((a,b) =>{
    return a+b;
}, 10);
console.log(result);


//  Implement a function that finds $ returns all the duplicate element in an array

// let array = [1, 2, 3, 4, 5];
// let joinedArr = [array, array];
// console.log (joinedArr);

const myarray = [5, 2, 9, 3, 6];
let sorted = myarray.sort ((a, b) => b-a);
console.log(sorted);

//  Create a sorting algorithm (eg; bubble sort or selection sort) to sort an array of numbers in descending order

// function bubbleSort(array){
//     for (let i = 0; i < array.lenght - 1; i++){
//         for(let j = 0; j < array.lenght -1-i; j++){
//             if(array[j] > array[j+1]){
//                 array[j], array [j+1] = array[j+1],array[j];
//             }
            
//         }
//     }
//     return array;
// } 
// console.log(bubbleSort([1, 2, 3, 4, 5]))

//  Write a function that merges two sorted arrays into a single sorted array without using the concart or sort methods


//  Implement a function that removes all falsely values (eg; false, null, undefined, 0, "", NaN) from an array


//  Write a function of an array that rotates the elements of an array to the right by a specified number of position    num [0, 20, 30, 40]

// function minMax (num){
// let minMax = [20, 50, 30, 10, 40];
// let min = num[0]
// let max = num [0]
// for (let i = 1; i < num.lenght; i ++)
//   if (num < [i] < min){
//      min = num [i];
//      if (num[i]> max){
//          max = num [i];
//         }
//     }

//     console.log(minMax());
// }

function isPalindrome(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome("racecar"));



  function findDup(arr) {
    let dup = [];
    let obj = {};
    for (const item in arr) {
      if (obj[arr[item]]) {
        dup.push(arr[item]);
      } else {
        obj[arr[item]] = true;
      }
    }
    return dup;
  }
  console.log(findDup([1,2,3,4,5,6,1]));



  function minMax(num) {
    num.sort((a, b) => b - a);
    let min = num[num.length - 1];
    let max = num[0];
    console.log(min, max);
  }
  
  minMax([20, 10, 40, 50, 20]);



  function reversedArray(array) {
    const newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  }
  
  console.log(reversedArray(["dd", "ss", "aa", "ww"]));


  //Map

  // let user = new Map();

  // user.set ("name", "jennifer");
  // user.set ("age", 40);
  // user.set ("one", 1);
  // user.set (1[1,2,3,4,5,6]);

  // console.log(user);

  // console.log (user.get("age"));

  // console.log (user.has ("age"));

  // console.log (user.has("gender"));

  // (user.delete("one"));
  // console.log(user);
//   user.clear();
// console.log(user);

// console.log(user.size);

// console.log(user);

// console.log(user.keys());

// for (const key of user.keys()){
//     console.log(key);
// }

// for (const key of user.values()){
//     console.log (values);

// }

// console.log(user.entries());

// looping through entries
// for (const value of user. values()){
//     console.log(value);
// }


// for (const ent of user.entries()){
//     console.log (ent);

// }


// let obj = {
//     name:"Obasanjo",
//     age: 99,
//     career: "politician",
// };

// let otoa = object.entries (obj);
// let map = new Map (otoa);
// console.log(map);

// let newobj = object.fromEntries(map.entries());
// console.log(newobj);

// Set

let cars = new Set();
cars.add ("Benz");
cars.add ("Lamborghini");
cars.add ("Toyota");
cars.add ("Passat");

console.log(cars);

// set to remove duplicate

cars.delete("Passat");
console.log(cars);
console.log(cars.has("Passat"));



// symbole Type


let obj = {};
let email =  Symbol.for("email");
let email2 = Symbol.for("email");

obj.name = "Obi";
obj.age = 100;
obj.name = "Ada";
obj [email] ="email@gmail.com";
obj [email2] ="email@gmail.com";

console.log(email==email);

console.log(Symbole("1")==Symbol("1"));
console.log(Symbol("1")===Symbol("1"));

console.log(object.keys(obj));


for (const key in obj) {
  console.log(key);
}
