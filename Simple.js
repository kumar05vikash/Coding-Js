/**
 * Question 1st
 * Callback Function
 */

function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
  }

  var arr = [1, 2, 3, 4, 5];

  modifyArray(arr, function() {
    console.log("array has been modified", arr);
  });

/**
 * Question 2nd
 * Given a string, reverse each word in the sentence
 */

 var string = "Welcome to this Javascript Guide!";

 // Output becomes !ediuG tpircsavaJ siht ot emocleW
 var reverseEntireSentence = reverseBySeparator(string, "");

 // Output becomes emocleW ot siht tpircsavaJ !ediuG
 var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
 console.log("reverseEachWord----------->",reverseEachWord)

 function reverseBySeparator(string, separator) {
   return string.split(separator).reverse().join(separator);
 }

/***
 * Question 3rd
 * How to check if an object is an array or not? Provide some code.
 *
 */

var arrayList = [1, 2, 3];
console.log("Array.isArray(arrayList);--------->", Array.isArray(arrayList));

// if(Object.prototype.toString.call(arrayList) === '[object Array]') {
//     console.log('Array!');
//   }

/**
 * Question 4
 * empty an array
 */

 var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];

//  Method 1
//  arrayList = [];
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']

// Method 2
// arrayList.length = 0;
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []

// Method 3
// arrayList.splice(0, arrayList.length);
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []

// Method 4
while(arrayList.length) {
  arrayList.pop();
}

/**
 * Question 5
 * Check nuber is decimal integer or not
 */

 function isInt(num) {
    return num % 1 === 0;
  }

  console.log(isInt(4)); // true
  console.log(isInt(12.2)); // false
  console.log(isInt(0.3)); // false

/**
 * Question 6
 * Implement enqueue and dequeue using only two stacks
 */

 var inputStack = []; // First stack
 var outputStack = []; // Second stack

 // For enqueue, just push the item into the first stack
 function enqueue(stackInput, item) {
   return stackInput.push(item);
 }

 function dequeue(stackInput, stackOutput) {
   // Reverse the stack such that the first element of the output stack is the
   // last element of the input stack. After that, pop the top of the output to
   // get the first element that was ever pushed into the input stack
   if (stackOutput.length <= 0) {
     while(stackInput.length > 0) {
       var elementToOutput = stackInput.pop();
       stackOutput.push(elementToOutput);
     }
   }

   return stackOutput.pop();
 }

/**
 * Question 7th
 * Make this work
 */

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
  return arr.concat(arr);
}

let arrayDublicateData= duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
console.log("arrayDublicateData--->",arrayDublicateData)

/**
 * Question 8th
 * Write a "mul" function which will properly when invoked as below syntax
 */

 console.log(mul(2)(3)(4)); // output : 24
 console.log(mul(4)(3)(4)); // output : 48

 function mul (x) {
    return function (y) { // anonymous function
      return function (z) { // anonymous function
        return x * y * z;
      };
    };
  }

/**
 * Question 9th
 * Write a function that would allow you to do this?
 */

 function createBase(baseNumber) {
    return function(N) {
      // we are referencing baseNumber here even though it was declared
      // outside of this function. Closures allow us to do this in JavaScript
      return baseNumber + N;
    }
  }

  var addSix = createBase(6);
  console.log(" addSix(10---->", addSix(10)) // returns 16
  console.log("addSix(21)---->", addSix(21)) // returns 27

/**
 * Question 10th
 * FizzBuzz Challenge
 * Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3,
 * "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
 */

 for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0;
     let b = i % 5 == 0;
    console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
  }

/**
 * Question 11th
 * Given two strings, return true if they are anagrams of one another
 * For example: Mary is an anagram of Army
 * It uses sequences of UTF-16 code units values.
 */

var firstWord = "Mary";
var secondWord = "Army";

console.log(isAnagram(firstWord, secondWord)); // true

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("")
  b = b.split("").sort().join("")

  return a === b;
}

/**
 * Question 12th
 * How would you use a closure to create a private counter?
 */

 function counter() {
    var _counter = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
    return {
      add: function(increment) { _counter += increment; },
      retrieve: function() { return 'The counter is currently at: ' + _counter; }
    }
  }

  // error if we try to access the private variable like below
  // _counter;

  // usage of our counter function
  var c = counter();
  c.add(5);
  c.add(14);

  // now we can access the private variable in the following way
  c.retrieve(); // => The counter is currently at: 14
  console.log("c-------->",c.retrieve())

/**
 * Question 13th
 *  Provide some examples of non-bulean value coercion to a boolean one Mid
 *  The question is when a non-boolean value is coerced to a boolean, does it become true or false, respectively?
 */

//  The specific list of "falsy" values in JavaScript is as follows:

//  "" (empty string)
//  0, -0, NaN (invalid number)
//  null, undefined
//  false

//  Any value that's not on this "falsy" list is "truthy." Here are some examples of those:

//  "hello"
//  42
//  true
//  [ ], [ 1, "2", 3 ] (arrays)
//  { }, { a: 42 } (objects)
//  function foo() { .. } (functions)

/**
 * Question 14th
 * What will be the output of the following code?
 */

// Problem
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

// Above code would give output 1undefined. If condition statement evaluate using eval so
// eval(function f() {}) which return function f() {} which is true so inside if statement
// code execute. typeof f return undefined because if statement code execute at run time,
// so statement inside if condition evaluated at run time.

/**
 * Question 15th
 * What will the following code output?
 *
 */

 Problem
(function () {
  var a = b = 5;
})();

console.log(b);

// The code above will output 5 even though it seems as if the variable was declared within 
// a function and can't be accessed outside of it. This is because
// var a = b = 5;  is interpreted the following way:
var a = b;
b = 5;
// But b is not declared anywhere in the function with var so it is set equal to 5 in the global scope.


/**
 * Question 16
 * Write a function that would allow you to do this
 */

 Problem
 multiply(5)(6);


// //  Answer
//  You can create a closure to keep the value of a even after the inner 
//  function is returned. The inner function that is being returned 
//  is created within an outer function, making it a closure, and it has
//  access to the variables within the outer function, in this case the variable a.
 
 function multiply(a) {
   return function(b) {
     return a * b;
   }
 }
 
 console.log(multiply(5)(6));


/**
 * Question 17
 * How does the this keyword work? Provide some code examples
 */

