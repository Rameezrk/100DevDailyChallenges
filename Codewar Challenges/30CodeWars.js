//challenge 1 - Convert number to reversed array of digits - https://www.codewars.com/kata/5583090cbe83f4fd8c000051

//solution

function digitize(n) {
  let nString = n.toString()
  let nArray = nString.split('')
 let output = []
  for (let i = 0; i < nString.length; i++) {
    output.push(+nArray[i])
  }
  return output.reverse()
}


//challenge 2 - Cat years, Dog years - https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

//solution

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!

  if (humanYears === 1) {
    return [humanYears,humanYears*15,humanYears*15]
  } else if (humanYears === 2) {
    return [humanYears,24,24]
  } else {
    return [humanYears,humanYears*4+16,humanYears*5+14]
  }

}

//challenge 3 - The Wide-Mouthed frog! - https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89

//solution

function mouthSize(animal) {
  // code here
  if (animal.toLowerCase() === 'alligator') {
    return 'small'
  } else {
    return 'wide'
  }
}

//end
