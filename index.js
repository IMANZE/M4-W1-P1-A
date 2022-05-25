/** 1. Create a function to calculate the sum of the two given integers. If the two values are the same, 
 return triple their sum.**/

function sumIntegers(number1, number2) {
  if (number1 === number2) {
    return (number1 + number2) * 3;
  } else {
    return number1 + number2;
  }
}
// console.log(sumIntegers(3, 6));

/** 2. Create a function to check two given integers. Return true if one of them is 50 or if their sum is 50.**/

function checker(int1, int2) {
  return int1 === 50 || int2 === 50 || int1 + int2 === 50;
}
// console.log(checker(25, 25));

/**const checkInt = (num1, num2) =>
  num1 === 50 || num2 === 50 || num1 + num2 === 50;
console.log(checkInt(50, 30));**/

/** 3. Create a function to remove a character at a specified position from a given string: pass the position
and the string as parameters, return the new string.**/

function removeCharacter(pos, str) {
  return str.slice(0, pos - 2) + str.slice(pos - 1);
  // the 2nd slice function goes one step further
}
// const removeCharacter = (pos, str) => str.slice(0, pos) + str.slice(pos+1);
// console.log(removeCharacter(5, "Benjamin!"));

/** 4. Create a function to find and return the largest of three given integers.**/

function largestNumber(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1;
  } else if (number2 > number1 && number2 > number3) {
    return number2;
  } else if (number3 > number1 && number3 > number2) {
    return number3;
  }
}
//   console.log(largestNumber(17, 20, 1));

/** 5. Create a function to check if two numbers are in the range 40-60 or 70-100. Return true if they do, 
 return false if one (or both) don't.**/

function rangeChecker(numb1, numb2) {
  if (numb1 >= 40 && numb1 <= 60 && numb2 >= 40 && numb2 <= 60) {
    return "present in  range 40 - 60";
  } else if (numb1 >= 70 && numb1 <= 100 && numb2 >= 70 && numb2 <= 100) {
    return "present in range 70 - 100";
  } else {
    return "does not exist in range";
  }
}
// console.log(rangeChecker(72,89));

/** 6. Create a function to create a new string composed of a specified number of copies of a given string. 
 Pass the string and the number of copies as parameters.**/

const copiesCreator = (str, num) => {
  let newString = "";
  for (let i = 0; i < num; i++) {
    newString += str + " ";
  }
  return newString;
};
//  console.log(copiesCreator("Benjamin", 4));

/** 7. Create a function to display the city name if the string begins with "Los" or "New". Pass the city name 
 as a parameter. Return false if they start with a different string.**/

function beginsWith(str) {
  let threeCharacters = str.slice(0, 3);

  if (
    threeCharacters.toLowerCase() === "los" ||
    threeCharacters.toLowerCase() === "new"
  ) {
    return str;
  } else {
    return "definitely does not start with Los nor New";
  }
}
// console.log(beginsWith("new york"));

/** 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
 Pass the array as a parameter.**/

function sumCalculator(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}
// console.log(sumCalculator([9, 10, 228]));

/** 9. Create a function to test if an array of length 2 contains 1 OR 3. Return true is 
 it does, false if it doesn't.**/
const numIncluded = (arr) => arr.includes(1) || arr.includes(3);

// console.log(numIncluded([4, 1]));

/** 10. Create a function to test if an array of length 2 DOES NOT contain 1 or 3. 
 Return true if it doesn't, false if it does.**/

const numNotIncluded = (arr) => !numIncluded(arr);
// console.log(numNotIncluded([4, 5]));

/** 11. Create a function to find the longest string from a given array of strings. Pass the array as 
parameter and return the longest string.**/
/** 12. Create a function to find the types of a given angle:
Acute angle ⇒ between 0 and 90 degrees. Return acute.
Right angle ⇒ 90 degree. Return right
Obtuse angle ⇒ between 90 and 180. Return obtuse
Straight angle ⇒ 180 degrees. Return straight**/

function typeOfAngle(angle) {
  if (angle >= 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && ang < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else {
    return "angle range not included here!";
  }
}

// const typeOfAngle = (angle) =>
//   angle < 90
//     ? "acute angle"
//     : angle === 90
//     ? "right angle"
//     : angle < 180
//     ? "obtuse angle"
//     : angle === 180
//     ? "straight angle"
//     : "angle range not included here!";

// console.log(typeOfAngle(180));

/** 13. Create a function to find and return the index of the greatest element of a given array of integers that 
 you passed as a parameter**/

function findLargeNumIndex(array) {
  let greatestNumber = 0;
  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    if (greatestNumber < currentNumber) {
      greatestNumber = currentNumber;
    }
  }
  //indexOf() returns the first index(position) of any value
  const numberIndex = array.indexOf(greatestNumber);
  return numberIndex;
}
// console.log(findLargeNumIndex([50, 400, 1100]));

/** 14. Create a function to find and return the largest even number from an array of integers that is passed a parameter.**/

function largestEven(arr) {
  let evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 2 === 0) {
      evenNum.push(num);
    }
  }
  const largeNumIndex = findLargeNumIndex(arr);

  return evenNum[largeNumIndex];
}
// console.log(largestEven([80, 90,  30, 5, 6, 3, 1,]));

/** 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
 Return true if that's the case, return false if it's not.**/
function signChecker(a, b) {
  return (a < 0 && b > 0) || (a > 0 && b < 0);
}
// const signChecker = (a, b) => (a < 0 && b > 0) || (a > 0 && b < 0);
//  console.log(signChecker(-5, -10))

/** 16. Create a function to create and return a new string where the first 3 characters are in lower case and the others 
are in upper case. If the string's length is less than 3, convert the whole string into uppercase. Pass the original 
string as a parameter.**/

function stringConverter(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase();
  }
}
// console.log(stringConverter("benjamin"));

/** 17. Create a function to calculate the sum of two integers (passed as parameters). If the sum is in the 50-80 range, return 65, 
 otherwise, return 80.**/

function checkSumRange(a, b) {
  let sum = a + b;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}
//  const checkSumRange = (a, b) => (a + b > 50 && a + b < 80 ? 65 : 80);
console.log(checkSumRange(40, 130));

/** 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
The number has 3 as a factor ⇒ return Diego 
The number has 5 as a factor ⇒ return Riccardo 
The number has 7 as a factor ⇒ return Stefano 
If the number does not have 3,5, or 7, return the original number. 
⚠️ The factor is an integer which evenly divides a number without leaving a remainder. 
One number can have more than one factor, in that case you should return both names. 
Ex: 15 has both 3 and 5 has factors: the function will return DiegoRiccardo**/
/** 19. Create a function that that takes a phrase as a parameter and returns its acronym.
 * Ex. British Broadcasting Corporation returns BBC**/
