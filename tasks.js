// /   Create a function that takes an integer as an argument and returns "Even" 
// for even numbers or "Odd" for odd numbers.
 const evenOrOdd = (number) => number % 2 === 0 ? 'Even' : 'Odd';

// Very simple, given an integer or a floating-point number, find its opposite.
 function opposite(number) {
    return -number
  }

// The first century spans from the year 1 up to and including the year 100, the second century - from
//  the year 101 up to and including the year 200, etc.
  function century(year) {
   const str = [...year.toString()];
   if (str.at(-1) == 0 && str.at(-2) == 0) return +str.slice(0, str.length - 2).join('')
    return +str.slice(0, str.length - 2).join('') + 1
  }


//   Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
  function abbrevName(name){
    const arr = name.split(' ');
    let result = '';
    result = arr[0][0].toUpperCase() + '.' + arr[1][0].toUpperCase()
    return result;
}


// Complete the solution so that it reverses the string passed into it.
function solution(str){
    let res = str.split('').reverse().join('')
  return res
}

// Usually when you buy something, you're asked whether your credit card number, 
// phone number or answer to your most secret question is still correct. However, 
// since someone could look over your shoulder, you don't want that shown on your screen. 
// Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters
//  into '#'.
function maskify(cc) {
    if (cc.length <= 4) return cc;
  const str = cc.slice(cc.length - 4);
  const result = [];
  for (let i = 0; i < cc.length - 4; i++) {
    result.push('#')
  }
  return result.join('').concat(str);
}


// It's pretty straightforward. Your goal is to create a function that removes 
// the first and last characters of a string. You're given one parameter, the original string.
//  You don't have to worry with strings with less than two characters.
function removeChar(str){
    let result = str.split('');
    result.pop()
    result.shift()
   return result.join('')
   };


// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.
   function createPhoneNumber(numbers){
        const phone = '(' + numbers.slice(0,3)
        .join('') + ')' + ' ' + numbers.slice(3,6)
        .join('') + '-' + numbers.slice(6)
        .join('');
        return phone;
   }

//    How many arguments

   const args_count = (...arg) => {return arg.length}


//    In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

//    years divisible by 4 are leap years
//    but years divisible by 100 are not leap years
//    but years divisible by 400 are leap years
//    Additional Notes:
   
//    Only valid years (positive integers) will be tested, so you don't have to validate them
   function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) return true;
    if (year % 400 === 0) return true;
    return false;
  }


//   If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

  var countSheep = function (num) {
    if (!num) return '';
    let sheepCount = ''
    let i = 1;
    while ( i !== num + 1) {
        sheepCount += i + ' sheep...';
        i++
    }
    return sheepCount
  }



//   Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.

//   Inherited object properties should not be applied
  
//   An example says more than a thousand words..

  var format = function (str, obj) {
    const regex = /{([^}]+)}/;
    let res = str.split(' ')
    if (typeof obj === 'object') {
        res.forEach((el,i) => {
        const match = el.match(regex);
        if (match && obj[match[1]]) {
            res[i] = el.replace('{' + match[1] + '}', obj[match[1]]);
        } 
    })
    }
    if (obj.length > 0) {
        res.forEach((el,i) => {
            const match = el.match(regex);
            if (match && obj[match[1]] !== undefined) {
               console.log(obj[match[1]]);
                res[i] = el.replace('{' + match[1] + '}', obj[match[1]]);
            }
        })
    }
    return res.join(' ');
};


function chunk(arr, num) {
    const result = []; 
    let temp = [];
    let count = 0;   
    for (let i = 0; i < arr.length; i++) {
      if (count < num) {
        temp.push(arr[i])
            count++     
      } else {
        result.push(temp)
        temp = [arr[i]]
        count = 1 
      }   
    }   
    if(temp.length > 0) { 
      result.push(temp)  
    }      
    return result 
}  
console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'j'], 2))

// Creates a new array concatenating array with any additional arrays and/or values.
//concat(array, [values])


 
console.log(concat([1], 2, [3], [[[4]]]));
// => [1, 2, 3, [[4]]]
 
console.log(concat([], 2));
// => [ 2 ]

