//challenge 1 - Will you make it? - https://www.codewars.com/kata/5861d28f124b35723e00005e

//solution

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  let distance = mpg*fuelLeft
  if (distance >= distanceToPump) {
    return true
  } else {
    return false
  }
};

//challenge 2 - Enumerable Magic #25 - Take the First N Elements - https://www.codewars.com/kata/545afd0761aa4c3055001386

//solution

function take(arr, n) {
  // Your code here
  return arr.slice(0, n)
}

//challenge 3 - Twice as old - https://www.codewars.com/kata/5b853229cfde412a470000d0

//solution

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let calc = sonYearsOld*2

  if (dadYearsOld > calc) {
    return dadYearsOld - calc
  } else {
    return calc - dadYearsOld
  }
}

//challenge 4 - Do you speak "English"? - https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058

//solution

function spEng(sentence){
//write your code here
  return sentence.toLowerCase().includes('english')
}

//end
