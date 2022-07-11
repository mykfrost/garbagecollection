//Programmer is not in control of garbage collection
//Math in JavaScript

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

document.getElementById("demo").innerHTML = Math.round(4.6);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // expected output: 0
  
  console.log(Math.random());

  //Javascript strings
  const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"


const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);

// Concatenation using "+"
// You can also concatenate strings using the + operator:

const greeting2 = "Hello";
const name2 = "Chris";
console.log(greeting2 + ", " + name2); // "Hello, Chris"

//Numbers vs. strings
const name3 = "Front ";
const number3 = 242;
console.log(`${name3}${number3}`); // "Front 242"

// If you have a numeric variable that you want to convert to a string but not change otherwise,
//  or a string variable that you want to convert to a number but not change otherwise, you can use 
//  the following two constructs:
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

// Conversely, every number has a method called toString() that converts it to the equivalent string. Try this:

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);
//Including expressions in strings

const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);  // "I like the song Fight the Youth. I gave it a score of 90%."

//Template literals
//They use back tick

const another =
` Hello Michael
Thank you for joining my mailing list

Regards
Michael`;
console.log(another);
const jina = "Michael Otieno Okello";
const namba = 2434343434343;
const another2 =
` Hello ${jina},

Thank you for joining my mailing list

You are number ${namba}.

Regards
Michael`;
console.log(another2);

//Date Objects

const now = new Date();

now.setFullYear(2028);


console.log(now);

const date1 = new Date('May 11 2018 9:00')

console.log(date1);

const date2 = new Date(2022,11,30,10);
console.log(date2);