function concat (arr, ...values) {
  const result = arr.concat()
  values.forEach( el => {
    if (Array.isArray(el)) {
      result.push(...el)
    } else {
      result.push(el)
    }
  })
  return result
}




// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc,el) => {
    el > 0 ? acc += el : null
    return acc
  }, acc = 0)
}

console.log(positiveSum([1,-2,3,4,5]));


// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  const result = s.split(' ').sort(((a,b) =>a.length - b.length
  ))
  return result[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));




// In this kata you will create a function that takes a list of non-negative integers
//  and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter(el => typeof el === 'number')
}

// I will give you an integer. Give me back a shape that is as long and wide
//  as the integer. The integer will be a whole number between 1 and 50.
function generateShape(integer){
  let result = '';
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
        j + 1 === integer ? result += '+\n' : result += '+'
    }
  }
  return result.slice(0, result.length - 1);
}

console.log(generateShape(5));


// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount([...str]) {
  const map = {a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'};
  let count = 0;
  str.forEach(el => {
    if (map[el]) {
      count++
    }
  })
  return count;
}

console.log(getCount("abracadabra"));



// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

function digPow(n, p){
  const arr = n.toString().split('');
  let result = 0;
  arr.forEach(el => {
    result += Math.pow(el, p);
    p++;
  })
  if (result % n === 0) return result / n;
  return -1
  
}

console.log(digPow(89, 1));





// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
function min(arr, toReturn) {
 return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
  
}



console.log(min([1,2,3,4,5], 'index'));


// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  const result = [];
  a.forEach(el => {
    if (b.indexOf(el) === -1) result.push(el);
  })
  return result;
}

console.log(arrayDiff([1,2,3], [1,2]));


// Find the capitals

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
	const result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) result.push(word.indexOf(word[i]))
  }
  return result;
};

console.log(capitals('CodEWaRs'));



// Insert dashes
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will i
// nsert dashes ('-') between each two odd digits in num. For example: if num is 454793 
// the output should be 4547-9-3. Don't count zero as an odd digit.
// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  const arr = num.toString().split('');
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i+1]) {
      result.push('-')
    }
  }
  return result.join('');
}



console.log(insertDash(454793));


// Homogenous arrays
// Challenge:

// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

// Example:

// Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

function filterHomogenous(arrays) {
  const arr = [];
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].every(el => typeof el === 'number') && arrays[i].length > 0 ||
    arrays[i].every(el => typeof el === 'string') && arrays[i].length > 0 ? 
    arr.push(arrays[i]) : null

  }
  return arr;
}


console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));


// Lottery Ticket
// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

function bingo(ticket, win){
  let result = 0;
  ticket.forEach(el => {
    [...el[0]].some(letter => letter.charCodeAt() === el[1]) ? result++ : null
  })
  console.log(result);
  return result >= win ? 'Winner!' : 'Loser!'
}


console.log(bingo([['FKTTDCNL',68], ['HAAOFEYX',69], ['FDB',77], ['JEWJW',86], ['DAC',90], ['NEZTY',79], ['CGAWQHUC',76], ['XEDWAEQD',89], ['XWLBZZR',69], ['FUM',90]]  , 1));


// Row Weights
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

function rowWeights(array){
  const result = [];
  result.push(array.reduce((acc,el,i) => {
    if (i % 2 === 0 ){
        acc += el
    }
    return acc
  }, acc = 0));
  result.push(array.reduce((acc,el,i) => {
    if (i % 2 !== 0 ){
        acc += el
    }
    return acc
  }, acc = 0));
  return result
}

console.log(rowWeights([50,60,70,80]));


// Scrolling Text

// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

function scrollingText(text){
  const result = [];
  let arr = [...text.toUpperCase().slice()];
  let i = 0;
  while (i < text.length) {
   
    result.push(arr.join(''))
    let a = arr.shift();
    arr.push(a)
    
    i++;
  }
  return result;
}

console.log(scrollingText("abc"));




// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form.

function expandedForm(num) {
  const temp = num.toString().split('');
  const res = [];
  while (temp.length != 0 ) {
    let a = temp.shift();
    if (a !=='0') res.push(a + '0'.repeat(temp.length))
  }
  return res.reduce((acc, el) => acc += ' + ' + el)
}

