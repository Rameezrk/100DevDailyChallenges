//challenge 1 - Find the first non-consecutive number - https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

//solution

function firstNonConsecutive (arr) {

for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}


//challenge 2 - Return Negative - https://www.codewars.com/kata/55685cd7ad70877c23000102

//solution

function makeNegative(num) {
  // Code?
  return -Math.abs(num)
}

//challenge 3 - Calculate BMI - https://www.codewars.com/kata/57a429e253ba3381850000fb

//solution

function bmi(weight, height) {
  let output = Math.round(weight/Math.pow(height,2))

  if (output <= 18.5) {
      return 'Underweight'
  } else if (output <= 25.0) {
      return 'Normal'
  } else if (output <= 30.0) {
      return 'Overweight'
  } else {
      return 'Obese'
  }
}

//challenge 4 - CSV representation of array - https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

//solution

function toCsvText(array) {
   // good luck
  return array.join('\n')
}

//challenge 5 - Aspect Ratio Cropping - Part 1 - https://www.codewars.com/kata/596e4ef7b61e25981200009f

//solution 

function aspectRatio(x,y){
    let outputX = Math.ceil((y * 1.77777))

    return [outputX,y]
}

//end
