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

//end