console.log(expandedForm(420370022));



// Is every value in the array an array?
const arrCheck = value => value.every(el => Array.isArray(el))



// Make a square box!
// Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.

function box(n){
  let result = new Array(n).fill('')
  let dash = '-';
  let space = ' ';

  for (let i = 0; i < n; i++) {
    i !== 0 || i !== n - 1 ? space = ' ' : '-';
    i === 0 || i === n - 1 ? space = '-' : ' ';
    for (let j = 0; j < n; j++) {
      j === 0 || j === n - 1 ? result[i]+= dash : result[i] += space
    }
  }
  return result;
}


console.log(box(5));



// Magic Index
// A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.


function findMagic(arr){
  let res;
  arr.forEach((el,i) => {
    if (el === i ) res = i;
  })
  return res ? res : -1
}

console.log(findMagic([-20,-10,2,10,20]));



// Email Address Obfuscator

obfuscate = function(email) {
  return email.replace(/@/s, ' [at] ').replace(/\./g, ' [dot] ')
  
}


console.log(obfuscate('Code_warrior@foo.ac.uk'));

// Count the smiley faces!

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

function countSmileys(arr) {
  let res = 0;
  const example = [')', 'D', 'D', ')'];
  const example1 = ['~', '-'];
  const example2 = [':', ';'];
  arr.forEach(el => {
    if (el.length === 2 && example.some(item => item === el.at(-1)) && example2.some(item => item === el.at(-2))) {
       res++
    }
    if (el.length === 3 && example.some(item => item === el.at(-1)) && example1.some(item => item === el.at(-2)) && example2.some(item => item === el.at(-3))) {
      res++
    }
  })
  return res
}

console.log(countSmileys([':D',':~)',';~D',':)']));



// LESSON 2 PART 2



// Length of missing array
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

function getLengthOfMissingArray(arrayOfArrays) {
  let num = 0;
  if (arrayOfArrays === null || arrayOfArrays.length === 0) return num
  if (arrayOfArrays.some(el => el === null) || arrayOfArrays.some(el => el.length === 0)) return num
  arrayOfArrays.sort((a,b) => {
   return a.length - b.length
  })
  if (arrayOfArrays[0].length === 0) return num;
  arrayOfArrays.forEach((el,i) => {
    if(arrayOfArrays[i+1]) {
      if (el.length + 1 !== arrayOfArrays[i+1].length) num = el.length + 1;
    }
  });
  return num;
}


function twoSum(numbers, target) {
  const arr = numbers.slice('');
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    console.log(arr[0] + arr[1]);
    arr[0] + arr[1] === target ? result.push(numbers.indexOf(arr[0]),numbers.lastIndexOf(arr[1])) : null;
    let a = arr.shift();
    arr.push(a)

  }
  return result
}



// function twoSum(numbers, target) {
//   const obj = {};

//   for (let i = 0; i < numbers.length; i++) {
//     obj[numbers[i]] = i
//   }
//   console.log(obj);
//   for (let i = 0; i < numbers.length; i++) {
//     const diff = target - numbers[i];
    
//     if (obj[diff]) {
//      return [i, obj[diff]]
//     }
//   }
  
// }


// console.log(twoSum( [1,2,3,8,9,], 4));

// Data Reverse
function dataReverse(data) {
  const result = new Array(data.length / 8);
  let count = 0;
  let i = 0;
  for (let i = 0; i < data.length; i+= 8) {
    result[count] = data.slice(i, i + 8)
    count++

  }
  return result.reverse().flat()
}



console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));


// Proof Read

function proofread (str) { 
  result = str.toLowerCase().replace(/ie/g, 'ei').split('.')
  result.forEach((el,i) => {
    if (el.length > 0) {
      result[i] = el.trim();
      result[i] = result[i].replace(result[i][0], result[i][0].toUpperCase())
    }
  })
   return result.join('. ').trim()
  } 

  console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."));


