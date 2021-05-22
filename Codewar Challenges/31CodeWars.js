//challenge 1 - Remove First and Last Character - https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

//solution

function removeChar(str){
 //You got this!

return str.substring(1, str.length-1)
};

//challenge 2 - Sum Mixed Array - https://www.codewars.com/kata/57eaeb9578748ff92a000009

//solution

function sumMix(x){
//   return x.reduce((a,b) => (a+b))

  let numberConvert = x.map(i => parseInt(i))
  return numberConvert.reduce((a,b) => (a+b))
}

//challenge 3 - Convert a string to an array - https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

//solution

function stringToArray(string){

  // code code code
let convertString = string.split(' ')
return convertString
}

//challenge 4 - Remove String Spaces - https://www.codewars.com/kata/57eae20f5500ad98e50002c5

//solution

function noSpace(x){
  let x1 = x.split(' ')

  return x1.join('')
}

//challenge 5 - Stringy Strings - https://www.codewars.com/kata/563b74ddd19a3ad462000054

//solution

function stringy(size) {
  // your code here
  let output = ''
  //loop through all the numbers up until the size thats been put in
  for (let i = 1; i <= size; i++) {
     output+=i%2
  }
  return output
}

//end
