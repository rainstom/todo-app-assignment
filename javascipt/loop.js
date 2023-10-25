/// while loop

let num =0;

// while (num < 20) {
//     num++;
//    console.log(num);
// }


//do.... while loop
// do {
//     num++;
//     console.log(num);
// } while (num < 20);


// for loop

// for(declaration; condition; increment / decrement) {
//     action;
// }

// for (let num = 10; num <= 20; num++) {
//     console.log(num);
// }


// for(let num = 10; num <= 20; num++) {
//     if (num === 15) break;
//     console.log(num);
// }


// for (let num = 10; num <= 20; num++) {
//     if (num === 15) continue;
//     console.log(num);
    
//     if (num === 18) break;
//     console.log(num)
// }


// for (let num = 10; num <= 20; num++) {
// //   if (num > 15 && num < 18) continue;
// //   console.log(num)
// // }


// // for (let num =0; num <= 20; num++) {
// //     if (num % 2 != 0) {
// //         console.log(num + " is an odd number");
// //     } else{
// //         console.log(num + " is an even number");
// //     }
// // }


// // function display(a, b) {
// //     console.log(a, b );
// // }

// // display("Hello", "World");
// // display("Byeeee");

// // function display(a, b){
// //     console.log(a * b);
// // }

// // display("10", "10");


// // // FUNCTION DECLARATION

// // function functionName() {

// // }

// // function display(a, b) {
// //     console.log(a * b);
// // }
// // display(10, 10);


// // FUNCTION EXPRESSION
// let name = function (name) {
//   

// console.log("My name is " + name);
// };
// fName("Jennifer");
// fName( "Chibuike");


// // ARROW FUNCTION

//  let surName = (surName) => {
//     console.log ("My name is " + surName);
//  }
//   surName("Osita");


//   function age(age) {
//     if (age >= 18) {
//         console.log(" You are eligible");
//     } else {
//         console.log ("You are not eligible");
//     }
//   }
//   age(18);


//   const ages = (age) => {
//     console.log(age >= 18 ? "You are eligible" : "You are not eligible");
//   }
//   ages(1);

//   // possible sum of a number


// function getsum(num) {
//     for( let i = 0; i < num; i++){
//         for( let j = 0; j < num; j++){
//            for(let k = 0; k < num; k++){

//            }   
//         }
//     }
// }
// getsum(10)
    
var prime = function() {
    var num;
    for(num =0; num < 101; num ++){
        if (num % 2 === 0){
            break ;
        }
        else if (num % 3 === 0){
            break;
        }
        else if ( num % 4 === 0){
            break;
        }
        else if ( num % 5 === 0){
            break;
        }
        else if ( num % 6 === 0){
            break;
        }
        else if ( num % 7 === 0){
            break;
        }
        else if ( num % 8 === 0){
            break;
        }
        else if ( num % 9 === 0){
            break;
        }
        else if ( num % 10 === 0){
            break;
        }
        else if ( num % 11 === 0){
            break;
        }
        else if (num % 12 === 0){
           break;
        }
        else {
            return num;
        }
    }
}
console.log (prime (1));


function palindrome(str) {
    const len = str.lenght;
    for(i=0, i < len/z ++ ) {
        if (str [1] !== str [len -1- !]){
            return false;
        }else{
            return true;
        }
    }
}
console.log (is palindrome ("tundenut"));


function ispalindrome (str){
    const reverse = str.split (""). reverse(). joint ("");
    const reversevalues = splitvalues. reverse;
    const joinvalues = reversevalues.joint(""),
    if (str === joinvalues){
     console.log(false);
    }
}
ispalindrome("tundenut")