// 
// Format words into a sentence
  function formatWords(words){
    
    if (words === null || words.length === 0) return '';
    const arr = words.filter(el => el !== '')
    if (arr.length === 1) return arr[0];
    let result = '';
    
    arr.forEach((el,i) => {
      if (arr[i + 1]) {
        !arr[i + 2] ?  result += el : result += el + ', '
      }
      if (!arr[i + 1]) {
        result+= ' and ' + el
      }
    })
    return result
  }

  console.log(formatWords(['one', 'two', 'three', 'four']));


// Simple Fun #79: Delete a Digit

  function deleteDigit(n) {
    const start = n.toString().split('')
    const result = [];
    for (let i = 0; i< start.length; i++) {
      let step = start.slice('');
      step.splice(i, 1)
      result.push(+step.join(''))
    }
    return Math.max(...result)
    
  }

  console.log(deleteDigit(152));

// Equal Sides Of An Array

  function findEvenIndex(arr){
    let b = {};
    let first;
    let second;
    for (let i = 0; i < arr.length; i++) {
      b[arr[i]] = i;
      first = arr.slice(0, i).length > 0 ? arr.slice(0, i).reduce((acc,el) => acc+=el) : 0
      second = arr.slice(i+1, arr.length).length > 0 ? arr.slice(i+1, arr.length).reduce((acc,el) => acc+=el) : 0
      if (first === second ) {
        return b[arr[i]]
      }
    }
    return -1
}

console.log(findEvenIndex([10,-80,10,10,15,35,20]));

// Easy Balance Checking
function balance(book) {
  let result = '';
  let totalExpense = [];
  const arr = book.split('\n');
  arr.forEach((el,i) => arr[i] = el.replace(/[!=:?;{},]/g, ''));
  const clearArr = arr.filter(el => el)
  let balance = +clearArr.shift();
  clearArr.forEach((el,i) => {
    let a = el.split(' ');
    clearArr[i] = [a[0],a[1],+a[2]]
  })
  result += `Original Balance: ${balance.toFixed(2)}\r\n`
  clearArr.forEach(el => {
  balance = balance - el[2];
  totalExpense.push(+el[2])
  result += el[0] + ' ' + el[1] + ' ' + el[2].toFixed(2) + ' Balance ' + balance.toFixed(2) + '\r\n';
  })
  result += `Total expense  ${totalExpense.reduce((acc,el) => acc+=el).toFixed(2)}\r\n`;
  result += `Average expense  ${(totalExpense.reduce((acc,el) => acc+=el) / totalExpense.length).toFixed(2)}`
  return result
}

var b2=`1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`
console.log(balance(b2));


// Birthday I - Cake

function cake(x, y){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetObject = {};
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    alphabetObject[letter] = i+1;
  }
  let percentage = 0;
  for (let i = 0; i < y.length; i++) {
    if (i % 2 === 0 ) {
        percentage+= y[i].charCodeAt();
    }
    if (i % 2 !== 0 ) {
        percentage+= alphabetObject[y[i]]
      }
  }
  result = (percentage / x) * 100;
  console.log(alphabetObject);
  return result >= 70 ? "Fire!" : "That was close!";
}

console.log(cake(653, "jrfwrts"));


// Element equals its index


function indexEqualsValue(a) {
  let start = 0;
  let end = a.length - 1;
  let middle;
  let result = [];

  while (start <= end) {
    middle = Math.floor((end + start) / 2);
    
    if (middle === a[middle]) {
      result.push(middle);
      end = middle - 1
    } else if (a[middle] > middle) {
      end = middle - 1;
    } else {
      start = middle + 1
    }
  }
  return result.length > 0 ? Math.min(...result) : -1;
}

console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]));




function validParentheses(parens) {
  const stack = [];
  const pattern = '()'
  let i = 0;
if (parens.length == 0 ) return true;
  while (parens.length > i) {
    stack.push(parens[i]);
    i++;
    let end = stack[stack.length - 1];
    let penultimate = stack[stack.length - 2];
    let sum = penultimate + end;
     if (pattern.includes(sum)) {
      stack.pop();
      stack.pop()
     }
  }
  return stack.length === 0;
}

console.log(validParentheses("()()((()"));


