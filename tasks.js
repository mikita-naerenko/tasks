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