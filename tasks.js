// /**
// |--------------------------------------------------
// | TASK 1
// |--------------------------------------------------
// */

// // Create A program that takes a name from the user and append "Mr." at the start of the name.

function OnClick1() {
  const Prompt = document.getElementById("task1input").value;
  const assigningValue = document.getElementById("h2stask1");
  const FinalValue = `Mr. ${Prompt}`;
  assigningValue.innerHTML = FinalValue;
}

// /**
// |--------------------------------------------------
// | TASK 2
// |--------------------------------------------------
// */

// // Create a program that takes an input from the user as a string, count the number of characters and show it in alert
// // HINT =====> String is an array of characters in javascript's core

function OnClick2() {
  const Prompt2 = document.getElementById("task2input").value;
  const FinalValue2 = Prompt2.length;
  document.getElementById("h2stask2").innerHTML = `Your Name Contains ${FinalValue2} Letters`;
}

// /**
// |--------------------------------------------------
// | TASK 3
// |--------------------------------------------------
// */

// // Create a program that takes an input from user as a string and remove any whitespaces in the input given.
// // HINT ====> search for "trim" in javascript
function OnClick3() {
  const Prompt3 = document.getElementById("task3input").value;
  const FinalValue3 = Prompt3.trim();
  document.getElementById("h2stask3").innerHTML = `Now There Are No WhiteSpaces In Your Name ${FinalValue3}`;
}
// /**
// |--------------------------------------------------
// | TASK 4
// |--------------------------------------------------
// */

// // Which of the following variable names are incorrect?
// // 1. _name
// // 2. $name_1
// // 3. 1_#name
// // 4. #name

// /**
// |--------------------------------------------------
// | TASK 5
// |--------------------------------------------------
// */

// Solve the equation below and the answer should not be in float point value

const equation = 2 + 6 * 8 - 9 + 2 / 3 + 9;
const FinalValue5 = Math.round(equation)
document.getElementById("task5h2").innerHTML = `The Answer Is ${FinalValue5}`;

// /**
// |--------------------------------------------------
// | TASK 6
// |--------------------------------------------------
// */
// What will be the output of the following program?

var product1 = 200 * 3;
600;
var product2 = 300;
var discount = 20;
var total = (product1 + product2) / discount;
document.getElementById("task6h2").innerHTML = `The Answer Is ${total}`;

// /**
// |--------------------------------------------------
// | TASK 7
// |--------------------------------------------------
// */
// write a program that performs the following operations

// 1. data type of phone number should be a number
// 2. data type of NIC should be string
// 3. add a greeting before the name e.g hello mr.{name}

var phoneNumber = 03205757562;
var NIC = 4250187968352;
var name = "umair";
var newNIC = toString(NIC);
function task7() {
  if (phoneNumber.toFixed && typeof newNIC == "string") {
    document.getElementById(
      "task7h2"
    ).innerHTML = `Hello Mr.${name} Your Phone Number is ${phoneNumber} and Your NIC Is ${NIC}`;
  }
}
task7();
// /**
// |--------------------------------------------------
// | TASK 8
// |--------------------------------------------------
// */
//  var age = 21

// write the following condition in a single line

//  if (age >= 20)  console.log("Eligible")

// HINT ====> search for single line statements in javascript

document.getElementById("task8h2").innerHTML =
  "age >= 20 ? console.log('Eligible') : console.log('Not Eligible')";

// /**
// |--------------------------------------------------
// | TASK 9
// |--------------------------------------------------
// */
// What will be the output of the following program?

var product1 = 500 * 3;
var product2 = 600;
var discount = 20;
var total = (product1 + product2) / discount;
var budget = 100;

if (total < budget) {
  document.getElementById("task9h2").innerHTML =
    "You did not exceed the budget";
} else {
  document.getElementById("task9h2").innerHTML =
    "You are not allowed to spend this much money";
}

// /**
// |--------------------------------------------------
// | TASK 10
// |--------------------------------------------------
// */
// What is the output of the following program

var SAT = 200;
var avg = 150;
var GPA = 3;
var sport = "snooker";

if (SAT > avg || GPA > 2.5 || sport === "football") {
  document.getElementById("task10h2").innerHTML = "You're an awesome student";
} else {
  document.getElementById("task10h2").innerHTML = "You are not eligible";
}

// /**
// |--------------------------------------------------
// | TASK 11
// |--------------------------------------------------
// */

var myMarks = [30, 45, 68, 32, 45];
var criteria = 30;
var bonusPoints = 5;

// Solve the following scenario using the code above

// You are given marks of a single student in an array, generate a loop that will "add" bonus points in each of the grade
// in the array, then compare the new marks with the criteria given if any mark is less than criteria the student will be
// marked failed otherwise passed

for (let i = 0; i < myMarks.length; i++) {
  var updatedMarks = myMarks[i] + bonusPoints;
  if (updatedMarks >= criteria) {
    document.getElementById("task11h2").innerHTML = "pass";
  } else {
    document.getElementById("task11h2").innerHTML = "fail";
  }
}

// /**
// |--------------------------------------------------
// | TASK 12
// |--------------------------------------------------
// */
// What will the output at each of the console statements?

var array = [1, 2, 3, 4, 5];
document.getElementById("task12h22").innerHTML = array.splice(2);
document.getElementById("task12h23").innerHTML = array;

var array2 = [6, 7, 8, 9, 0];
document.getElementById("task12h25").innerHTML = array2.splice(2, 1);
document.getElementById("task12h26").innerHTML = array2.splice(2, 0);
document.getElementById("task12h27").innerHTML = array2;

// /**
// |--------------------------------------------------
// | TASK 13
// |--------------------------------------------------
// */
// write an arrow function that takes in a string as an argument and returns the string in uppercase letters.


task131 = () => {
    var x = document.getElementById("task13Input");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;
    
    if (defaultVal == currentVal) {
        null
    } else {
        const tUC = currentVal.toUpperCase()
      document.getElementById("task13h2").innerHTML =  tUC
    }
}

// /**
// |--------------------------------------------------
// | TASK 14
// |--------------------------------------------------
// */
// Write a function to sort an array of numbers in ascending or descending order
var array = [1,12,31,44,5]
    document.getElementById('task14h21').innerHTML = array.sort(function(a, b){return a-b});
    document.getElementById('task14h22').innerHTML = array.sort(function(a, b){return b-a});

// /**
// |--------------------------------------------------
// | TASK 15
// |--------------------------------------------------
// */
// Write a function and the functions duty is to first check
// if the argument passed is a string..if it is then you should concatenate behind the sring "Welcome"  and return it
// if the argument passed is a number then it should be multiplied by the power of 2 and return it

function task151() {
    var x = document.getElementById("task15input1");
    var currentVal1 = x.value;
   
    
    if (typeof currentVal1 == "string") {
        document.getElementById('h2stask151').innerHTML = `Welcome ${currentVal1}`
    } else {
        null
    }
}
function task152() {
    var j = document.getElementById("task15input2");
    var currentVal2 = parseInt(j.value);

    if (currentVal2.toFixed) {
        document.getElementById('h2stask152').innerHTML = currentVal2 * 2
    } else {
        null
    }
}

// /**
// |--------------------------------------------------
// | TASK 16
// |--------------------------------------------------
// */
// Write a function to round a number to a specified number of digits. when passed as an argument and return it
// Example:
// roundNumber(4.6);
// Expected Ouput: 5 ===> The number is rounded off

function task16() {
    var Prompt = prompt("Enter Number To Round Off")
    document.getElementById('task16h2').innerHTML = Math.ceil(Prompt)
}