// Evaluating prefix Polish notation
function calculate(expression) {
  const operations = {

  }
  return Number(expression);
}
console.log(calculate('+ 3 5'));

// Run-length encoding
var runLengthEncoding = function(str){
  const result = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i+1]) {
      result.push([count, str[i]])
      count = 0;
    }
  }
  return result;
}
console.log(runLengthEncoding("hello world!"));

// Is a number prime?
function isPrime(num) {
  if (num <= 1) return false;
  const test = Math.floor(Math.sqrt(num))
  for (let i = 2; i <= test; i++){
    if (num % i === 0) return false;
  }
  return true
}
console.log(isPrime(4));

// Zero-plentiful Array
function zeroPlentiful(arr){
  let count = 0;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count++;
    if (arr[i] !== 0 || arr[i+1]===undefined) {
      result.push(count);
      count = 0;
    }
   };
  check = result.filter(el => el > 0);
  return check.every(el => el >= 4) ? check.length : 0
}
console.log(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0]));

// Kebabize
function kebabize(str) {
  const result = str.replace(/[0-9]+/g, "").split('');
  const reg = /[A-Z ]/g;
  for (let i = 0; i < result.length; i++) {
    if (result[i].match(reg)) {
      const replace = '-' + result[i].toLowerCase();
      result[i] = replace;
    };
  }
  console.log(result);
  if (result.at[0].includes('-')) result[0] = result[0].replace('-', '');
  return result.join('');
}
console.log(kebabize('CamelsHaveThree3Humps'));


// Word a10n (abbreviation)
function abbreviate(string) {
  let str = string.split(/(\b\w+\b|[^\w\s])/g);
  console.log(str);
  let result = '';
  str.forEach((el,index) => {
    if (el[el.length - 1] === '!') str[index].replace('!', ' !')
    if( el.match(/-/) && el.length > 3) {
       const interval = el.split('-');
       interval.forEach((el,i) => {
        if (el.length > 3) {
          const replaceStr =  el[0] + (el.length - 2) + el[el.length -1];
          interval[i] = replaceStr;
        }
         const joinedInterval =  interval.join('-');
          str[index] = joinedInterval;
       })
    } else if (el.length > 3) {
      const replaceStr =  el[0] + (el.length - 2) + el[el.length -1];
      str[index] = replaceStr;
    }
  })
  return str.join('')
}
console.log(abbreviate("elephant-rides are really fun!"));

// Implement myReduce and myFilter


Array.prototype.myFilter = function (cb) {
  const result = [];
  this.forEach(el => {
    cb(el) ? result.push(el) : null
  })
  return result
}

Array.prototype.myReduce = function (cb,init) {
  let acc = init ? init : this[0];
  for (let i = init !== undefined ? 0 : 1; i < this.length; i++) {
    acc = cb(acc,this[i])
  }
  
  return acc;
}

console.log([1,2,2,4].myFilter((el => el === 2))) //[2,2]
console.log([1,2,3,4].myReduce(((acc,cur) => acc += cur))) //[10]



// objects

// Complementary DNA
function DNAStrand(dna){
  const map = {
    A: 'T',
    C: 'G',
    T: 'A',
    G: 'C'
  }
  let result = '';
  for (let i = 0; i < dna.length; i++) {
    if (map[dna[i]]) {
      result += map[dna[i]];
    }
    
  }
  return result;

}

console.log(DNAStrand("ATTGC"));

// Convert A Hex String To RGB

function hexStringToRGB(hexString) {
  const r = parseInt(hexString.slice(1,3), 16);
  const g = parseInt(hexString.slice(3,5), 16);
  const b = parseInt(hexString.slice(5,7), 16);
  return {r: r, g: g, b: b}
}

console.log(hexStringToRGB("#FF9933"));

// Convert the score

function scoreboard(string) {
  const score = {
    nil: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  }
  const result = [];
  const arr = string.split(' ');
  arr.forEach(el => {
    if (score[el]) {
      result.push(+score[el])
    }
  })
  return result;
}  

console.log(scoreboard('The score is four nil'));

// The Office I - Outed

