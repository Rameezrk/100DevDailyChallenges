//challenge 1 - Reversed Strings -  https://www.codewars.com/kata/5168bb5dfe9a00b126000018

//solution


function solution(str){
  let result = ''
  let str1 = str.split('').reverse()

  for (let i = 0; i < str1.length; i++) {
    result += str1[i]
  }
return result
}

//challenge 2 - Parse nice int from char problem - https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

//solution

function getAge(inputString){
// return correct age (int). Happy coding :)
  return parseInt(inputString)
}

//challenge 3 - Super Duper Easy - https://www.codewars.com/kata/55a5bfaa756cfede78000026

//solution

function problem(x){
  //your code here
  if (x === Number(x)) {
    return x * 50 + 6
  } else {
    return 'Error'
  }
}

//challenge 4 - Are arrow functions odd? - https://www.codewars.com/kata/559f80b87fa8512e3e0000f5

//solution

function odds(values){
  // arrow it
  return values.filter( values => values % 2 !== 0);
}

//challenge 5 - Convert a Boolean to a String - https://www.codewars.com/kata/551b4501ac0447318f0009cd

//solution

function booleanToString(b){
  //your code here
  return b.toString()
}

//end
