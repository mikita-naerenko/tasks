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