function outed(meet, boss){
const count = Object.keys(meet).length;
let value = Object.values(meet).reduce((acc,item) => acc += item);
if (meet[boss]) value += meet[boss];
if (value / count > 5) {
  return 'Nice Work Champ!'
} else {
  return 'Get Out Now!'
}
}


console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'));



// Who's Online?

const whosOnline = (friends) => {
  const result ={
  };
  friends.forEach(el => {
    if(el.status === 'offline') {
      result[el.status] ? result[el.status].push(el.username) : result[el.status] = [el.username];
    } else if  
    (el.status === 'online' && el.lastActivity > 10) {
      result.away ? result.away.push(el.username) : result['away'] = [el.username];
    } else {
      result[el.status] ? result[el.status].push(el.username) : result[el.status] = [el.username];
    }
  })
  return result;
  }

  console.log(whosOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }]));

// Duplicate Encoder
  function duplicateEncode(word){
    let result = '';
    const dictionary = {};
    
    word.toLowerCase().split('').forEach(el => {
      dictionary[el] ? dictionary[el] += 1 : dictionary[el] = 1
    });
    word.toLowerCase().split('').forEach(el => {
      dictionary[el] > 1 ? result += ')' : result += '(';
    });
    return result;
}
console.log(duplicateEncode("Success"));



// Anagram Detection
var isAnagram = function(test, original) {
  const dictionaryTest = {};
  const dictionaryOriginal = {};
  test.toLowerCase().split('').forEach(el => {
    dictionaryTest[el] ? dictionaryTest[el] += 1 : dictionaryTest[el] = 1
  });
  original.toLowerCase().split('').forEach(el => {
    dictionaryOriginal[el] ? dictionaryOriginal[el] += 1 : dictionaryOriginal[el] = 1
  });
  if (Object.keys(dictionaryOriginal).length !== Object.keys(dictionaryTest).length) {
    return false;
  }
  for (let key in dictionaryOriginal) {
    if (dictionaryOriginal[key] !== dictionaryTest[key]) {
      return false
    }
  }
  return true
};

console.log(isAnagram("TxFYNzOiRWeV", "TWYxFiOVeNR"));

// 
// Make a function that does arithmetic!
function arithmetic(a, b, operator){
  const dict = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    divide: (a,b) => a / b,
    multiply: (a,b) => a * b
  }

  return dict[operator](a,b)
}

console.log(arithmetic(1, 2, "add"));


// Pluck

function pluck(objs, name) {
  const result = [];
  objs.forEach(el => {
    result.push(el[name])
  })
  return result;
}

console.log(pluck([{a:1, b:3}, {a:2}], 'b'));

// Remove duplicate words

function removeDuplicateWords (s) {
  const result = [];
  s.split(' ').forEach(el => {
    if (!result.some(item => item === el)) {
      result.push(el)
    }
  })
  return result.join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));


// Find the unique number

function findUnique(numbers) {
  const a = {};
  while (numbers.length !== 0) {
    let step = numbers.pop();
    a[step] ? a[step] += 1 : a[step] = 1
  }
  for (let key in a) {
    if (a[key] === 1) return +key;
    
    
  }
}

console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]));

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

