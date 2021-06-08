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

//challenge 5 - noobCode 01: SUPERSIZE ME.... or rather, this integer! - https://www.codewars.com/kata/5709bdd2f088096786000008

//solution

function superSize(num){

  let output = String(num).split("").map((num)=>{
  return Number(num)})

  return Number(output.sort((a,b) => b-a).join(''))
}

//challenge 6 - Convert a String to a Number! - https://www.codewars.com/kata/544675c6f971f7399a000e79

//solution

var stringToNumber = function(str){
  // put your code here
  return parseInt(str);
}

//challenge 7 - Gravity Flip - https://www.codewars.com/kata/5f70c883e10f9e0001c89673

//solution

const flip=(d, a)=>{
  //TODO
  if (d === 'R') {
    return a.sort((a, b) => a-b)
  } else if (d === 'L') {
    return a.sort((a, b) => b-a)
  }
}

//challenge 8 - Sum The Strings - https://www.codewars.com/kata/5966e33c4e686b508700002d

//solution

function sumStr(a,b) {

  let aZero = 0
  let abTotal = 0
  let bZero =0

  if (a === '') {
    aZero
  } else {
    aZero = parseInt(a)
  }

  if (b === '') {
    bZero
  } else {
    bZero = parseInt(b)
  }

  abTotal = aZero + bZero
  return abTotal.toString()


}

//end
