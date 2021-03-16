//challenge 1 - Multiplication table for number - https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

//solution

function multiTable(number) {
  // good luck
  //taking number and doing a loop into int from 1 to 10
  let output = ''
  for (let i = 1; i < 11; i++) {
      output += `${i} * ${number} = ${number * i}`
      if (i < 10) {
        output += '\n'
      }
  }
  return output
}


//challenge 2 - Grasshopper - Grade book - https://www.codewars.com/kata/55cbd4ba903825f7970000f5

//solution

function getGrade (s1, s2, s3) {
  // Code here
  // if else all of them?

  let mean = (s1+s2+s3) / 3

  if (mean <= 100 && mean >= 90) {
      return 'A'
  } else if (mean < 90 && mean >= 80) {
      return 'B'
  } else if (mean < 80 && mean >= 70) {
      return 'C'
  } else if (mean < 70 && mean >= 60) {
      return 'D'
  } else {
      return 'F'
  }

}

//challenge 3 - get character from ASCII Value - https://www.codewars.com/kata/55ad04714f0b468e8200001c

//solution

function getChar(c){
  // ...
  return String.fromCharCode(c)
}

//challenge 4 - Invert values - https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

//solution

function invert(array) {


  let output = []
  for (let i = 0; i < array.length; i++) {
    output.push(-array[i])
  }
  return output
}

//challenge 5 - Difference of Volumes of Cuboids - https://www.codewars.com/kata/58cb43f4256836ed95000f97

//solution

function findDifference(a, b) {
  //loading...
  let aSum = a.reduce(function(a,b) {return a*b})
  let bSum = b.reduce(function(a,b) {return a*b})
  let output = 0

  if (aSum > bSum) {
      return output = aSum - bSum
  } else {
      return output = bSum - aSum
  }
}

//end