function greetDevelopers(list) {
  const result = [];
  list.forEach((el,i) => {
    result.push(el);

    result[i].greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`
  })
  return result
}
console.log(greetDevelopers([
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]));

// My Language Skills
function myLanguages(results) {
  const result = [];
  for (let [key, value] of Object.entries(results)) {
    value >= 60 ? result.push([key]) : null
  }
  return result.sort((a,b) => results[b] - results[a]).flat();
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}) );

// Group Anagrams

function groupAnagrams(words){
  let interval = {};
  words.forEach(el => {
    if (interval[el.split('').sort().join('')]) {
      interval[el.split('').sort().join('')].push(el);
    } else {
      interval[el.split('').sort().join('')] = [el];
    }
    
  })
      

  return Object.values(interval);
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));




// Merged Objects.
var a={1:'1',2:'2',3:'3'},
    b={3:'4',5:'6',6:'7',7:'8'},
    c={5:'9',8:'9',6:'12',23:'35'}
    o=[a,b,c];
function objConcat(o){
  const result = {};
  o.forEach(obj => {
    for (let [key, value] of Object.entries(obj)) {
      result[key] = value
    }
  })
  return result;
}
console.log(objConcat(o));

// From..To..Series #2: from arr1 to arr2. Find the most same sum value of pairs
function findPair(arr1,arr2){
  const dictionary = {};
  const intervalValue = {};
  const result = [];
    for (let i = 0; i < arr1.length; i++) {
      dictionary[i] = arr1[i] + arr2[i];
    }
 let step = Object.values(dictionary)
 step.forEach(el => {
  if (intervalValue[el]) {
    intervalValue[el].push(el)
  } else {
    intervalValue[el] = [el]
  }
 })
 let maxLength = 0;
 let currentValue = 0;
 Object.keys(intervalValue).forEach((key) => {
  if (maxLength < intervalValue[key].length) {
    maxLength = intervalValue[key].length;
    currentValue = intervalValue[key][0];
  }
  if (maxLength === intervalValue[key].length && currentValue < intervalValue[key][0]) {
    currentValue = intervalValue[key][0];
  }
});
if (maxLength <= 1) return [];
for (let key in Object.keys(dictionary)) {
  if (dictionary[key] === currentValue) {
    result.push([arr1[key],arr2[key]])
  }
}
return result;
}
console.log(findPair([1,2,3,4,5],[9,8,0,0,0]));


// sort
// Sort array by string length

function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
};

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));


// Double Sort

function dbSort(a){
  const numbers = a.filter((item) => typeof item === 'number');
  const strings = a.filter((item) => typeof item === 'string');
  numbers.sort((a, b) => a - b);
  strings.sort();
  return numbers.concat(strings);
  }

  console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));


  // Triple Sorting - Sort & Stringify a list by 3 attributes
  class Student {
    constructor(age, gpa, fullName) {
      this.age = age;
      this.gpa = gpa;
      this.fullName = fullName;
    };
  };
  var students = [new Student(23, 88, "David Goodman"), 
                    new Student(25, 82, "Mark Rose"), 
                    new Student(22, 90, "Jane Doe"),
                    new Student(25, 90, "Jane Dane")];

  function sort(students) {
    let result = '';
   students
                    .sort((a,b) => a.age - b.age)
                    .sort((a,b) => {
                     return a.fullName.split(' ')[1].charCodeAt(0) - b.fullName.split(' ')[1].charCodeAt(0)
                    })
                    .sort((a,b) => b.gpa - a.gpa)
  students.forEach((el,i) => students[i + 1] ? result += el.fullName += ',' : result += el.fullName )   
  return result;
  };
  console.log(sort(students));

  // Sort the odd
  function sortArray(array) {
    const result = new Array(array.length);
    const intervalArr = array.filter(el => el % 2 !== 0).sort((a,b) => a - b)
    array.forEach((el,i) => el % 2 === 0 ? result[i] = el : null);
    for (let i = result.length - 1; i >= 0; i--) {
      if (result[i] === undefined) {
        let pop = intervalArr.pop();
        result[i] = pop;
      }
    }
    return result;
  }
  console.log(sortArray([5, 8, 6, 3, 4]));

  // Sorting by bits
  function sortByBit(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
      min = i;
      for (let j = i + 1; j < arr.length; j++) {
        let first = arr[min].toString(2).split('').reduce((acc,cur)=> acc+= +cur,0);
        let second = arr[j].toString(2).split('').reduce((acc,cur)=> acc+= +cur,0);
        if (first > second) {
          min = j
        }
        else if (first === second && arr[min] > arr[j] ) {
          min = j
        } 
      }
      if (min !== i) {
        [arr[i],arr[min]] = [arr[min],arr[i]]
      }
    }
    return arr
  }
  console.log(sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0]));

  // Alphabetized
  function alphabetized(s) {
    const dictionary = {};
    s = s.replace(/[^a-zA-Z]/g, '').split('');
    s.forEach(el => {
      if (dictionary[el.toLowerCase()]) {
        dictionary[el.toLowerCase()].push(el)
      } else {
        dictionary[el.toLowerCase()] = [el]
      }
    })
    const arr = Object.values(dictionary);
    arr.sort((a,b) => {
      return a.join('').toLowerCase().charCodeAt(0) - b.join('').toLowerCase().charCodeAt(0)
    })
    return arr.flat().join('');
  }
  console.log(alphabetized("The Holy Bible"));


  // Sort Strings by Most Contiguous Vowels
  function sortStringsByVowels(strings){
    const dictionary = {
      "a": 'a', "e": 'e',"i": 'i',"o": 'o',"u": 'u',"A": 'A',"E": 'E',"I": 'I',"O": 'O',"U": 'U',
    }
    strings.sort((a,b) => {
      let first = 0;
      let firstMax = 0;
      let second = 0;
      let secondMax = 0;
      for (let i = 0; i < a.length; i++) {
        if (dictionary[a[i]]) {
          first++
        } else {
          if (first > firstMax) {
            firstMax = first;
          }
          first = 0
        }
      }
      if (firstMax === 0) firstMax = first;
      for (let i = 0; i < b.length; i++) {
        if (dictionary[b[i]]) {
          second++
        } else {
          if (second > secondMax) {
            secondMax = second;
          }
          second = 0
        }
      }
      if (secondMax === 0) secondMax = second;
      console.log(firstMax,secondMax);
      return secondMax - firstMax
    })
    return strings
    }
    console.log(sortStringsByVowels(["aa","eee","oo","iiii"]));


    // Simple frequency sort
    function solve(arr){
      const map = {};
      arr.forEach(el => {
        if (map[el]) {
          map[el].push(el)
        } else {
          map[el] = [el]
        }
      })
      const result = Object.values(map)
      result.sort((a,b) => {
        if (a.length === b.length) return a[0] - b[0];
        return b.length - a.length;
      })
      return [].concat(...result)
    }
    console.log(solve([2,3,5,3,7,9,5,3,7]));

    // Convert Hash To An Array
    function convertHashToArray(hash){
      const result = [];
      for (let key in hash) {
        result.push([`${key}`, hash[key]])
      }
      return result.sort((a, b) => a[0].localeCompare(b[0]))
    }
    console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}));



    
    // Sports League Table Ranking
  function computeRanks(number, games) {
    let min;
    const scoreTable = Array.from({ length: number }, () => ({ points: 0, goals: 0, against: 0, team: 0, rank: 0}));
    for (let i = 0; i < number; i++) {
      scoreTable[i].team = i + 1;
    }
    games.forEach(game => {
          if (game[2] > game[3]) scoreTable[game[0]].points += 2;
          if (game[3] > game[2]) scoreTable[game[1]].points += 2;
          if (game[2] === game[3]) {
            scoreTable[game[0]].points += 1;
            scoreTable[game[1]].points += 1;
          }
          scoreTable[game[0]].goals += game[2];
          scoreTable[game[0]].against += game[3];
          scoreTable[game[1]].goals += game[3];
          scoreTable[game[1]].against += game[2];

    })
    scoreTable.sort((a, b) => {
      if (a.points !== b.points) {
        return b.points - a.points;
      }
      const gdA = a.goals - a.against;
      const gdB = b.goals - b.against;
      if (gdA !== gdB) {
        return gdB - gdA;
      }
      return b.goals - a.goals;
    });
    let rank = 1;
    scoreTable.forEach((team, index) => {
      if (index > 0) {
        const prevTeam = scoreTable[index - 1];
        if (
          team.points === prevTeam.points &&
          team.goals === prevTeam.goals &&
          (team.goals - team.against) === (prevTeam.goals - prevTeam.against)
        ) {
          team.rank = prevTeam.rank;
        } else {
          team.rank = rank;
        }
      } else {
        team.rank = rank;
      }
      rank++;
    });
    const results = new Array(number);
    scoreTable.forEach(team => {
      results[team.team - 1] = team.rank
    })
    return results;
}
console.log(computeRanks(4, 
  [[0, 3, 1, 1],
   [1, 2, 2, 2],
   [1, 3, 2, 0],
   [2, 0, 2, 0]])); 